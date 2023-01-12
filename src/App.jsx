import Contacts from './components/contacts/Contacts';
import Hero from './components/hero/Hero';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';

function App() {
   return (
      <div className='App'>
         <Hero />
         <Skills />
         <Projects />
         <Contacts />
      </div>
   );
}

export default App;
