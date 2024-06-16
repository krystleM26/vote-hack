import React from 'react';
import './about.css'

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>
        We are Voters Hub a place where you can learn about the polls, test your presidential knowledge and more.
      </p>
      <h2>Our Mission</h2>
      <p>
       To help voter and potential voters like yourself get the most accurate data you need to make the best choices during the election.
      </p>
      <h2>Our Team</h2>
      <p>
        Nulla facilisi. Integer nec dui ut mi fermentum venenatis. In eleifend velit sed
        nisi convallis, vitae cursus ipsum efficitur. Ut fermentum, metus eget convallis
        gravida, mi leo hendrerit libero, in malesuada odio libero eget lorem.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae;
      </p>
      <ul>
        
        <li>Krystle Mitchell - Developer</li>
        
      </ul>
      <h2>Contact Us</h2>
      <p>
        Praesent at nisi in elit pharetra pharetra. Integer feugiat diam vitae sapien
        ullamcorper, ut hendrerit enim lacinia. Fusce vel leo at nulla feugiat
        condimentum. Nullam ac diam vitae eros scelerisque volutpat a eget leo.
      </p>
      <p>
        Have questions or feedback? Feel free to reach out to us at ** Please Note the email is a demo**{' '}
        <a href="mailto:info@example.com">info@example.com</a>. 
      </p>
    </div>
  );
};

export default AboutPage;
