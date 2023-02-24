import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
// const express = require("express"); // "type": "commonjs"
import express, { request } from "express"; // "type": "module"
import { MongoClient } from "mongodb";
const app = express();

const PORT = 4000;
// console.log(process.env.MONGO_URL);
// const MONGO_URL = "mongodb://127.0.0.1";
const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL); // dial
// Top level await
await client.connect(); // call
console.log("Mongo is connected !!!  ");

app.use(express.json())

app.get("/", function (request, response) {
    response.send("🙋‍♂️, 🌏 🎊✨🤩");
  });

app.get("/movies", async function (request, response) {
  const movies = await client.db("b42wd2").collection("movies").find({}).toArray();
  response.send(movies);
});

app.get("/movies/:id", async function (request, response) {
    // console.log(request.params)
    let{id} = request.params;
    // let movie = movies.find((mv)=>mv.id===id)
    let movie = await client.db("b42wd2").collection("movies").findOne({id: id});
    movie ? response.send(movie) : response.status(404).send({Message:"Movie not found"});
  });

  app.post("/movies", async function(request, response){
    let data = request.body;
    let result = await client.db("b42wd2").collection("movies").insertMany(data)
    response.send(result);
  });

    app.put("/movies/:id", async function(request, response){
    let data2 = request.body;
    let{id} = request.params;
    let result1 = await client.db("b42wd2").collection("movies").updateOne({id: id},{$set: data2})
    response.send(result1);
  });

  app.delete("/movies/:id", async function (request, response) {
    let{id} = request.params;
    let result2 = await client.db("b42wd2").collection("movies").deleteOne({id: id});
    console.log(result2)
    result2.deletedCount >= 1 ? response.send({Message: "Movie deleted successfully"}) : response.status(404).send({Message:"Movie not found"});
  });
  
app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));


