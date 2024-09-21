import React from 'react';
import ServiceItem from './ServiceItem';
import {Row} from 'react-bootstrap'

const ServiceList = ({ services, setServices }) => {
  return (
    <Row>
      {services.map((service, index) => (
        <ServiceItem 
          key={index} 
          service={service} 
          index={index} 
          setServices={setServices} />
      ))}
    </Row>
  );
};

export default ServiceList;

