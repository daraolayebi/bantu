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
                <div className="featured-item-overlay">
                    <label className="in">theseyekehinde</label>
                </div>
            </div>
            <div className="featured-item">
                <img src={FeatureTwo} alt="shutabug"/>
                <div className="featured-item-overlay">
                    <label className="tw">shutabug</label>
                </div>
            </div>
            <div className="featured-item">
                <img src={FeatureThree} alt="rubyokoro"/>
                <div className="featured-item-overlay">
                    <label className="in">rubyokoro</label>
                </div>
            </div>
            <div className="featured-item">
                <img src={FeatureFour} alt="nurdinmomodu"/>
                <div className="featured-item-overlay">
                    <label className="tw">nurdinmomodu</label>
                </div>
            </div>
            <div className="featured-item">
                <img src={FeatureFive} alt="theayophillips"/>
                <div className="featured-item-overlay">
                    <label className="in">theayophillips</label>
                </div>
            </div>
            <div className="featured-item">
                <img src={FeatureSix} alt="unorthodox_dan"/>
                <div className="featured-item-overlay">
                    <label className="tw">unorthodox_dan</label>
                </div>
            </div>
            <div className="featured-item">
                <img src={FeatureSeven} alt="akxnni"/>
                <div className="featured-item-overlay">
                    <label className="in">akxnni</label>
                </div>
            </div>
            <div className="featured-item">
                <img src={FeatureEight} alt="joshadegboye_"/>
                <div className="featured-item-overlay">
                    <label className="tw">joshadegboye_</label>
                </div>
            </div>
        </div>
    )
}

export default FeaturedWork;