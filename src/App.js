import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './routes/MainPage';
import PatientRegisterPage from './routes/PatientRegisterPage';
import OPD from './routes/OPD';
import About from './routes/About';
import FAQ from './routes/FAQ';
import LoginPatient from './routes/LoginPatient';
import Patientdash from './routes/Patientdash';
import Availabledoctors from './routes/Availabledoctors';
import Doctordash from './routes/doctordash';
import Logindoctor from './routes/Logindoctor';





function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/opd" element={<OPD/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/patientregister" element={<PatientRegisterPage/>}/>
        <Route path="/patientregister/login" element={<LoginPatient/>}/>
        <Route path="/patientregister/login/patientdashboard" element={<Patientdash />}/>
        <Route path="/logindoctor" element={<Logindoctor/>}></Route>
        <Route path="/patientregister/login/patientdashboard/available" element={<Availabledoctors/>}/>
        <Route path="/logindoctor/doctordashboard" element={<Doctordash/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
