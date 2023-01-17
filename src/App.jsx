import { useState } from 'react';
import Contacts from './components/contacts/Contacts';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

function App() {
   const [darkMode, setDarkMode] = useState(true);

   return (
      <div className={`App ${darkMode ? 'dark' : 'light'}`}>
         <Hero setDarkMode={setDarkMode} darkMode={darkMode} />
         <Skills />
         <Projects />
         <Contacts />
      </div>
   );
}

export default App;
