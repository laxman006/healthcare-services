import React , {useState} from 'react'
import { useNavigate } from 'react-router-dom';


const ServiceForm = ({setServices}) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const navigate =useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newService = { name , description , price};
        setServices((prevService)=>[...prevService, newService]);
        setName('');
        setDescription('');
        setPrice('');
        navigate('/')

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
