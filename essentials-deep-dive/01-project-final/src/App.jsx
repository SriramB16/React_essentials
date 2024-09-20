import { Examples } from './components/Examples'
import CoreConcepts from './components/CoreConcepts'
import Header from './components/Header/Header.jsx';


function App() {

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
