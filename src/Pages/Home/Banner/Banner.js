import React from 'react';
import "./Banner.css";

const Banner = () => {
    return (
        <div className="relative z-0">
            <div className="banner-container">
                <div className="banner z-20">
                    <div className="pt-40 pl-20 z-40">
                        <h2 className="text-white text-4xl font-bold">
                            Family <br />
                            Favourite <br />
                            Recipes
                        </h2>
                        <h5 className="text-white my-4 font-semibold">
                            AAR's Bake is the largest homemade <br /> food delivery platform.
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;