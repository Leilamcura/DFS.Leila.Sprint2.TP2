// Sprint 2. TP2 Leila Cura

//const mongoose = require('mongoose');

import mongoose from "mongoose";

mongoose.connect ('mongodb+srv://Grupo-06:grupo06@cursadanodejs.ls9ii.mongodb.net/Node-js')
.then(() => console.log('Conexión exitosa a MongoDB'))
.catch(error => console.error('Error al conectar a MongoDB:', error));

// Esquema: estructura y reglas de un documento dentro de una colección
const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true},
    edad: { type: Number, min: 0 },
    planetaOrigen: {type: String, default: 'Desconocido' },
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createdAt: { type: Date, default: Date.now },
        creador: String
 }, {collection: 'Grupo-06'});

 const SuperHero = mongoose.model('SuperHero', superheroSchema);

 // Insertar superheroe
 async function insertSuperHero() {
    const hero = new SuperHero({
      "nombreSuperHeroe": "Spiderman",
      "nombreReal": "Peter Parker",
      "edad": 25,
      "planetaOrigen": "Tierra",
      "debilidad": "Radioactiva",
      "poderes": ["Trepar paredes", "Sentido arácnido", "Super fuerza"],
      "aliados": ["Ironman"],
      "enemigos": ["Duende Verde"],
        "creador": "Isaias"
   });
    await hero.save(); //el metodo save valida el documento antes de guardarlo
    console.log('Superheroe insertado:', hero);
 }

 insertSuperHero();

 // Actualizar
 async function updateSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.updateOne(
        { nombreSuperHeroe: nombreSuperHeroe },
        { $set: { edad: 26 } }
    );
    console.log('Resultado de la actualización:', result);
 }

 updateSuperHero('Spiderman');

 // Eliminar
 async function deleteSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.deleteOne({nombreSuperHeroe: nombreSuperHeroe});
    console.log('Superhéroe eliminado:', result);
 }

 deleteSuperHero('Spiderman');

// Buscar
 async function findSuperHeroes() {
    const heroes = await SuperHero.find({ planetaOrigen: 'Tierra'}); // método find - criterio de búsqueda
    console.log('Superhéroes encontrados:', heroes);
 }

 findSuperHeroes();