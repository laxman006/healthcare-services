import React ,{useState , useEffect} from "react";
import ServiceList from "./components/ServiceList";
import AddService from "./components/AddService";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<ServiceList services={services} setServices={setServices} />} />
          <Route path="/add" element={<AddService setServices={setServices} />} />
        </Routes>
      </div>
    </Router>
        </div>
      );


}

export default App;


