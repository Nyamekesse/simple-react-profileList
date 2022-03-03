import "./App.css";
import data from "./data";
import List from "./List.js";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople((people) => {
      return [];
    });
  };
  return (
    <div className="container">
      <div className="wrapper">
        <h3 className="profile-title">{people.length} Contact Profiles</h3>
        <List people={people} />
        <button className="clean-btn" onClick={() => clearAll()}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default App;
