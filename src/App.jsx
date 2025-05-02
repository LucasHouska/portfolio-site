import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home"
import Header from "./components/Header/Header"
import './App.css'
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
