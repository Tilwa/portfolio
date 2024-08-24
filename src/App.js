import "./App.css";
import Contact from "./components/contact/Contact";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./page/home/Home";
function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     {/* <Route path="/about" element={<AboutPage />} />
    //     <Route path="/contact" element={<ContactPage />} /> */}
    //   </Routes>
    // </Router>
    <div>
      <Home />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
