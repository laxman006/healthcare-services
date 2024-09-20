import React from 'react';
import ServiceCard from './Servicecard';


const ServiceList = ({ services }) => {
    console.log( "is s" ,services);
  return (
    <div className="service-list">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} />
      ))}
    </div>
  );
};

export default ServiceList;

