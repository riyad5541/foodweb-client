import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Update = () => {

    const navigate = useNavigate();
  const review = useLoaderData();

  const [singleReview, setSingleReview] = useState(review);
  const handleUpdateReview = (event) => {
    event.preventDefault();
    fetch(`http://localhost:5000/review/${review._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(singleReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Review updated");
          navigate("/my-reviews");
          //   console.log(data);
        }
      });
  };

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newReview = { ...singleReview };
    newReview[field] = value;
    setSingleReview(newReview);
  };
    return (
        <div className="my-8">
      <h1 className="text-center font-bold text-2xl mb-4">
        Update Your Review: <span className="text-red-700">{review.title}</span>
      </h1>
      <form className="mt-5 text-center" onSubmit={handleUpdateReview}>
        <textarea
          className="border-2 px-3 py-2 rounded-xl"
          rows="4"
          cols="35"
          onChange={handleInputChange}
          defaultValue={review.text}
          type="text"
          name="text"
          id=""
          placeholder="name"
          required
        />
        <br />
        <button
          className="mt-3 btn btn-primary"
          type="submit"
          variant="success"
        >
          Update Review
        </button>
      </form>
    </div>
    );
};

export default Update;