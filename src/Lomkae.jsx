import { useState, useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default function Lomake({ lisaaElokuva }) {
  const { theme } = useContext(ThemeContext);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && year && genre) {
      lisaaElokuva({ title, year, genre });
      setTitle("");
      setYear("");
      setGenre("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 >Lisää elokuva</h2>
      <input 
        type="text" 
        placeholder="Nimi" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        className={`p-1 m-1 border rounded ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
      />
      <input 
        type="text" 
        placeholder="Vuosi" 
        value={year} 
        onChange={(e) => setYear(e.target.value)} 
        className={`p-1 m-1 border rounded ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
      />
      <input 
        type="text" 
        placeholder="Genre" 
        value={genre} 
        onChange={(e) => setGenre(e.target.value)} 
        className={`p-1 m-1 border rounded ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
      />
      <button type="submit" className={`px-2 py-1 rounded m-1 ${theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-300 text-black"}`}>
        Lisää
      </button>
    </form>
  );
}
