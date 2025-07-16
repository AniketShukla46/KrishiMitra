import React from "react";
import "./Contactt.css"; 

const Contact =() =>{
   return(
        <>
        <div class="frm">
    <div class="frmimg">
        <img src="/album/contactKM.jpg" alt="Contact Image" />
    </div>
    <div class="containers">
        <h2>Contact Us</h2>
        <form action="#" method="post">
            <div class="form-group">
                <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div class="form-group">
                <input type="email" id="email" name="email" placeholder="E-Mail" required />
            </div>
            <div class="form-group">
                <textarea id="message" name="message" rows="5" placeholder="Type Your Message" required></textarea>
            </div>
            <button type="submit" class="submit-btn">SUBMIT</button>
        </form>
    </div>
</div>
        </>
   );
};
export default Contact;