import React from 'react';

const Subscribe = () => {
    return (
        <div className="hero min-h-screen bg-base-200 w-4/5 mx-auto my-10 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-1/2">
                    <div className='pr-6'>
                        <h1 className="text-3xl font-bold">
                            Subscribe To <br />
                            Our Foobies !!
                        </h1>
                        <p className="py-6 font-semibold">
                            Subscribe to our foodies <br /> and receive 15% discount from{" "}
                            <br />
                            your order.
                        </p>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="Email"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-error">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;