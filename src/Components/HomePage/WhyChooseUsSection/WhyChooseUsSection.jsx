import "./WhyChooseUsSection.scss";
import heroImage from "../../../assets/Banners/Banner-3.webp";
import icon1 from "../../../assets/Icons/icon-1.png";
import icon2 from "../../../assets/Icons/icon-2.png";
import icon3 from "../../../assets/Icons/icon-3.png";
import icon4 from "../../../assets/Icons/icon-4.png";
import icon5 from "../../../assets/Icons/icon-5.png";
import icon6 from "../../../assets/Icons/icon-6.png";
const features = [
  {
    id: 1,
    icon: icon1,
    title: "Licensed Nurses",
    description: "All IV drips are given by trained nurses following approved protocols."
  },
  {
    id: 2,
    icon: icon2,
    title: "Sterile & Safe IV Setup",
    description: "Strict hygiene and sterile procedures are followed for every IV session."
  },
  {
    id: 3,
    icon: icon3,
    title: "Medical-Grade Ingredients",
    description: "We use only approved, high-quality medical-grade IV ingredients."
  },
  {
    id: 4,
    icon: icon4,
    title: "24/7 Availability",
    description: "Book IV drips anytime, day or night, based on your schedule and needs."
  },
  {
    id: 5,
    icon: icon5,
    title: "Faster Than Clinics",
    description: "No waiting rooms or travel. IV drips delivered directly to your doorstep."
  },
  {
    id: 6,
    icon: icon6,
    title: "Trusted by 10,000+ Families",
    description: "Thousands across the UAE rely on DripHub for safe IV wellness care."
  }
];

const WhyChooseUsSection = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="why-choose-us" className="why-choose-us-section">
      <div className="why-choose-us-wrapper">
        <div className="section-header">
          <h1 className="section-title">Why Driphub Is The Trusted Option</h1>
          <p className="section-description">
            Premium IV therapy delivered safely, conveniently, and professionally to your doorstep, designed around your wellness goals.
          </p>
        </div>
        <div className="why-choose-us-content">
          <div className="hero-image-container">
            <img src={heroImage} alt="Nurse administering IV drip" className="hero-image" />
          </div>
          <div className="features-container">
            <div className="features-list">
              {features.map((feature) => (
                <div key={feature.id} className="feature-item">
                  <div className="feature-icon-wrapper">
                    <img src={feature.icon} alt={feature.title} className="feature-icon" />
                  </div>
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="booking-wrapper">
              <button 
                className="btn book-now-btn" 
                onClick={scrollToServices}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
