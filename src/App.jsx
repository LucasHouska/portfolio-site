import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="projects">
          <ProjectsPage />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
