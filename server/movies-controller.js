const express = require("express");
const movieLogic = require("./movies-logic");
const router = express.Router();

//get Ten Movies
router.get("/ten-movies/:details", async (req, res, next) => {
  try {
    const movieDetails = req.params.details;
    let tenPopularMovies = await movieLogic.getTenMovies(movieDetails);
    res.send(tenPopularMovies);
  } catch (err) {
    return next(err);
  }
});

//home Card Description
router.get("/home-card/:id", async (req, res, next) => {
  try {
    const movieId = req.params.id;
    let homeCardExtendedDetails = await movieLogic.homeCardDescription(movieId);
    res.send(homeCardExtendedDetails);
  } catch (err) {
    return next(err);
  }
});

//Search Extended Description
router.get("/search-card/:details", async (req, res, next) => {
  try {
    const movieDetails = req.params.details;
    const searchDetails = await movieLogic.SearchExtendedDescription(
      movieDetails
    );
    res.send(searchDetails);
  } catch (err) {
    return next(err);
  }
});

//Modal Details Description
router.get("/modal/:id", async (req, res, next) => {
  try {
    const movieId = req.params.id;
    const modalDetails = await movieLogic.ModalDetailsDescription(movieId);
    res.send(modalDetails);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
