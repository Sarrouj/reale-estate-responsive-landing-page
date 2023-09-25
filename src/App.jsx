import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Brands from "./Components/Brands/Brands";
import Products from "./Components/Products/Products";
import Value from "./Components/Value/Value";
import Contact from "./Components/Contact/Contact";
import GetStarted from "./Components/GetStarted/GetStarted";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="app-wrapper">
        <div className="shadow" />
        <Header />
        <Hero />
      </div>
      <Brands />
      <Products />
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </>
  );
}

export default App;
