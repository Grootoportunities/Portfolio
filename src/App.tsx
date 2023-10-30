import "./App.css";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/skills/Skills";
import { Projects } from "./layout/sections/projects/Projects";
import { Biography } from "./layout/sections/biography/Biography";
import { Contacts } from "./layout/sections/contacts/Contacts";
import { Footer } from "./layout/footer/Footer";
import { MobileApps } from "./layout/sections/main/mobileApps/MobileApps";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <MobileApps />
      <Projects />
      <Biography />
      <Skills />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
