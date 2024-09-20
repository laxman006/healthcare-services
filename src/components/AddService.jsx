import React from 'react';
import ServiceForm from './ServiceForm';

const AddService = ({ setServices }) => {
  return (
    <div>
      <h2>Add a New Service</h2>
      <ServiceForm setServices={setServices} />
    </div>
  );
};

export default AddService;
