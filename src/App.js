import './styles.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Appointment from './routes/Appointment';
import { Calendar } from './components/Calendar';
import ContactList from './routes/ContactList';
import SignUpPro from './routes/SignUpPro';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/appointment" element={<Appointment/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/contactlist" element={<ContactList/>}/>
        <Route path="/signup" element={<SignUpPro/>}/>
      </Routes>

      
         
    </div>
  );
}

