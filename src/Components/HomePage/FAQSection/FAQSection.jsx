import { useState } from "react";
import "./FAQSection.scss";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const faqs = [
  {
    id: 1,
    question: "How soon can a doctor be on-site?",
    answer: "Most visits are completed within 30–60 minutes from confirmation."
  },
  {
    id: 2,
    question: "What does a doctor on call visit include?",
    answer: "Clinical assessment, vitals check, examination, diagnosis, and a personalized care plan."
  },
  {
    id: 3,
    question: "Are home visits fully equipped?",
    answer: "Yes. Doctors arrive with medical tools suitable for home-based care."
  },
  {
    id: 4,
    question: "Is this service available 24/7?",
    answer: "Yes. Doctors are available day and night for non-emergency cases."
  },
  {
    id: 5,
    question: "Where do you provide home visits?",
    answer: "Dubai, Abu Dhabi, Sharjah, and Ajman."
  },
  {
    id: 6,
    question: "How is patient safety ensured?",
    answer: "We apply professional hygiene and infection-control protocols during every visit."
  },
  {
    id: 7,
    question: "Do you support different languages?",
    answer: "Yes. Our doctors and staff are multilingual."
  },
  {
    id: 8,
    question: "Can the doctor arrange further tests or treatments?",
    answer: "Yes. Additional services like lab tests, ECG, IV medications, or procedures can be arranged if needed."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section section-container">
      <div className="faq-wrapper">
        <h1 className="section-title">Frequently Asked Questions</h1>
        {/* <p className="faq-description">
          Find answers to common questions about City Doctor's home medical services. 
          If you have additional questions, feel free to contact us directly.
        </p> */}

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={faq.id} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="question-text">{faq.question}</span>
                <span className="faq-icon">
                  {openIndex === index ? (
                    <IoChevronUp className="chevron-icon" />
                  ) : (
                    <IoChevronDown className="chevron-icon" />
                  )}
                </span>
              </button>
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <div className="answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

