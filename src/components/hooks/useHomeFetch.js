import { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../../config";

export const useHomeFetch = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [heroImage, setHeroImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const fetchMovies = async (endpoint) => {
    console.log("working");
    setLoading(true);
    try {
      const data = await (await fetch(endpoint)).json();
      console.log(data);
      setMovies([...data.results]);
      setHeroImage(data.results[0]);
      setCurrentPage(data.page);
      setTotalPages(data.total_pages);
    } catch (e) {
      setError(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchMovies(`${API_URL}movie/popular?api_key=${API_KEY}`);
  }, []);

  return { loading, error, movies, fetchMovies };
};
