import jwt from "jsonwebtoken";

//custom middleware
export let auth = (request, response, next) => {
    try{
        let token = request.header("x-auth-token");
        console.log(token);
        jwt.verify(token, process.env.SECRET_KEY);
        next();
    }
    catch(err){
        response.status(401).send({message: err.message});
    }
}