import React from "react";
import FeatureOne from "../assets/images/theseyekehinde.jpg";
import FeatureTwo from "../assets/images/shutabug.png";
import FeatureThree from "../assets/images/rubyokoro.jpg";
import FeatureFour from "../assets/images/nurdinmomodu.jpg";
import FeatureFive from "../assets/images/theayophillips.jpg";
import FeatureSix from "../assets/images/unorthodox_dan.jpg";
import FeatureSeven from "../assets/images/akxnni.jpg";
import FeatureEight from "../assets/images/joshadegboye_.jpg";
import Instagram from "../assets/icons/instagram.svg";
import Twitter from "../assets/icons/twitter.svg";

const FeaturedWork = () => {
	return (
		<section className="featured-work">
			<div className="featured-item">
				<a href="https://www.instagram.com/theseyekehinde/?hl=en" target="_blank" rel="noreferrer">
					<img src={FeatureOne} className="feature-artwork" alt="theseyekehinde" />
					<div className="featured-item-overlay">
						<span className="work-tag in">
							<img src={Instagram} alt="Instagram" />
							theseyekehinde
						</span>
					</div>
				</a>
			</div>
			<div className="featured-item">
				<a href="https://twitter.com/Shutabug" target="_blank" rel="noreferrer">
					<img src={FeatureTwo} className="feature-artwork" alt="shutabug" />
					<div className="featured-item-overlay">
						<span className="work-tag tw">
							<img src={Twitter} alt="Twitter" />
							shutabug
						</span>
					</div>
				</a>
			</div>
			<div className="featured-item">
				<a href="https://www.instagram.com/rubyokoro/?hl=en" target="_blank" rel="noreferrer">
					<img src={FeatureThree} className="feature-artwork" alt="rubyokoro" />
					<div className="featured-item-overlay">
						<span className="work-tag in">
							<img src={Instagram} alt="Instagram" />
							rubyokoro
						</span>
					</div>
				</a>
			</div>
			<div className="featured-item">
				<a href="https://twitter.com/nurdinmomodu" target="_blank" rel="noreferrer">
					<img src={FeatureFour} className="feature-artwork" alt="nurdinmomodu" />
					<div className="featured-item-overlay">
						<span className="work-tag tw">
							<img src={Twitter} alt="Twitter" />
							nurdinmomodu
						</span>
					</div>
				</a>
			</div>
			<div className="featured-item">
				<a href="https://www.instagram.com/theayophillips/" target="_blank" rel="noreferrer">
					<img src={FeatureFive} className="feature-artwork" alt="theayophillips" />
					<div className="featured-item-overlay">
						<span className="work-tag in">
							<img src={Instagram} alt="Instagram" />
							theayophillips
						</span>
					</div>
				</a>
			</div>
			<div className="featured-item">
				<a href="https://twitter.com/unorthodox_dan" target="_blank" rel="noreferrer">
					<img src={FeatureSix} className="feature-artwork" alt="unorthodox_dan" />
					<div className="featured-item-overlay">
						<span className="work-tag tw">
							<img src={Twitter} alt="Twitter" />
							unorthodox_dan
						</span>
					</div>
				</a>
			</div>
			<div className="featured-item">
				<a href="https://www.instagram.com/akxnni/" target="_blank" rel="noreferrer">
					<img src={FeatureSeven} className="feature-artwork" alt="akxnni" />
					<div className="featured-item-overlay">
						<span className="work-tag in">
							<img src={Instagram} alt="Instagram" />
							akxnni
						</span>
					</div>
				</a>
			</div>
			<div className="featured-item">
				<a href="https://twitter.com/joshadegboye_" target="_blank" rel="noreferrer">
					<img src={FeatureEight} className="feature-artwork" alt="joshadegboye_" />
					<div className="featured-item-overlay">
						<span className="work-tag tw">
							<img src={Twitter} alt="Twitter" />
							joshadegboye_
						</span>
					</div>
				</a>
			</div>
		</section>
	);
};

export default FeaturedWork;
