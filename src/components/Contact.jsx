import { CONTACT } from "../information";  
import { motion } from "framer-motion";  

const Contact = () => {  
  return (  
    <div className="border-b border-neutral-950 py-20 flex flex-col items-center">  
      <motion.h1   
        whileInView={{ opacity: 1, y: 0 }}  
        initial={{ opacity: 0, y: -100 }}  
        transition={{ duration: 0.5 }}  
        className="my-10 text-center text-4xl"  
      >  
        Зв'яжіться з нами  
      </motion.h1>  
      <div className="text-center tracking-tighter">  
        <motion.p   
          whileInView={{ opacity: 1, y: 0 }}  
          initial={{ opacity: 0, x: 100 }}  
          transition={{ duration: 1 }}  
          className="my-4"  
        >  
          {CONTACT.address}  
        </motion.p>  
        
        <motion.p   
          whileInView={{ opacity: 1, y: 0 }}  
          initial={{ opacity: 0, y: 100 }}  
          transition={{ duration: 0.5 }}  
          className="my-4"  
        >  
          {CONTACT.phoneNo}  
        </motion.p>  
        <motion.a   
          whileInView={{ opacity: 1, y: 0 }}  
          initial={{ opacity: 0, y: 100 }}  
          transition={{ duration: 0.5 }}  
          href="#"   
          className="border-b my-4"  
        >  
          {CONTACT.email}  
        </motion.a>  
      </div>  
    </div>  
  );  
}  

export default Contact;