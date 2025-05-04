import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import "./App.css";

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
    </>
  );
}

export default App;
