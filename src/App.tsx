import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./components/Footer";
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import Things from './Pages/Things';
import Destination from './Pages/Destination'
import Plans from './Pages/Plans'
import Review from './Pages/Review'
import WriteReview from './components/WriteReview'

//Nested pages
import DestinationDetails from "./Pages/DestinationDetails";
import FilterPage from "./Pages/FilterPage";
import PackageDetails from "./Pages/PackageDetails";

import { Route, Routes } from "react-router-dom"; 

import { useState } from 'react';

import { useNavigate } from 'react-router-dom'

function App() {

  const navigate = useNavigate();

  const [activeState, setActiveState] = useState(null);

  const handleClick = (link: string, index: any) => {
    window.scrollTo(0, 0);

    setActiveState(index);

    navigate(link);
  }

  return (
    <div>
      <Navbar activeState={activeState} handleClick = {handleClick}/>
     
     <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/blogs" element={<Blogs />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/Things" element={<Things />} />

        <Route path="/plans" element={<Plans />} />

       <Route path="/destination">
          <Route index element={<Destination />} />
          <Route path="view/:id" element={<DestinationDetails />} />
          <Route path="/destination/view/:id/filterPage" element={<FilterPage />} />
          <Route path="/destination/view/:id/filterPage/packageDetails" element={<PackageDetails />} />
        </Route>

        <Route path="/review" element={<Review />} />
        
        <Route path="/write-review" element={<WriteReview />} />

      </Routes>


      <Footer  activeState={activeState} handleClick = {handleClick}/>
      
    </div>
  );
}

export default App;
