import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home/homePage';
import About from './pages/About/aboutPage';
import Shop from './pages/Shop/shopPage';
import Blog from './pages/Blog/blogPage';
import Contact from './pages/Contact/contactPage';
import Footer from './components/Footer/footer';
import NewsLetter from './components/newsLetter/newsLetter';
import ArrowUp from './components/arrowUp/arrowUp';

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact={true} path="/home" element={<Home/>}/>
          <Route exact={true} path="/about" element={<About/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route exact={true} path='/blog' element={<Blog/>}/>
          <Route exact={true} path="/contact" element={<Contact/>}/>
        </Routes>
        <NewsLetter/>
        <Footer/>
        <ArrowUp/>
      </BrowserRouter>
  );
}

export default App;
