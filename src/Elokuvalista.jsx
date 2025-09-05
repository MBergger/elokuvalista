import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default function Elokuvalista({ elokuvat, poistaElokuva }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div >
      <h2 >Elokuvat</h2>
      <ul>
        {elokuvat.map((e, i) => (
          <li key={i} >
            <span>{e.title} ({e.year}) – {e.genre}</span>
            <button 
              onClick={() => poistaElokuva(i)} 
              className={`px-2 py-1 rounded ${theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-300 text-black"}`}
            >
              Poista
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
