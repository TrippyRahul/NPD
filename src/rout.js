import MainBanner from "./common/MainBanner";
import Cards from "./components/Cards";
import FeaturesBanner from "./components/FeaturesBanner";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Homepage from "./common/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Blogs from "./components/Blogs";
import Privacy from "./components/Privacy";
import Disclaimer from "./components/Disclaimer";
import TermsAndCondition from "./components/TermsAndCondition";
import Contact from "./components/Contact";
export default  function App() {
  return (
    <>
      <MainBanner />
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/aboutus" element={<Aboutus/>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path="/privacy" element={<Privacy/>}></Route>
        <Route path="/disclaimer" element={<Disclaimer/>}></Route>
     
        <Route path="/terms" element={<TermsAndCondition/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
     
      </Routes>
      <Footer />
    </>
  );
}


