import React from "react";
import "../styles/Navbar.css";
import homebg from "../assets/bg.png";
import map from "../assets/map.png";
import homevideo from "../assets/homepagevideo.mp4";
import testuser from "../assets/Ellipse 19.png";
import { useNavigate } from "react-router-dom";
function Homepage() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/login'); 
  };
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("home_page_about_id");
    if (aboutSection) {
      const offset = aboutSection.offsetTop - 100; 
      window.scrollTo({ top: offset, behavior: "smooth" }); 
    } else {
      console.error("Element with ID 'home_page_about_id' not found");
    }
  };

  const scrollTonetworkt = () => {
    const aboutSection = document.getElementById("homepage_networking_maindiv");
    if (aboutSection) {
      const offset = aboutSection.offsetTop - 100;
      window.scrollTo({ top: offset, behavior: "smooth" }); 
    } else {
      console.error("Element with ID 'home_page_about_id' not found");
    }
  };
  const scrollTofooter = () => {
    const aboutSection = document.getElementById("homepage_footer");
    if (aboutSection) {
      const offset = aboutSection.offsetTop; 
      window.scrollTo({ top: offset, behavior: "smooth" }); 
    } else {
      console.error("Element with ID 'home_page_about_id' not found");
    }
  };
  const scrollTotop = () => {
    const aboutSection = document.getElementById("homebanner_maindiv");
    if (aboutSection) {
      const offset = aboutSection.offsetTop -100; 
      window.scrollTo({ top: offset, behavior: "smooth" }); 
    } else {
      console.error("Element with ID 'home_page_about_id' not found");
    }
  };
  const scrollTofeatures = () => {
    const aboutSection = document.getElementById("homepage_feature_maindiv");
    if (aboutSection) {
      const offset = aboutSection.offsetTop -50; 
      window.scrollTo({ top: offset, behavior: "smooth" }); 
    } else {
      console.error("Element with ID 'home_page_about_id' not found");
    }
  };

    
  return (
    <>
      <div className="navbar_maindiv">
        <div className="navbar_logodiv">
          <div onClick= {(e) => {window.location.reload()}} className="navbar_logo">
          </div>
        </div>
        <div className="navbar_aboutdiv">
          <a onClick={scrollTotop} className="navbar_textelemnt">Home</a>
          <a onClick={scrollTofeatures}className="navbar_textelemnt">Features</a>
          <a onClick={scrollToAbout} className="navbar_textelemnt">About</a>
          <a onClick={scrollTofooter}className="navbar_textelemnt">Support</a>
          <a onClick={scrollTonetworkt} className="navbar_textelemnt">Forums</a>
         
        </div>
      </div>
      <div className="middle_spacer"></div>
      <div id="homebanner_maindiv"className="homebanner_maindiv">
        <div className="homebanner_content_div">
          <div className="homebanner_heading">
            Smart Eats <br></br>
            Brighter Lives
          </div>
          <div className="homebanner_tagline">
            Dive into NutriWave<br></br>
            Where Every Calorie Counts Towards Your Success
          </div>
          <div className="wrapper" >
            {/* havt to use link in future ----------uodation needed here in buttons branch */}
            <a className="cta" href="login"> 
              <span className="heading_name">Start Your Journey</span>
              <span>
                <svg
                  width="50px"
                  height="33px"
                  viewBox="0 0 66 43"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g
                    id="arrow"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <path
                      className="one"
                      d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                      fill="#FFFFFF"
                    />
                    <path
                      className="two"
                      d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                      fill="#FFFFFF"
                    />
                    <path
                      className="three"
                      d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                      fill="#FFFFFF"
                    />
                  </g>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div id="homepage_feature_maindiv" className="homepage_feature_maindiv">
        <p className="homepage_features_heading">Discover a Healthier You</p>
        <div className="homepage_feature_container">
          <div className="homepage_feature_contentdiv 1"> 
            <div className="homepage_features_content_image " id="i1"></div>
            <div className="homepage_features_content_heading">
              Hydration Made Easy:<br></br>Track & Stay On Top
            </div>
            <div className="homepage_features_content_tagline">
              Smart Reminders & Tracking - <br></br>Never Miss a Sip, Stay
              Hydrated!
            </div>
          </div>
          <div className="homepage_feature_contentdiv 2">
            <div className="homepage_features_content_image " id="i2" ></div>
            <div className="homepage_features_content_heading">
              Track It All: <br></br> Calories, Macros & Micros 
            </div>
            <div className="homepage_features_content_tagline">
              Master Your Nutrition with <br></br> Detailed Insights & Control
            </div>
          </div>
          <div className="homepage_feature_contentdiv 3">
            <div className="homepage_features_content_image" id="i3"></div>
            <div className="homepage_features_content_heading">
              Your Personalized Diet: <br></br> Crafted for You
            </div>
            <div className="homepage_features_content_tagline">
              BMI-Based Plans to Reach Your <br></br> Goals Faster
            </div>
          </div>
          <div className="homepage_feature_contentdiv 4">
            <div className="homepage_features_content_image" id="i4"></div>
            <div className="homepage_features_content_heading">
              {" "}
              BMI and Fat Calculator
            </div>
            <div className="homepage_features_content_tagline">
              Precise BMI & Fat % Calculations -<br></br> Track Progress for
              Results
            </div>
          </div>
          <div className="homepage_feature_contentdiv 5">
            <div className="homepage_features_content_image" id="i5"></div>
            <div className="homepage_features_content_heading">
              Monthly Reports and <br></br> Disease Risk Assessment
            </div>
            <div className="homepage_features_content_tagline">
              Detailed Reports & Proactive <br></br> Risk Assessment{" "}
            </div>
          </div>
          <div className="homepage_feature_contentdiv 6">
            <div className="homepage_features_content_image" id="i6"></div>
            <div className="homepage_features_content_heading">
              Social Platform for <br></br> Sharing and Chat
            </div>
            <div className="homepage_features_content_tagline">
              Motivate Each Other on Your <br></br> Health Journey Together
            </div>
          </div>
        </div>
      </div>
      <div  id="about" className="homepage_aboutwebsite_maindiv">
        <div className="homepage_about_videodiv">
          <video controls={true} className="vieo_homepage">
            <source src={homevideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div id="home_page_about_id" className="homepage_aboutus_textdiv">
          <h1>What is NutriWave?</h1>
          <div className="homepage_aboutus_textdiv_context">
            <p>
              NutriWave offers a comprehensive solution to your health and
              nutrition needs, simplifying your path to wellness. With our
              platform, you can easily track your calorie intake, ensuring you
              meet daily nutritional targets and cultivate healthy eating
              habits. Our belief in the power of small, consistent changes
              guides our approach, allowing you to monitor progress over time
              and make informed decisions about your diet and lifestyle. Join
              our community today and embark on a transformative journey towards
              a healthier, happier you with NutriWave by your side.
            </p>
          </div>
          <div onClick={handleClick} className="homepage_getstarted_button">
            <em>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </em>
            <span >Getstarted</span>
          </div>
        </div>
      </div>
      <div id="homepage_networking_maindiv" className="homepage_networking_maindiv">
        <div className="homepage_networking_maindiv_text">
          <p>
            CREATE A GOOD <span className="colore_red">RELATIONSHIP</span> WITH{" "}
            <br></br>
            USERS THAT LAST <span className="colore_red">FOREVER</span>
          </p>
        </div>
        <div className="homepage_networking_maindiv_img">
          <img src={map} alt="" />
        </div>
        <div className="homepage_hotspot_features">
          <div className="homepage_hotspot_features_images_div"></div>
          <div className="homepage_hotspot_features_hotspot"></div>
        </div>
      </div>
      <div className="key_features_homepage_maindiv">
        <div className="key_features_homepage_maindiv_images">
          <div className="key_features_homepage_maindiv_mainimage"></div>
        </div>
        <div className="key_features_homepage_maindiv_text"></div>
      </div>
      <div className="homepage_joinnow_main div">
        <div className="joinnow_text_div">
          Missing something from your plate? Track your food & uncover missing
          vitamins & minerals.
        </div>
        <button id="join_now" onClick={handleClick}>Join now</button>
      </div>
      <div className="homepage_feedback_maindiv">
        <h1>What Our customers say</h1>
        <div className="homepage_customer_review_maindiv">
          <div className="homepage_customer_review">
            <p className="reviews_heading">“The best restaurant”</p>
            <p className="reviews_taglines">
              Last night, we dined at place and were simply blown away. From the
              moment we stepped in, we were enveloped in an inviting atmosphere
              and greeted with warm smiles.
            </p>
            <div className="reviews_line"></div>
            <div className="homepage_user_profile">
              <img className="homepage_reviews_user_image" src={testuser} />
              <p className="homepage_reviews_user_name">Sophire Robson</p>
            </div>
          </div>
          <div className="homepage_customer_review">
            <p className="reviews_heading">“The best restaurant”</p>
            <p className="reviews_taglines">
              Last night, we dined at place and were simply blown away. From the
              moment we stepped in, we were enveloped in an inviting atmosphere
              and greeted with warm smiles.
            </p>
            <div className="reviews_line"></div>
            <div className="homepage_user_profile">
              <img className="homepage_reviews_user_image" src={testuser} />
              <p className="homepage_reviews_user_name">Sophire Robson</p>
            </div>
          </div>
          <div className="homepage_customer_review">
            <p className="reviews_heading">“The best restaurant”</p>
            <p className="reviews_taglines">
              Last night, we dined at place and were simply blown away. From the
              moment we stepped in, we were enveloped in an inviting atmosphere
              and greeted with warm smiles.
            </p>
            <div className="reviews_line"></div>
            <div className="homepage_user_profile">
              <img className="homepage_reviews_user_image" src={testuser} />
              <p className="homepage_reviews_user_name">Sophire Robson</p>
            </div>
          </div>
        </div>
      </div>
      <div id="homepage_footer" className="homepage_footer">
        <div className="hompage_footer_description">
          <h3 className="homepage_footer_heading">NutriWave</h3>
          <p>
            Empowering your journey to health with precision tracking and
            personalized insights.
          </p>
          <div className="homepage_footer_socailmeadia"></div>
        </div>
        <div className="hompage_footer_aboutus">
          <h3 className="homepage_footer_sideheading">About us</h3>
          <div>
            <p>Creator</p>
            <p>About us</p>
            <p>Contact</p>
            <p>Work with us</p>
          </div>
        </div>
        <div className="hompage_footer_company">
          <h3 className="homepage_footer_sideheading">Company</h3>
          <div>
            <p>Patnership</p>
            <p>Terms of use</p>
            <p>Contribute</p>
            <p>Privacy</p>
          </div>
        </div>
        <div className="hompage_footer_getintouch">
          <h3 className="homepage_footer_heading">Get in touch</h3>
          <p>
            Stay updated with our latest news, tips, and offers. Subscribe to
            our newsletter!
          </p>
          <div className="homepage_newsletter">
            <input type="text" placeholder=" Email address" />
            <button>Subscribe</button>
          </div>
        </div>
        
      </div>
      <div className="homepage_copyright">
      Copyright © 2023 Nutriwave
      </div>
    </>
  );
}

export default Homepage;
