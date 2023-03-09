import { client } from "../index.js";


export async function createUser(data) {
    // db.users.insertOne(data)
      return await client.db("b42wd2").collection("users").insertOne(data);
}

export async function getUserByName(userName) {
  return await client.db("b42wd2").collection("users").findOne({ userName: userName });
}