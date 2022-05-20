
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footwear from './components/Footwear';
import Contact from './components/Contact';
import Product from './components/Product';
import Mail from './components/Mail';
import Phone from './components/Phone';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const productList=[
  {"id":1,
    "imageUrl":"https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg",
    "title":"Men Red Shoe",
      "description":"When it comes to the various types of men’s shoes, there’s actually a hierarchy. To put it another way: not all types of dress shoes are created equal. But don’t freak out just yet. We’re here to go over the differences between an Oxford and a Derby, lace-ups and slip-ons and the other types of men’s dress shoes. Presenting the Men’s Shoe Guide: 12 Types of Men’s Shoes"},
    {"id":2,
    "imageUrl":"https://assets.ajio.com/medias/sys_master/root/20210627/KDfH/60d77373aeb269a9e310f5a9/puma_black_zeta_lace-up_running_shoes.jpg",
    "title":"Men Black shoe",
    "description":"When it comes to the various types of men’s shoes, there’s actually a hierarchy. To put it another way: not all types of dress shoes are created equal. But don’t freak out just yet. We’re here to go over the differences between an Oxford and a Derby, lace-ups and slip-ons and the other types of men’s dress shoes. Presenting the Men’s Shoe Guide: 12 Types of Men’s Shoes"},
    {"id":3,
    "imageUrl":"https://n1.sdlcdn.com/imgs/j/s/u/230X258_sharpened/ASIAN-Lifestyle-Navy-Casual-Shoes-SDL149794011-1-2474c.jpeg",
    "title":"Men navy blue shoe",
    "description":"When it comes to the various types of men’s shoes, there’s actually a hierarchy. To put it another way: not all types of dress shoes are created equal. But don’t freak out just yet. We’re here to go over the differences between an Oxford and a Derby, lace-ups and slip-ons and the other types of men’s dress shoes. Presenting the Men’s Shoe Guide: 12 Types of Men’s Shoes"},
    {"id":4,
    "imageUrl":"https://m.media-amazon.com/images/I/61utX8kBDlL._UL1100_.jpg",
    "title":"Men grey shoe",
    "description":"When it comes to the various types of men’s shoes, there’s actually a hierarchy. To put it another way: not all types of dress shoes are created equal. But don’t freak out just yet. We’re here to go over the differences between an Oxford and a Derby, lace-ups and slip-ons and the other types of men’s dress shoes. Presenting the Men’s Shoe Guide: 12 Types of Men’s Shoes"},
    {"id":5,
    "imageUrl":"https://mirzacdns3.s3.ap-south-1.amazonaws.com/cache/catalog/BSE0686/1-445x618.jpg",
    "title":"Men White shoe",
    "description":"When it comes to the various types of men’s shoes, there’s actually a hierarchy. To put it another way: not all types of dress shoes are created equal. But don’t freak out just yet. We’re here to go over the differences between an Oxford and a Derby, lace-ups and slip-ons and the other types of men’s dress shoes. Presenting the Men’s Shoe Guide: 12 Types of Men’s Shoes"},
    {"id":6,
    "imageUrl":"https://5.imimg.com/data5/OR/RY/KH/SELLER-1209694/sparx-men-sandals-ss-457--500x500.png",
    "title":"Synthetic Men blue sandal",
    "description":"When it comes to the various types of men’s shoes, there’s actually a hierarchy. To put it another way: not all types of dress shoes are created equal. But don’t freak out just yet. We’re here to go over the differences between an Oxford and a Derby, lace-ups and slip-ons and the other types of men’s dress shoes. Presenting the Men’s Shoe Guide: 12 Types of Men’s Shoes"},
    {"id":7,
    "imageUrl":"https://kxadmin.metroshoes.net/product/18-1486/350/18-1486M11.jpg",
    "title":"Men brown sandal",
    "description":"When it comes to the various types of men’s shoes, there’s actually a hierarchy. To put it another way: not all types of dress shoes are created equal. But don’t freak out just yet. We’re here to go over the differences between an Oxford and a Derby, lace-ups and slip-ons and the other types of men’s dress shoes. Presenting the Men’s Shoe Guide: 12 Types of Men’s Shoes"},
    {"id":8,
    "imageUrl":"https://cf.shopee.in/file/c42302619e8bc6527cc44c20eec4b4f9",
    "title":"Men black flipflop",
    "description":"When it comes to the various types of men’s shoes, there’s actually a hierarchy. To put it another way: not all types of dress shoes are created equal. But don’t freak out just yet. We’re here to go over the differences between an Oxford and a Derby, lace-ups and slip-ons and the other types of men’s dress shoes. Presenting the Men’s Shoe Guide: 12 Types of Men’s Shoes"},
    {"id":9,
    "imageUrl":"https://5.imimg.com/data5/BW/UJ/MY-3499318/leather-flip-flop-500x500.jpg",
    "title":"Men black leather flipflop",
    "description":"When it comes to the various types of men’s shoes, there’s actually a hierarchy. To put it another way: not all types of dress shoes are created equal. But don’t freak out just yet. We’re here to go over the differences between an Oxford and a Derby, lace-ups and slip-ons and the other types of men’s dress shoes. Presenting the Men’s Shoe Guide: 12 Types of Men’s Shoes"},
    {"id":10,
    "imageUrl":"https://5.imimg.com/data5/KK/PE/MY-13349829/men-27s-casual-sandals-500x500.jpg",
    "title":"Men brown leather sandal",
    "description":"When it comes to the various types of men’s shoes, there’s actually a hierarchy. To put it another way: not all types of dress shoes are created equal. But don’t freak out just yet. We’re here to go over the differences between an Oxford and a Derby, lace-ups and slip-ons and the other types of men’s dress shoes. Presenting the Men’s Shoe Guide: 12 Types of Men’s Shoes"},
]

function App() {
  return (
    <div>
      <Router>
        <header>
          <Navbar/>
        </header>
        <section>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/footwear" element={<Footwear products={productList} />}/>

            <Route path="/footwear/:id" element={<Product products={productList}/>}/> 
            <Route path="/contact" element={<Contact/>}>
              <Route path="mail" element={<Mail/>}/>
              <Route path="phone" element={<Phone/>}/>
              </Route>
         
          </Routes>
        </section>
      </Router>
      
    </div>
  );
}

export default App;
