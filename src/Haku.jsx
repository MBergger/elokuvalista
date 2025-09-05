import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default function Haku({ haku, setHaku }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div >
      <input 
        type="text" 
        placeholder="Hae elokuvia..." 
        value={haku} 
        onChange={(e) => setHaku(e.target.value)} 
        className={`p-2 w-full border rounded ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
      />
    </div>
  );
}
