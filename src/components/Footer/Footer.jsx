import React from "react";
import "./style.scss"; // Make sure to import your CSS styles here.
import {
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsFacebook,
  BsReddit,
  BsFillSendFill
} from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer">
      <img
        src="../../src/assets/images/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="Website Logo"
      />
      <div className="object">

      
      <div className="content">
        <div className="left-footer">
          <div className="heading">Before you go, Explore these Links</div>
          <div className="links">
            <div className="company">
              <h4>Company</h4>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/team">Our Team</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
            </div>
            <div className="legal">
              <h4>Legal</h4>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
              <li>
                <a href="/disclaimer">Disclaimer</a>
              </li>
            </div>
            <div className="more">
              <h4>More</h4>

              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/faqs">FAQs</a>
              </li>
              <li>
                <a href="/reviews">Reviews</a>
              </li>
              <li>
                <a href="/newsletter">Newsletter</a>
              </li>
            </div>
            <div className="resources">
              <h4>Resources</h4>
             
                <li>
                  <a href="/guides">Guides</a>
                </li>
                <li>
                  <a href="/tutorials">Tutorials</a>
                </li>
                <li>
                  <a href="/downloads">Downloads</a>
                </li>
              
            </div>
            <div className="products">
              <h4>Products</h4>
              
                <li>
                  <a href="/product1">Tmdb</a>
                </li>
                <li>
                  <a href="/product2">Imdb</a>
                </li>
                <li>
                  <a href="/product3">Youtube</a>
                </li>
            
            </div>
          </div>
        </div>
        <div className="right-footer">
          <div className="email-us">
            <h3>Contact Us</h3>
            <p>
              If you have any questions or feedback, feel free to reach out:
            </p>
            <div className="email"><a href="mailto:info@example.com">cinemagic@gmail.com</a></div>
          </div>
          <div className="social-media">
            <div className="division">
              <li>
                <a href="https://www.instagram.com/yourmoviepage">
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/yourmoviepage">
                  <BsTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/yourmoviepage">
                  <BsFacebook />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/yourmoviepage">
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a href="https://www.reddit.com/company/yourmoviepage">
                  <BsReddit />
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        Site By Dipan Dhali &#169; 2023
      </div>
      </div>
    </div>
  );
};

export default Footer;
