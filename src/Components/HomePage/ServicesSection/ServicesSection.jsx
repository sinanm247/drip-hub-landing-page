import "./ServicesSection.scss";
import { drips } from "../../../Datasets/dripsDataset";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleDripClick = (dripId) => {
    navigate(`/drip/${dripId}`);
  };

  return (
    <section id="services" className="services-section">
      <div className="services-wrapper">
        <div className="section-header">
          <span className="section-badge">IV Drips at Home</span>
          <h1 className="section-title">Dubai's Best Drip Menu</h1>
          <p className="section-description">
            Discover premium IV drips and booster shots for energy, immunity, hydration, recovery, beauty, and daily wellness, safely delivered to your doorstep today.
          </p>
        </div>
        
        <div className="drips-container">
          <div className="drips-grid">
            {drips.map((drip) => (
              <div 
                key={drip.id} 
                className="drip-card"
                onClick={() => handleDripClick(drip.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="drip-image-wrapper">
                  <img src={drip.image} alt={drip.name} className="drip-image" />
                </div>
                <div className="drip-content">
                  <h3 className="drip-name">{drip.name}</h3>
                  <div className="drip-pricing">
                    <span className="drip-current-price"><span className="drip-price-currency">AED</span> {drip.currentPrice}</span>
                    <span className="drip-original-price">{drip.originalPrice}</span>
                  </div>
                  <button 
                    className="btn drip-book-btn" 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDripClick(drip.id);
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
