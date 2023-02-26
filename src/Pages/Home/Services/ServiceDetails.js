import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
  const { title, img, description, price, _id } = service;

  const {
    data: reviews = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["review"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/review?id=${_id}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const reviewText = form.review.value;
    const review = {
      id: _id,
      name: user.displayName,
      img: user.photoURL,
      email: user.email,
      title: title,
      text: reviewText,
    };

      fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Review Added Confirmed");
          form.reset();
          refetch();
        } else {
          toast.error(data.message);
        }
      });
    };

    if (isLoading) {
        return <Loading></Loading>;
      }

    return (
        <div className="my-8">
      <div className=" w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card card-compact w-full bg-base-100 shadow-xl mx-auto my-4">
          <figure>
            <img src={img} className="h-52 rounded-lg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>

            <div className="card-actions flex justify-between">
              <p className="text-red-700 font-medium">Price : $ {price}</p>
            </div>
          </div>
        </div>
        <div>
          {reviews?.length > 0 ? (
            <>
              <h1 className="text-center text-2xl font-bold mb-4">
                All Reviews Are Here
              </h1>
            </>
          ) : (
            <>
              <h1 className="text-center text-2xl font-bold mb-4">
                No reviews were added
              </h1>
            </>
          )}
          {reviews.map((review) => (
            <div
              className="flex gap-4 mb-2 border-2 rounded-2xl"
              key={review._id}
            >
              <img
                className="w-1/3 md:w-1/3 rounded-2xl"
                src={review.img}
                alt=""
              />
              <div>
                <p className=" md:text-xl font-medium">{review.name}</p>
                <p className="md:font-semibold">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {user?.email ? (
        <>
          <div className="md:w-1/2 mx-auto">
            <form onSubmit={handleReview} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Review</span>
                </label>
                <textarea
                  rows="10"
                  type="text"
                  placeholder="Enter Your Review"
                  name="review"
                  required
                  className="input input-bordered"
                />
              </div>

              <div className="form-control mt-2">
                <button type="submit" className="btn btn-primary">
                  added review
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <div className=" ">
          <p className=" text-2xl font-bold mb-2 text-center">
            Please login to add a review
          </p>
          <p className="text-center">
            <Link to="/login" className="text-white btn btn-primary">
              Login
            </Link>
          </p>
        </div>
      )}
    </div>
    );
};

export default ServiceDetails;