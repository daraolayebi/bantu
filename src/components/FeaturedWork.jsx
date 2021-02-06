import React from 'react';
import FeatureOne from '../assets/images/theseyekehinde.jpg'
import FeatureTwo from '../assets/images/shutabug.png'
import FeatureThree from '../assets/images/rubyokoro.jpg'
import FeatureFour from '../assets/images/nurdinmomodu.jpg'
import FeatureFive from '../assets/images/theayophillips.jpg'
import FeatureSix from '../assets/images/unorthodox_dan.jpg'
import FeatureSeven from '../assets/images/akxnni.jpg'
import FeatureEight from '../assets/images/joshadegboye_.jpg'

const FeaturedWork = () => {
    return (
        <div className="featured-work">
            <div className="featured-item">
                <img src={FeatureOne} alt="theseyekehinde"/>
                <label></label>
            </div>
            <div className="featured-item">
                <img src={FeatureTwo} alt="shutabug"/>
                <label></label>
            </div>
            <div className="featured-item">
                <img src={FeatureThree} alt="rubyokoro"/>
                <label></label>
            </div>
            <div className="featured-item">
                <img src={FeatureFour} alt="nurdinmomodu"/>
                <label></label>
            </div>
            <div className="featured-item">
                <img src={FeatureFive} alt="theayophillips"/>
                <label></label>
            </div>
            <div className="featured-item">
                <img src={FeatureSix} alt="unorthodox_dan"/>
                <label></label>
            </div>
            <div className="featured-item">
                <img src={FeatureSeven} alt="akxnni"/>
                <label></label>
            </div>
            <div className="featured-item">
                <img src={FeatureEight} alt="joshadegboye_"/>
                <label></label>
            </div>
        </div>
    )
}

export default FeaturedWork;