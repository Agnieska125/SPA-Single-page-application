import './app.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import SectionAllProducts from './Components/SectionAllProduct';
import SectionBest from './Components/SectionBets';
import SectionCategories from './Components/SectionCategories';
import SectionTestimonials from './Components/SectionTestimonials';
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
      <SectionTestimonials />
    </div>
  );
}

export default App;
