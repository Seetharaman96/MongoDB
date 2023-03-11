import express from "express";
const router = express.Router();
import { createUser, getUserByName } from "../service/users.service.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import


async function genterateHashedPassword(password){
    let noOfRounds = 10;
    let salt = await bcrypt.genSalt(noOfRounds);
    let hashedPassword = await bcrypt.hash(password, salt);
    // console.log(salt);
    // console.log(hashedPassword);
    return hashedPassword;
}
// -----------------------------------------signUp-------------------------------------
router.post("/signup", async function(request, response){
    // let data = request.body;
    // let result = await createMovies(data);
    // response.send(result);
    let { userName, password } = request.body;
    let userFromDb = await getUserByName(userName);
    // console.log(userFromDb);
    if(userFromDb){
      response.status(400).send({message: "Username already exist"})
    }else if(password.length < 8){
      response.status(400).send({message: "Password should atleast contains 8 characters"})
    }else{
      let hashedPassword = await genterateHashedPassword(password);
      let result = await createUser({
        userName: userName,
        password: hashedPassword,
      });
      response.send(result);
    }
});

// -------------------------------login---------------------------------------

router.post("/login", async function(request, response){
  let { userName, password } = request.body;
  let userFromDb = await getUserByName(userName);
  console.log(userFromDb);
  if(!userFromDb){
    response.status(401).send({message: "Invalid credentials"})
  }else{
    let storedDbPassword = userFromDb.password;
    let isPasswordCheck = await bcrypt.compare(password, storedDbPassword);
    // console.log(isPasswordCheck);
    if(isPasswordCheck){
      let token = jwt.sign({id: userFromDb._id}, process.env.SECRET_KEY)
      response.send({message: "Login successful", token: token})
    }else{
      response.status(401).send({message: "Invalid credentials"})
    }
  }
});
export default router;
