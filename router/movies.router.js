import express from "express";
import { getAllMovies, getMovieById, createMovies, updateMovieById, deleteMovieById } from "../service/movies.service.js";
const router = express.Router();
import { auth } from "../middleware/auth.js";


router.get("/", async function (request, response) {
      console.log(request.query);
      if(request.query.rating){
            request.query.rating = + request.query.rating //string('8') to number(8)
      }
      let movies = await getAllMovies(request.query);
      response.send(movies);
});
  
router.get("/:id", async function (request, response) {
      let{id} = request.params;
      let movie = await getMovieById(id);
      movie ? response.send(movie) : response.status(404).send({Message:"Movie not found"});
});
  
router.post("/", async function(request, response){
      let data = request.body;
      let result = await createMovies(data);
      response.send(result);
});
  
router.put("/:id", async function(request, response){
      let data2 = request.body;
      let{id} = request.params;
      let result1 = await updateMovieById(id, data2);
      response.send(result1);
});
  
router.delete("/:id", async function (request, response) {
      let{id} = request.params;
      let result2 = await deleteMovieById(id);
      console.log(result2)
      result2.deletedCount >= 1 ? response.send({Message: "Movie deleted successfully"}) : response.status(404).send({Message:"Movie not found"});
});

export default router;


