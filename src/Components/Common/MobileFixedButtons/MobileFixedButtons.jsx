import { FaWhatsapp } from "react-icons/fa";
import { useBookingModal } from "../../../Context/BookingModalContext";
import "./MobileFixedButtons.scss";
import { IoMdCall } from "react-icons/io";

export default function MobileFixedButtons() {
  const { openModal } = useBookingModal();

  return (
    <div className="mobile-fixed-buttons">
      <a
        href="https://wa.me/971503890119"
        className="fixed-btn whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="btn-icon" />
        <span className="btn-text">WhatsApp</span>
      </a>
      <a 
        // onClick={openModal}
        href="tel:+971503890119"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed-btn book-online-btn"
      >
        <IoMdCall className="btn-icon" />
        <span className="btn-text">Call Now</span>
      </a>
    </div>
  );
}

