import React  from 'react';

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
    <div>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <p>{service.price}</p>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ServiceItem;
