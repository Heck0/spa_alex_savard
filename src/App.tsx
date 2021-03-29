import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer>
        <Hero />
        <Category />
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;
