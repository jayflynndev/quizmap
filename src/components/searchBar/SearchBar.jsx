import { useState } from "react";
import "./searchBar.scss";

const types = ["Pub Quiz", "Virtual Quiz"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "Pub Quiz",
    location: "",
    day: "",
    format: "",
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="Which City?" />
        <input
          type="text"
          name="day"
          min={0}
          max={10000000}
          placeholder="Which Day?"
        />
        <input
          type="text"
          name="format"
          min={0}
          max={10000000}
          placeholder="Which Format?"
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
