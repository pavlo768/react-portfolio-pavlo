import { CONTACT } from "../information";
import { motion } from "framer-motion";
import "./Contact.css"; 

const Contact = () => {
  return (
    <div className="contact-container">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="contact-title"
      >
        Contact with me
      </motion.h1>

      <div className="contact-content">
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="contact-address"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="contact-phone"
        >
          {Array.isArray(CONTACT.phoneNo) ? (
            CONTACT.phoneNo.map((phone, index) => (
              <span key={index} className="phone-number">{phone}</span>
            ))
          ) : (
            <span>{CONTACT.phoneNo}</span>
          )}
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`}
          target="_blank"
          className="contact-email"
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
