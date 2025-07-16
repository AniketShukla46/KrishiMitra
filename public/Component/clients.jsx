import React from "react";
import "./Clientss.css"; 


const Clients = () =>{
    return (
        <>
        <div class="container">
        <h1>Voices of Our Customers</h1>
        <div class="testimonials">
            <div class="testimonial">
                <img src="/album/feedback-1889007_1920.jpg" alt="George Reed" />
                <h3>Anuj Pratap Singh</h3>
                <div class="stars">★★★★★</div>
                <p>Not only does the system detect diseases early, but the suggested solutions—organic and chemical treatments—are effective. It has significantly reduced our crop losses and increased yield</p>
            </div>
            <div class="testimonial">
                <img src="/album/service-1182895_1920.png" alt="Pragati Majumdar" />
                <h3>Aniket  Shukla</h3>
                <div class="stars">★★★★★</div>
                <p>The system provides highly accurate disease predictions, helping us take preventive measures before the issue spreads. The real-time alerts are extremely useful in managing our crops efficiently</p>
            </div>
            <div class="testimonial">
                <img src="/album/nature-8797824_1920.png" alt="Ameesh Zacharia" />
                <h3>Adarsh Mishra</h3>
                <div class="stars">★★★★★</div>
                <p>The platform is easy to navigate, even for farmers with minimal technical knowledge. The step-by-step guidance on disease identification and recommended treatments makes it very practical for daily use!</p>
            </div>
        </div>
    </div>
        </>
    );
};
export default Clients