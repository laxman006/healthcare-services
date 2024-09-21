import React  from 'react';
import {Card,Button} from 'react-bootstrap'

const ServiceItem = ({ service, index, setServices }) => {

  const handleDelete = () => {
    setServices(prevServices => prevServices.filter((_, i) => i !== index));
  };

  const handleUpdate = () => {
    const updatedName = prompt('Enter your name', service.name);
    const updatedDescription = prompt('Enter your description', service.description);
    const updatedPrice = prompt('Enter your price', service.price);

    if (updatedName && updatedDescription && updatedPrice) {
      setServices(prevServices => 
        prevServices.map((s, i) => 
          i === index ? { name: updatedName, description: updatedDescription, price: updatedPrice } : s
        )
      );
    }
  };
  
  return (
    <Card style={{ width: '18rem', margin: '1rem' }} className="d-flex flex-column justify-content-center">
      <Card.Body className="text-center">
        <Card.Title>{service.name}</Card.Title>
        <Card.Text>{service.description}</Card.Text>
        <Card.Text>Rs: {service.price}</Card.Text>
        <div className="d-flex justify-content-center">
          <Button variant="primary" onClick={handleUpdate} className="me-2">Update</Button>
          <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ServiceItem;
