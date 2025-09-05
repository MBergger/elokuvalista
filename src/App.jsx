import { useState } from "react";
import Elokuvalista from "./Elokuvalista";
import Lomake from "./Lomkae";
import Haku from "./Haku";
import Header from "./Header";

import { ThemeProvider, ThemeContext } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import { useContext } from "react";

function AppContent() {
  const [elokuvat, setElokuvat] = useState([
    { title: "Inception", year: "2010", genre: "Sci-Fi" },
    { title: "Parasite", year: "2019", genre: "Drama" },
    { title: "The Matrix", year: "1999", genre: "Action" }
  ]);

  const [haku, setHaku] = useState("");
  const { theme } = useContext(ThemeContext);

  const lisaaElokuva = (uusi) => {
    setElokuvat([...elokuvat, uusi]);
  };

  const poistaElokuva = (index) => {
    setElokuvat(elokuvat.filter((_, i) => i !== index));
  };

  const suodatetut = elokuvat.filter(e =>
    e.title.toLowerCase().includes(haku.toLowerCase())
  );

  return (
    <div className={`app ${theme} max-w-lg mx-auto p-4`}>
      <Header />
      <Haku haku={haku} setHaku={setHaku} />
      <Lomake lisaaElokuva={lisaaElokuva} />
      <Elokuvalista elokuvat={suodatetut} poistaElokuva={poistaElokuva} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </ThemeProvider>
  );
}
