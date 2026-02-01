import "./ProcessSection.scss";
import { FaWhatsapp } from "react-icons/fa";

const steps = [
  {
    id: 1,
    stepNumber: "1",
    title: "Call or WhatsApp",
    description: "Call or WhatsApp us at +971509700564 to book your IV drip session."
  },
  {
    id: 2,
    stepNumber: "2",
    title: "Share Your Location",
    description: "Send your address and preferred time. We confirm instantly."
  },
  {
    id: 3,
    stepNumber: "3",
    title: "Nurse at Your Door",
    description: "Licensed nurses arrive in 30-60 minutes for safe IV drips."
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="process-section">
      <div className="section-container">
        <div className="process-wrapper">
          <h1 className="process-title">Relief Is 3 Steps Away</h1>
          <p className="section-description">
            No apps to download, no complicated portals, no waiting on hold. Just fast access to the best home visiting medical team exactly when you need it.
          </p>
          
          <div className="steps-grid">
            {steps.map((step) => (
              <div key={step.id} className="step-card">
                <div className="step-label">{step.stepNumber}</div>
                {/* <div className="step-content"> */}
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                {/* </div> */}
              </div>
            ))}
          </div>

          <div className="whatsapp-booking-wrapper">
            <a href="https://wa.me/971503890119" className="btn book-now-btn" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="btn-icon" />
              Book instantly via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
