import React from 'react';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 w-4/5 mx-auto my-10 rounded-lg">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2">
                    <img
                        src="https://cdn.britannica.com/86/145786-050-5BD27317/chef-cooking-restaurant-kitchen.jpg"
                        alt=""
                        className="rounded-lg shadow-2xl w-3/5 mx-auto"
                    />
                </div>
                <div className="w-1/2">
                    <h1 className="text-4xl font-bold">About Us !</h1>
                    <p className="py-6 font-semibold">
                        We Make Everything By Hand With <br />
                        The Best Possible Ingredients.
                    </p>
                    <button className="btn btn-outline btn-error">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default About;