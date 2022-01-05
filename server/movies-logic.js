let ErrorType = require("./errors/error-type");
let ServerError = require("./errors/server-error");
const axios = require('axios');
const myApiKey = 'apikey=ce16e4bc';


async function getTenMovies(moviesDetails){
    try{
        let response = await axios.get(`https://www.omdbapi.com/?${myApiKey}&plot=short&i=${moviesDetails}`);
        return response.data;
    }catch(err){
        throw new ServerError(ErrorType.GENERAL_ERROR, JSON.stringify(moviesDetails), err)
    }
}

async function homeCardDescription(movieId){
    try{
        let response = await axios.get(`https://www.omdbapi.com/?${myApiKey}&plot=short&i=${movieId}`);
        return response.data; 

    }catch(err){
        throw new ServerError(ErrorType.GENERAL_ERROR, JSON.stringify(movieId), err)
    }   
}

async function SearchExtendedDescription(movieDetails) {
    try{
        let response = await axios.get(`https://www.omdbapi.com/?${myApiKey}&t=${movieDetails}&plot=full`);
        return response.data;

    }catch(err){
        throw new ServerError(ErrorType.GENERAL_ERROR, JSON.stringify(movieDetails), err)
    }
}

async function ModalDetailsDescription(movieId) {
    try{
        let response = await axios.get(`https://www.omdbapi.com/?${myApiKey}&i=${movieId}&plot=full`);
        return response.data;

    }catch(err){
        throw new ServerError(ErrorType.GENERAL_ERROR, JSON.stringify(movieId), err)
    }
}

module.exports = {
    getTenMovies,
    homeCardDescription,
    SearchExtendedDescription,
    ModalDetailsDescription
}