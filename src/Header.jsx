import { useContext, useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { UserContext } from "./contexts/UserContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { username, setUsername } = useContext(UserContext);

  const [newName, setNewName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      setUsername(newName);
      setNewName("");
    }
  };

  return (
    <header >
      <div>
        <h2 >Hei, {username}!</h2>
        <form onSubmit={handleSubmit} >
          <input 
            type="text"
            placeholder="Vaihda käyttäjänimi"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
           
          />
          <button type="submit" >
            Vaihda
          </button>
        </form>
      </div>
      <button 
        onClick={toggleTheme}
        
      >
        Vaihda teema ({theme})
      </button>
    </header>
  );
}
