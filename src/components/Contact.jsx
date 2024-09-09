import { CONTACT } from "../information";  
import { motion } from "framer-motion";  

const Contact = () => {  
  return (  
    <div className="border-b border-neutral-950 py-20 flex flex-col items-center">  
      <motion.h1   
        whileInView={{ opacity: 1, y: 0 }}  
        initial={{ opacity: 0, y: -100 }}  
        transition={{ duration: 0.5, delay: 0 }}  
        className="my-10 text-center text-4xl"  
      >  
        Contact with me 
      </motion.h1>  

      <div className="text-center tracking-tighter">  
        <motion.p   
          whileInView={{ opacity: 1, y: 0 }}  
          initial={{ opacity: 0, y: -100 }}  
          transition={{ duration: 0.5, delay: 0.3 }}  
          className="my-4"  
        >  
          {CONTACT.address}  
        </motion.p>  
        <motion.p   
          whileInView={{ opacity: 1, y: 0 }}  
          initial={{ opacity: 0, y: -100 }}  
          transition={{ duration: 0.5, delay: 0.6 }}  
          className="my-4"  
        >  
          {Array.isArray(CONTACT.phoneNo) ? (
            CONTACT.phoneNo.map((phone, index) => (
              <span key={index} className="mr-4">{phone}</span>
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
        className="border-b my-4"  
        >  
        {CONTACT.email}  
        </motion.a>
      </div>  
    </div>  
  );  
}  

export default Contact;
