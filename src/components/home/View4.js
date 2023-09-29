import React,{useRef} from "react";
import emailjs from '@emailjs/browser';
import IMG from "./image1.png";
import "./View4.css";
export default function View4(props) {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zskg4sb', 'template_rrilckw', form.current, '4OwBEI1sVXzwcRZMf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  
    return(
        <div className="View4div">
           <div className="v4d1">
             <img src={IMG} alt="" srcset="" />
           </div>
           <div className="v4d2">
            <form  ref={form} onSubmit={sendEmail}>
             <h1>Get In Touch</h1>
             <div className="v4d2d">
                <input type="text" name="user_firstname" id="" placeholder="First Name" required/>
                <input type="text" name="user_lastname" id="" placeholder="Last Name"/>
                <input type="email" name="user_email" id="" placeholder="Email Address"required/>
                <input type="tel" name="user_phone" id="" placeholder="Phone No." pattern="[0-9]{10}"/>
               {/* <input type="text" name="" id="message" placeholder="Message"/>*/} 
                
             </div>
             <textarea placeholder="Message" name="message" id="message"  rows="10"></textarea>
             <button>Send</button>
             </form>
           </div> 
        </div>
    );
}