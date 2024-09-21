import React from 'react';
import ServiceItem from './ServiceItem';

const ServiceList = ({ services, setServices }) => {
  return (
    <div>
      {services.map((service, index) => (
        <ServiceItem 
          key={index} 
          service={service} 
          index={index} 
          setServices={setServices} />
      ))}
    </div>
  );
};

export default ServiceList;

