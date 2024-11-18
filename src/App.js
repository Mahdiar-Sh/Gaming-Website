import Nav from "./component/nav/nav.js";
import Header from "./component/body/header/header.js";
import GameCategori from "./component/body/gameCategori/gameCategori.js";
import TrendingGame from "./component/body/trendingGame/trending.js";
import Footer from "./component/footer/footer.js";

function App() {
  return (
    <div className="container">
       <Nav></Nav>
      <Header></Header>
      <GameCategori></GameCategori>
      <TrendingGame></TrendingGame>
      <Footer></Footer>
    </div>
  );
}

export default App;
