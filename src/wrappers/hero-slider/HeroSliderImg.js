import React from "react";


const HeroSliderImg = () => {
    return (
        <div className="container">
            <div className="carousel slider-img">
                <div className="text-center">
                    <h1>Vale a Pena Conferir</h1>
                    <div className="row ">
                        <div className="item">
                            <div className="image">
                                <img src="assets/img/banner/banner02.png" alt=" " />
                            </div>
                        </div>
                        <div className="item">
                            <div className="image">
                                <img src="assets/img/banner/banner_03.png" alt=" " />
                            </div>
                        </div>
                        <div className="item">
                            <div className="image">
                                <img src="assets/img/banner/banner_04.png" alt=" " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default HeroSliderImg;

