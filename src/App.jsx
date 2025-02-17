import Nav from "./component/nav/nav.jsx";
import Header from "./component/body/header/header.jsx";
import GameCategori from "./component/body/gameCategori/gameCategori.jsx";
import TrendingGame from "./component/body/trendingGame/trending.jsx";
import Footer from "./component/footer/footer.jsx";
import './index.css'

function App() {
  return (
    <div className="">
      <Nav></Nav>
      <Header></Header>
      <GameCategori></GameCategori>
      <TrendingGame></TrendingGame>
      <Footer></Footer>
    </div>
  );
}

export default App;