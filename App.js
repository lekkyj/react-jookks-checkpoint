import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through dream-sharing tech.",
      posterURL: "https://m.media-amazon.com/images/I/51nbVEuw1HL.jpg",
      rating: 8.8,
    },
    {
      title: "Interstellar",
      description: "A journey beyond the stars to save humanity.",
      posterURL: "https://m.media-amazon.com/images/I/71nDPyOYlEL._AC_SL1188_.jpg",
      rating: 8.6,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState(0);

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const handleAddMovie = () => {
    if (
      newMovie.title &&
      newMovie.description &&
      newMovie.posterURL &&
      newMovie.rating
    ) {
      setMovies([...movies, { ...newMovie, rating: Number(newMovie.rating) }]);
      setNewMovie({ title: "", description: "", posterURL: "", rating: "" });
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRate
  );

  return (
    <div className="App">
      <h1>Movie App</h1>

      <Filter
        filterTitle={filterTitle}
        setFilterTitle={setFilterTitle}
        filterRate={filterRate}
        setFilterRate={setFilterRate}
      />

      <div className="add-movie-form">
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) =>
            setNewMovie({ ...newMovie, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Poster URL"
