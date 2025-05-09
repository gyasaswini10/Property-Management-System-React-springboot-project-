import React, { useEffect } from "react";
import "../css/HomePage.css";
import Footer from "./Footer";
export default function HomePage() {
  useEffect(() => {
    const animateNumbers = (element, target) => {
      let current = 0;
      const increment = target / 50;
      const animate = () => {
        const interval = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(interval);
            setTimeout(() => {
              current = 0; // Reset the current value
              animate(); // Restart the animation
            }, 5000);
          }
          element.textContent = Math.floor(current);
        }, 30); // Adjust interval time
      };
      animate();
    };

    // Get all number elements and animate
    const numbers = document.querySelectorAll(".Achievement h3");
    numbers.forEach((number) => {
      const target = parseInt(number.getAttribute("data-target"), 10);
      animateNumbers(number, target);
    });
  }, []);

  return (
    <div>
            <div
  className="video-container"
  style={{
     // Display as a flex container
    position: "", // Ensure no gaps around the video
    top: 0,               // Remove any top gap
    left: 0,              // Remove any left gap
    right: 0,             // Remove any right gap
    bottom: 0,            // Ensure the container fills the whole screen
    width: "100%",        // Full width of the viewport
    height: "100vh",      // Full height of the viewport
    overflow: "hidden",   // Hide any overflow
    zIndex: -1,           // Send the video behind other content
  }}
>

 
  <video
    src="./../../public/images/homepage.mp4"
    autoPlay
    loop
    muted
    style={{
      objectFit: "cover", // Ensures the video covers the entire area without distortion
      width: "100%",      // Full width
      height: "100%",     // Full height
    }}
  />
</div>
      <div className="HomePage1" style={{ display: "flex"}}>
  




      <br></br>
        <div className="text">
          <h5 style={{ textAlign: "left", color: "Black", fontSize: "17px" }}>
            Whether you're a property owner, a tenant, or looking for expert
            advice, we're here to help. Our team is dedicated to creating the
            best experience for both property owners and residents.
          </h5>
        </div>
        {/* src="./../public/images/gif1.gif" */}
        <img
          src="./../../public/images/home_page_pic.jpeg"
          alt="Home Page GIF"
          style={{ width: "30%", height: "auto", marginBottom: "20px" }}
        />
      </div>
      <div className="Our_Achievements">
        <h2>Our Achievements</h2>
        <div className="Achievements">
          <div className="Achievement">
            <h3 data-target="100">0</h3>
            <p>Properties Managed</p>
          </div>
          <div className="Achievement">
            <h3 data-target="200">0</h3>
            <p>Happy Residents</p>
          </div>
          <div className="Achievement">
            <h3 data-target="50">0</h3>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
      <div className="WhyOurCompany">
        <h2>Why Our Company?</h2>
        <div className="CompanyInfo">
          <div className="InfoItem">
            <h3>Qualified Property Dealers</h3>
            <p>
              Our network includes qualified property dealers & registered
              members from CREDAI and APREDA.
            </p>
          </div>
          <div className="InfoItem">
            <h3>Buy, Rent and Lease Genuine Properties</h3>
            <p>
              We offer a wide range of genuine properties for buying, renting,
              and leasing.
            </p>
          </div>
          <div className="InfoItem">
            <h3>Simply Register to List Your Properties</h3>
            <p>
              Register with us to easily list your properties and reach a wider
              audience.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
