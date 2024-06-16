import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare libero eget
        ante malesuada, a rhoncus magna tempor. Cras aliquet, ligula a dapibus semper,
        nulla nunc tempus urna, id fermentum ex purus a magna.
      </p>
      <h2>Our Mission</h2>
      <p>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        Curae; Duis hendrerit tellus vel leo feugiat, non imperdiet nisi posuere.
        Suspendisse potenti. Proin vitae leo vel ipsum faucibus vestibulum sit amet sed
        lorem.
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
        <li>John Doe - Founder & CEO</li>
        <li>Jane Smith - Lead Developer</li>
        <li>Michael Johnson - UI/UX Designer</li>
        <li>Emily Brown - Marketing Manager</li>
      </ul>
      <h2>Contact Us</h2>
      <p>
        Praesent at nisi in elit pharetra pharetra. Integer feugiat diam vitae sapien
        ullamcorper, ut hendrerit enim lacinia. Fusce vel leo at nulla feugiat
        condimentum. Nullam ac diam vitae eros scelerisque volutpat a eget leo.
      </p>
      <p>
        Have questions or feedback? Feel free to reach out to us at{' '}
        <a href="mailto:info@example.com">info@example.com</a>.
      </p>
    </div>
  );
};

export default AboutPage;
