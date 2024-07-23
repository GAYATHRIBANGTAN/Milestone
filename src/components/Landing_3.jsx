import React from 'react';
import './Landing_3.css';

const Landing_3 = () => {
    return (
        <div className="container_3">
            <div className="header_3">
                <img src="logo.png" alt="Milestone Promoters" />
                <h1>YOUR PLOT. YOUR HOME. YOUR WAY.</h1>
            </div>
            <div className="cards_3">
                <div className="card_3">
                    <img src="image1.jpg" alt="Marayoor, Kerala" />
                    <div className="card-content_3">
                        <div className="card-title_3">Milestone Promoters</div>
                        <div className="card-location_3">Marayoor, Kerala</div>
                        <div className="card-price_3">Plots Starting from Rs. 1.5 Lakhs Onwards</div>
                        <a href="#" className="card-button_3">Know more</a>
                    </div>
                </div>
                {/* Repeat the above card structure for other properties */}
            </div>
            <div className="footer_3">
                Copyright 2024 Milestone Promoters, All Right Reserved
            </div>
        </div>
    );
};

export default Landing_3;
