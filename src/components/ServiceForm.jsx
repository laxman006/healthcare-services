import React , {useState} from 'react'
import ServiceItem from './Serviceitem';

const ServiceForm = ({setServices}) => {
  // state for service inputs
    const [services, setServicesLocal] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newService = { name , description , price};
        setServices((prevService)=>[...prevService, newService]);
        setName('');
        setDescription('');
        setPrice('');

    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name..' required />
        <input type="text" value={description} onChange={(e)=> setDescription(e.target.value)} placeholder='Description..' required />
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Price..' required />
        <button type='submit'>Add Service</button>
    </form>
  );
};

export default ServiceForm
