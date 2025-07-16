import "./Footerr.css"; 
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Footer = () =>{
    return(
        

<footer class="footer">
<div class="footer-content">
    <h2>Want to partner with us?</h2>
    <p>If you're interested in our partnership and would like to find out some more information,  
        one of our advisors is excited to help.</p>
    <button class="get-started-btn">Get Started</button>
</div>

<div class="footer-links">
    <div class="footer-column">
        <h3>let's <span class="highlight">one.</span></h3>
    </div>
    <div class="footer-column">
        <h3>PARTNERSHIPS</h3>
        <ul>
            <li>Initiatives</li>
            <li>Social Media</li>
            <li>Branding</li>
        </ul>
    </div>
    <div class="footer-column">
        <h3>ABOUT</h3>
        <ul>
            <li>Our Help</li>
            <li>Our Work</li>
            <li>Careers</li>
        </ul>
    </div>
    <div class="footer-column">
        <h3>SUPPORT</h3>
        <ul>
            <li>Support Request</li>
            <li>Contact</li>
        </ul>
    </div>
    <div class="footer-column">
        <h3>FOLLOW US</h3>
        <div class="social-icons">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
        </div>
    </div>
</div>

<div class="footer-bottom">
    <p>© 2025 Krishi Mitra. All rights reserved.  
        <a href="#" class="privacy-policy">Privacy Policy</a></p>
</div>
</footer>
    );
};
export default Footer;