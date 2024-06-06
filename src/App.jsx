import { Route, Routes, useLocation } from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import Home from "./Home/Home";
import About from "./Components/About/About";
import Card from "./Components/Card/Card";
import Skill from "./Components/Skill/Skill";
import ContactForm from "./Components/ContactForm/ContactForm";
import Certificate from "./Components/Certificate/Certificate";
import Loading from "./Loading";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { useEffect, useState } from "react";

// const App = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//     });
//   }, []);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    handleStart();

    setTimeout(handleComplete, 2000);

    return () => {};
  }, [location]);
  return (
    <div>
      {loading && <Loading />}
      <SideBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About data-aos="fade-up" />} />
        <Route path="/projects" element={<Card />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
    </div>
  );
};

export default App;
