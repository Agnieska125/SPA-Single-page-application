import { Route, Routes } from 'react-router-dom';
import './app.css';
// import SectionAllProducts from './Components/SectionAllProducts';
// import SectionBest from './Components/SectionBest';
// import SectionCategories from './Components/SectionCategories';
// import SectionFooter from './Components/SectionFooter';
// import SectionHero from './Components/SectionHero';
// import SectionTestimonials from './Components/SectionTestimonials';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductsPage from './pages/ProductsPage';
import NotFoundPage from './pages/NotFoundPage';
import SingleProductPage from './pages/SingleProductPage';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<MainLayout />} >
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='products' element={<ProductsPage />} />
          <Route path='products/:id' element={<SingleProductPage />} />

          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
