import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { title, img, price, description, _id } = service;
    return (
        <div className="card card-compact w-64 bg-base-100 shadow-xl">
        <figure>
          <img src={img} className="h-52" alt="Shoes" />
          
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description.slice(0, 100) + " . . . ."}</p>
  
          <div className="card-actions flex justify-between">
            <p className="text-red-700 font-medium">Price : $ {price}</p>
            <Link to={`/service/${_id}`}>
              <button className="btn btn-error">Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;