import { useState } from "react";
import { useParams } from "react-router-dom";
import { drips } from "../../Datasets/dripsDataset";
import { FaWhatsapp } from "react-icons/fa";
import "./DripDetail.scss";

import icon1 from "../../assets/Icons/icon-7.png";
import icon2 from "../../assets/Icons/icon-8.png";
import icon3 from "../../assets/Icons/icon-11.png";

import arrow from "../../assets/Icons/icon-12.png";


const DripDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("nutrients");
  
  const drip = drips.find((d) => d.id === parseInt(id));

  if (!drip) {
    return <div>Drip not found</div>;
  }

  // Determine category based on drip name
  const getCategory = (name) => {
    if (name.includes("Royal") || name.includes("Ultimate")) {
      return "Elite IV Drips";
    }
    return "Signature IV Drips";
  };

  const category = getCategory(drip.name);

  // Key Nutrients - same for all drips
  const keyNutrients = [
    "Hydrating Fluids 1000 ml",
    "NAD+",
    "Vitamin C",
    "Selenium",
    "Zinc",
    "Glutathione",
    "B-Complex Vitamins",
    "Coenzyme Q10"
  ];

  // Helps with - same for all drips
  const helpsWith = [
    "Sharper Focus",
    "Cellular Renewal",
    "Sustained Energy",
    "Mental Clarity",
    "Faster Recovery",
    "Vitality Boost"
  ];

  // Perfect for - same for all drips
  const perfectFor = [
    "Boosts energy and wellness when feeling drained or low",
    "Supports immunity, hydration, and recovery in busy days",
    "Enhances mood, vitality, and balance for daily performance"
  ];

  // Description - same for all drips
  const description = `${drip.name} delivers a top-tier reset for deep fatigue, burnout, and brain fog using our most premium NAD+ formulation.`;

  return (
    <div className="drip-detail-page">
      <div className="drip-detail-container">
        <div className="drip-detail-content">
          {/* Left Section - Product Image */}
          <div className="drip-image-section">
            <img src={drip.image} alt={drip.name} className="drip-detail-image" />
          </div>

          {/* Right Section - Product Details */}
          <div className="drip-info-section">
            {/* Category Badge */}
            <span className="category-badge">{category}</span>

            {/* Product Title */}
            <h1 className="drip-detail-title">{drip.name}</h1>

            {/* Product Description */}
            <p className="drip-description">{description}</p>

            {/* Key Metrics */}
            <div className="key-metrics">
              <div className="metric-item">
                <div className="image-container">
                  <img src={icon1} alt="Fluid" className="metric-icon" />
                </div>
                <span className="metric-text">1000 ml</span>
              </div>
              <div className="metric-item">
                <div className="image-container">
                  <img className="metric-icon" src={icon2} alt="Time" />
                </div>
                <span className="metric-text">90 min</span>
              </div>
              <div className="metric-item">
                <div className="image-container">
                  <img className="metric-icon" src={icon3} alt="Leaf" />
                </div>
                <span className="metric-text">8 Revitalizing Nutrients</span>
              </div>
            </div>

            {/* Pricing */}
            <div className="drip-pricing-section">
              <span className="drip-current-price-large"><span className="drip-price-currency">AED</span> {drip.currentPrice}.00</span>
              <span className="drip-original-price-large">{drip.originalPrice}</span>
            </div>

            {/* Tabbed Section - Key Nutrients and Helps with */}
            <div className="tabbed-section">
              <div className="tab-headers">
                <div 
                  className={`tab-header ${activeTab === "nutrients" ? "active" : ""}`}
                  onClick={() => setActiveTab("nutrients")}
                >
                  <span className="tab-title">Key Nutrients</span>
                  <div className={`tab-underline ${activeTab === "nutrients" ? "active" : ""}`}></div>
                </div>
                <div 
                  className={`tab-header ${activeTab === "helps" ? "active" : ""}`}
                  onClick={() => setActiveTab("helps")}
                >
                  <span className="tab-title">Helps with</span>
                  <div className={`tab-underline ${activeTab === "helps" ? "active" : ""}`}></div>
                </div>
              </div>

              <div className="tab-content">
                {activeTab === "nutrients" && (
                  <div className="section-content">
                    <div className="nutrients-grid">
                      {keyNutrients.map((nutrient, index) => (
                        <span key={index} className="nutrient-badge">{nutrient}</span>
                      ))}
                    </div>
                    {/* Perfect for Section */}
                    <div className="perfect-for-section">
                      <h3 className="perfect-for-title">Perfect for</h3>
                      <ul className="perfect-for-list">
                        {perfectFor.map((item, index) => (
                          <li key={index} className="perfect-for-item">
                            <img className="perfect-for-arrow" src={arrow} alt="Arrow" />
                            <span className="perfect-for-text">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === "helps" && (
                  <div className="section-content">
                  <div className="helps-grid">
                    {helpsWith.map((item, index) => (
                        <span key={index} className="helps-badge">{item}</span>
                      ))}
                    </div>
                    <div className="helps-desc">
                      Delivers elite cellular renewal for sharper focus, deeper energy, and total vitality.
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="action-buttons">
              <a 
                href="tel:+971503890119" 
                className="btn call-now-btn" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Call Now
              </a>
              <a 
                href="https://wa.me/971503890119" 
                className="btn whatsapp-btn-detail" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {/* <FaWhatsapp className="btn-icon" /> */}
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DripDetail;

