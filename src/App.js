// Impotando arquivo CSS!
import './css/style.css';

// Importando Componentes!
import CpHeader from './components/CpHeader';
import CpBtnInicio from './components/CpBtnInicio';
import CpBanner from './components/CpBanner';
import CpQuemSou from './components/CpQuemSou';
import CpProjetos from './components/CpProjetos';
import CpContato from './components/CpContato';
import CpFooter from './components/CpFooter';

function App() {
  return (
    <div className="App">
      <CpBtnInicio />
      <CpHeader />
      
      <main>
        <CpBanner />
        <CpQuemSou />
        <CpProjetos />
        <CpContato />
      </main>

      <CpFooter />
    </div>
  );
}

export default App;


