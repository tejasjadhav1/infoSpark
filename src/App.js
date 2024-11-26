import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Services from "./Components/Services";


function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
          <Header></Header>
          
      </header>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/services" element={<Services/>}/>
    </Routes>
    </Router>
  );
}

export default App;
