import React from 'react';
import ServiceForm from './ServiceForm';

const AddService = ({ setServices }) => {
  return (
    <div>
      <ServiceForm setServices={setServices} />
    </div>
  );
};

export default AddService;
