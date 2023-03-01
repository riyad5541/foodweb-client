import { useQuery } from "@tanstack/react-query";
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from "../../Shared/Loading/Loading";
import ServiceCard from './ServiceCard';

const Services = () => {
    const { data: services = [], isLoading } = useQuery({
        queryKey: ["allServices"],
        queryFn: async () => {
          const res = await fetch(
            "http://localhost:5000/services"
          );
          const data = await res.json();
          return data;
        },
      });
      if (isLoading) {
        return <Loading></Loading>;
      }
    return (
        <div className="my-10">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-red-700">Services</h3>
          <h2 className="text-3xl font-bold">Explore My Services</h2>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-4/5 mx-auto">
          {services.map((service) => (
            <ServiceCard key={service.service_id} service={service}></ServiceCard>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link to="/services">
            <button className="btn btn-outline btn-error">See All</button>
          </Link>
        </div>
      </div>
    );
};

export default Services;