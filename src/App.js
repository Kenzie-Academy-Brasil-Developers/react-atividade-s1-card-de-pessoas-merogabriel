import Developer from "./components/Developer";
import './components/styles.css'

function App() {
  return (
    <div className='devs'>
      <Developer name="Gabriel" age="19" country="Brasil"></Developer>
      <Developer name="Filipe" age="28" country="Brasil"></Developer> 
      <Developer name="Mariana" age="24" country="Italia"></Developer>
    </div>
  );
}

export default App;
