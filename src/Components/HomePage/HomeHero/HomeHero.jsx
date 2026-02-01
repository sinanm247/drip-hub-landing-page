import "./HomeHero.scss";
import bannerImage from "../../../assets/Banners/Banner-1.webp";
import mobileBannerImage from "../../../assets/Banners/Banner-2.webp";
import { IoMdCall, IoMdStar } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import useIsMobile from "../../../Utils/useIsMobile";

export default function HomeHero() {
  const isMobile = useIsMobile(600);

  return (
    <>
      <div className="home-hero">
        <div className="banner-background">
          <img
            className="banner-image"
            src={isMobile ? mobileBannerImage : bannerImage}
            alt="Doctor At Your Doorstep"
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Wellness, Delivered.<br/> <span>At Your Doorstep.</span></h1>

          <p className="hero-description">
          Premium IV drips and booster shots designed to support energy, recovery, beauty, and overall wellness, delivered safely and comfortably to you.
          </p>

          <div className="hero-stats">
            <div className="stat-button">
              <div className="stat-value">50K+</div>
              <div className="stat-label">Patients Covered</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-button">
              <div className="stat-value">100+</div>
              <div className="stat-label">Medical Staffs</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-button">
              <div className="stat-value">4.9 
                {/* <IoMdStar className="star-icon" /> */}
                </div>
              <div className="stat-label">1,200+ G-Reviews</div>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="https://wa.me/971503890119" className="btn whatsapp-btn" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="btn-icon" />
              WhatsApp
            </a>
            <a href="tel:+971503890119" target="_blank" rel="noopener noreferrer" className="btn white-btn">
              <IoMdCall className="btn-icon" />
              Call Now
            </a>
          </div>
          <div className="hero-buttons-mobile">
            <a href="tel:+971503890119" target="_blank" rel="noopener noreferrer" className="btn book-now">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
