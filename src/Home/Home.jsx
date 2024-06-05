import Main from "../Components/Main/Main";
import About from "../Components/About/About";
import Card from "../Components/Card/Card";
import Skill from "../Components/Skill/Skill";
import ContactForm from "../Components/ContactForm/ContactForm";
import Certificate from "../Components/Certificate/Certificate";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Main />
      <About />
      <Card />
      <Skill />
      <Certificate />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
