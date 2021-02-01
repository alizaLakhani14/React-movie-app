import React, { useState, useEffect } from "react";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from "./../config";
import { useHomeFetch } from "./hooks/useHomeFetch";
import Header from "./elements/Header";

const Home = () => {
  const { movies, loading, error, fetchMovies } = useHomeFetch();
  console.log(movies);
  return (
    <>
      <Header />
    </>
  );
};

export default Home;
