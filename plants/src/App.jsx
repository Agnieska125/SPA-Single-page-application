import './app.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import SectionAllProducts from './Components/SectionAllProduct';
import SectionBest from './Components/SectionBets';
import SectionCategories from './Components/SectionCategories';
import TopLine from './Components/TopLine';


function App() {
  return (
    <div className="app">
      <TopLine />
      <Header />
      <Hero />
      <SectionCategories />
      <SectionBest />
      <SectionAllProducts />

    </div>
  );
}

export default App;
