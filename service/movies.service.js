import { client } from "../index.js";

export async function deleteMovieById(id) {
      return await client.db("b42wd2").collection("movies").deleteOne({ id: id });
}
export async function updateMovieById(id, data2) {
      return await client.db("b42wd2").collection("movies").updateOne({ id: id }, { $set: data2 });
}
export async function createMovies(data) {
      return await client.db("b42wd2").collection("movies").insertMany(data);
}
export async function getMovieById(id) {
      return await client.db("b42wd2").collection("movies").findOne({ id: id });
}
export async function getAllMovies() {
      return await client.db("b42wd2").collection("movies").find({}).toArray();
}
