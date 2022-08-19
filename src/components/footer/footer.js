import React from 'react';
import './footer.css'

function Footer () {
return (
    <>
    <div id= 'footer.col-sm-540px'>
<footer>
    <div className="footer-contaner">
      <div className="fbox box1">
        <div className="logo1">
          <img  src="images/Continuum_Insight_Logo_Horizontal_Black.png" alt=""/>

        </div>
        <div >
          <p className="my-4">The top Online Survey Company in USA says that Opportunity and
            growth are two pillars that lead a company to its pinnacle of
            success.</p>

        </div>


        <div className="socal">
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
        </div>
      </div>
      <div className="fbox box2">
        <h4>Contact Info</h4>
        <ul className="con">
          <li>
            <span className="ico-contaner">
              <img className="ico" src="images/location.png" alt=""/>
            </span>
            <span/>
              <p> Gopalakrishna complex 45/3, M Residency Road,Mahatma
                Gandhi Rd, Bengaluru, India 560025</p>
          </li>
          <li>
            <span className="ico-contaner">
              <img className="ico" src="images/phone.png" alt=""/>
            </span><a href="tel:+91-9996731969"> +91 9996731969</a>
          </li>

          <li>
            <span className="ico-contaner">
              <img className="ico" src="images/envelope.png" alt=""/>
            </span><a href="mailto:rfq@continuuminsights.com">rfq@continuuminsights.com</a>
          </li>
        </ul>
      </div>
      <div className="fbox box3">
        <h4>Services</h4>
        <ul>
          <li><a href="#">CATI</a></li>
          <li><a href="#">ONLINE SURVEY</a></li>
          <li><a href="#">TRACKERS</a></li>
          <li><a href="#">IN-DEPTH INTERVIEW</a></li>
          <li className="solutions">Solutions</li>
          <li><a href="#">DATA PROCESSING & ANALYSIS</a></li>
          <li><a href="#">SURVEY PROGRAMMING & HOSTING</a></li>
        </ul>
      </div>
      <div className="fbox box4">
        <h4>Stay up to date with us</h4>

        <form action="">
          <input type="email" placeholder=" ENTER YOUR EMAIL" />
          <button type="submit"><span><i className="fa-solid fa-paper-plane"></i></span></button>
          


        </form>
      </div>
    </div>
  </footer>
  </div>
  </>
  );
}

export default Footer;