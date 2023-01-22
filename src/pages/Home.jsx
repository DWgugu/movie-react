import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import './movieGrid.css'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;


const Home = (props) => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovie = async (url) => {

        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results);
    }

    useEffect(() => {

        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

        getTopRatedMovie(topRatedUrl);

    }, [])

    return (
        <div className="container">
            <h2 className="title">Melhores filmes:</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies.length > 0 && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default Home