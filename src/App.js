import React ,{useState , useEffect} from "react";
import ServiceForm from "./components/ServiceForm";
import ServiceList from "./components/ServiceList";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import './styles.css';


const App = () =>{
  const [services , setServices] = useState([]);

      useEffect(() => {
      const storedServices = JSON.parse(localStorage.getItem("services"));
      if (!storedServices) {
        setServices([]);
      } else {
        setServices(storedServices);
      }
    }, []);

      useEffect (() => {
        localStorage.setItem('services', JSON.stringify(services));
      } ,[services]);

      return (
        <div>
        <Router>
            <NavBar />
          <Routes>
            <Route path="/" element={<ServiceList services={services} setServices={setServices} />} />
            <Route path="/add" element={<ServiceForm setServices={setServices} />} />
          </Routes>
        </Router>
        </div>
      );


}

export default App;


