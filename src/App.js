import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Components
import { Navbar } from './components/Navbar';
// Pages
import { CurrencyForm } from './pages/CurrencyForm';
import { CurrencyList } from './pages/CurrencyList';
// CSS
import './App.css';
import { AppContextProvider } from './context/AppContext';

//https://api.exchangeratesapi.io/latest

function App() {
  return (
    <Router>
      <AppContextProvider>
      <Navbar />
        <Routes>
          <Route path='/' element={<CurrencyForm />} />
          <Route path='/list' element={<CurrencyList />} />
        </Routes>
      </AppContextProvider>
    </Router>
  );
}

export default App;
