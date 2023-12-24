import Award_Section from "./Components/Award_Section";
import Feature_Section from "./Components/Feature_Section";
import Hero_Section from "./Components/Hero_Section";
import Property_Section from "./Components/Property_Section";
import Header from "./Components/header";

const App = () => {
  return (
    <>
      <Header />
      <Hero_Section />
      <Feature_Section />
      <Property_Section />
      <Award_Section/>
    </>
  );
};

export default App;
