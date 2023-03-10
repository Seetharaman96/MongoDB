import { ObjectId } from "mongodb";
import { client } from "../index.js";

export async function deleteMovieById(id) {
      return await client.db("b42wd2").collection("movies").deleteOne({ _id: new ObjectId(id) });
}
export async function updateMovieById(id, data2) {
      return await client.db("b42wd2").collection("movies").updateOne({ _id: new ObjectId(id) }, { $set: data2 });
}
export async function createMovies(data) {
      return await client.db("b42wd2").collection("movies").insertOne(data);
}
export async function getMovieById(id) {
      return await client.db("b42wd2").collection("movies").findOne({ _id: new ObjectId(id) });
}
export async function getAllMovies(query) {
      return await client.db("b42wd2").collection("movies").find(query).toArray();
}
