import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
            Find your best quiz night, In person or online
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
            nihil aspernatur, magni animi quis culpa blanditiis ipsa inventore
            incidunt consequatur vero eligendi molestiae repellendus obcaecati
            ab! Illum libero officiis suscipit!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>Pub Quiz</h1>
              <h2>In a Pub</h2>
            </div>
            <div className="box">
              <h1>Virtual Quiz</h1>
              <h2>Online</h2>
            </div>
            <div className="box">
              <h1>Reviewed</h1>
              <h2>By You and Our Team</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="img" />
      </div>
    </div>
  );
}

export default HomePage;
