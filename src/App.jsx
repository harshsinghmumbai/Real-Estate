import Agents_Section from "./Components/Agents_Section";
import Award_Section from "./Components/Award_Section";
import Explore_Section from "./Components/Explore_Section";
import Feature_Section from "./Components/Feature_Section";
import Footer from "./Components/Footer";
import Hero_Section from "./Components/Hero_Section";
import Package_Section from "./Components/Package_Section";
import Property_Section from "./Components/Property_Section";
import Question_Component from "./Components/Question_Component";
import Header from "./Components/header";

const App = () => {
  return (
    <>
      <Header />
      <Hero_Section />
      <Feature_Section />
      <Property_Section />
      <Award_Section />
      <Explore_Section />
      <Agents_Section />
      <Package_Section />
      <Question_Component />
      <Footer/>
    </>
  );
};

export default App;
