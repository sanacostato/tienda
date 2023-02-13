import './App.css';
import AppRouter from './routes/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
function App() {
  return (
     <BrowserRouter>
   
     <PayPalScriptProvider options={{ "client-id": "Ab0HZMWAOAxwzFHerQ0mBGr2tbD7wiC1_ZTnSJhs3BShVCwKj11XjnCgkYbUxtKFtTGczSyKT1Hdd3vR" }}>
    <Navbar/>
    <AppRouter/>
    <Footer/>
     </PayPalScriptProvider>
     </BrowserRouter>
  );
}

export default App;
