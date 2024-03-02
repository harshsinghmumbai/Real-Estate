import { BrowserRouter, Routes, Route } from "react-router-dom";
import Agents_Section from "./Components/Agents_Section";
// import Award_Section from "./Components/Award_Section";
import Explore_Section from "./Components/Explore_Section";
import Feature_Section from "./Components/Feature_Section";
// import Footer from "./Components/Footer";
import Hero_Section from "./Components/Hero_Section";
import Package_Section from "./Components/Package_Section";
import Property_Section from "./Components/Property_Section";
import Main_Header from "./Components/Main_Header";
import Error_page from "./Components/Error_page";
// import Question_Component from "./Components/Question_Component";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main_Header/>}>
            <Route index element={<Hero_Section/>} />
            <Route path="service" element={<Feature_Section />} />
            <Route path="blog" element={<Explore_Section />} />
            <Route path="pricing" element={<Property_Section />} />
            <Route path="employee" element={<Agents_Section />} />
            <Route path="package" element={<Package_Section />} />
            <Route path="*" element={<Error_page />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
