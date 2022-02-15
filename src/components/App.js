import "/home/cj/Documents/react/bday-rem/src/App.css";
import List from "./List";
import Data from "./data";
import { useState } from "react";
function App() {
  const [people,setPeople] = useState(Data)
  return (
    <main className="container-fluid">
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={()=>setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
