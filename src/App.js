import './App.scss'
import OurServices from './Pages/OurServices/OurServices'
import { OurServicesProvider } from './Context/OurServicesContext'
import Header from './Components/Header/Header';

function App() {
  return (
    <main className="App">
      <OurServicesProvider>
        <Header />
        <OurServices />
      </OurServicesProvider>
    </main>
  );
}

export default App;
