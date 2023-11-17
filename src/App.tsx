import "./App.css";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/skills/Skills";
import { Projects } from "./layout/sections/projects/Projects";
import { Biography } from "./layout/sections/biography/Biography";
import { Contacts } from "./layout/sections/contacts/Contacts";
import { Footer } from "./layout/footer/Footer";
import { MobileApps } from "./layout/sections/main/mobileApps/MobileApps";
import { Particle } from "./components/particle/Particle";
import { GoTopBtn } from "./components/goTopBtn/GoTopBtn";

function App() {
  return (
    <div className="App">
      <Particle />
      <Header />
      <Main />
      <MobileApps />
      <Projects />
      <Biography />
      <Skills />
      <Contacts />
      <Footer />
      <GoTopBtn />
    </div>
  );
}

export default App;
