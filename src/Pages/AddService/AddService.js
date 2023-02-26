import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const AddService = () => {
    const [service, setService] = useState({});

    const handleAddService = (event) => {
        event.preventDefault();
        console.log(service);
        fetch("http://localhost:5000/allServices", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(service),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success("Service Added Successfully!", {
                position: "top-center",
              });
              event.target.reset();
            }
          });
      };
      const handleInputBlur = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newService = { ...service };
        newService[field] = value;
        setService(newService);
      };
    return (
        <div>
      <h2 className="text-3xl text-center font-bold my-8">
        Please add a new service
      </h2>
      <form className="grid w-2/5 mx-auto" onSubmit={handleAddService}>
        <br />
        <input
          onBlur={handleInputBlur}
          type="text"
          name="title"
          id=""
          placeholder="title"
          required
          className="input input-bordered"
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="text"
          name="img"
          id=""
          placeholder="img"
          required
          className="input input-bordered"
        />
        <br />
        <input
          onBlur={handleInputBlur}
          type="text"
          name="price"
          id=""
          placeholder="price"
          required
          className="input input-bordered"
        />
        <br />

        <input
          onBlur={handleInputBlur}
          type="text"
          name="description"
          id=""
          placeholder="description"
          required
          className="input input-bordered"
        />
        <br />
        <button className="btn btn-error mb-8" type="submit">
          Add Service
        </button>
      </form>
      <ToastContainer />
    </div>
    );
};

export default AddService;