import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation></Navigation>
      <Carousel></Carousel>
      <Footer/>
    </div>
  );
}

export default App;
