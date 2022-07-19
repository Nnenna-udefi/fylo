import './App.css';
import logo from './images/logo.svg';
import footerLogo from './images/footer-logo.svg';
import header from './images/illustration-1.svg';
import product from './images/illustration-2.svg';
import avatar from './images/avatar-testimonial.jpg';
import arrow from './images/icon-arrow.svg';
import phone from './images/icon-phone.svg';
import quotes from './images/icon-quotes.svg';
import email from './images/icon-email.svg';
import SocialFollow from './SocialFollow';


function App() {
  return (
    <div>
      <div className = "Navbar">
        <div className = "logo">
          <img src = {logo} alt = ""/>
        </div>
        <ul className = "Navlist">
          <li className = "navlink">Features</li>
          <li className = "navlink">Terms</li>
          <li className = "navlink">Sign In</li>
        </ul>
      </div>

      <div className='section1'>
        <div className='mobile-img'>
          <img src = {header} alt = ""/>
        </div>

        <div>

        <div className ='header-text'>
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family and co-workers.
          </p>
          
          </div>

          <form className='header-form'>
          <input type = "email" placeholder = "Enter your email" required className='section1-input'/>

          <button className= 'section1-btn'> Get Started </button>
          </form>
          </div>
          
        

        <div className='desktop-img'>
          <img src = {header} alt = "" className = 'header-img'/>
        </div>
      </div>

      <div className = 'section2'>
        <div className='mobile-img'>
          <img src = {product} alt = "" />
        </div>

<div>
        <div>
          <h1>Stay productive, wherever you are</h1>
          <p className='section2-para'>Never let location be an issue when accessing your files. Fylo has you coverved for all of you file storage needs.</p>
          <p className='section2-para'>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</p>

          <div className='fylo-text'>
          <p>See how Fylo works</p>
          <img src = {arrow} alt = ''/>
          
          </div>
      
          
        </div>

        <div className ='badge'>
          <img src = {quotes} alt = ''/>
          <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch out team has become a well-oiled collaboration  machine</p>

          <div className ='profile'>
            <div className= 'profile-img'>
            <img src = {avatar} alt = "" />
            </div>
            <div>
              <h3>Kyle Burton</h3>
              <p>Founder & CEO, Hundae</p>
            </div>
          </div>
        </div>
    </div>

        <div className='desktop-img'>
          <img src = {product} alt = "" />
        </div>
      </div>
     
     <div className='section3'>
      <div className='access'>
        <h2>Get early access today</h2>
        <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
      </div>

      <form className='access-form'>
          <input type = "email"  className='section3-input' required placeholder='email@example.com'/>
          <br />
          <button className ='section3-btn'> Get Started For Free </button>
          </form>
     </div>


<div className= "footer">
     <div className= "footer-flex">
      <div>
     <div className = "footer-logo">
          <img src = {footerLogo} alt = ""/>
        </div>
        <div className ='logo-icon'>
        <img src = {phone} alt = ""/>
          <p> Phone: +1543-123-4567</p>
        </div>
        <div className= 'logo-icon'>
        <img src = {email} alt = ""/>
          <p> example@fylo.com</p>
        </div>
      </div>
<ul className = 'footer-list'>
  <li className = 'footer-link'>About Us</li>
  <li className = 'footer-link'>Jobs</li>
  <li className = 'footer-link'>Press</li>
  <li className = 'footer-link'>Blog</li>
</ul>

<ul className = 'footer-list'>
  
  <li className = 'footer-link'>Contact Us</li>
  <li className = 'footer-link'>Terms</li>
  <li className = 'footer-link'>Privacy</li>
  
</ul>
<SocialFollow />

</div>
<div className='acknowledgement'>
  Challenge by 
    <a href ='https://www.frontendmentor.io/'> Frontend Mentor. </a>
    Coded by <a href = "https://github.com/Nnenna-udefi/">Nnenna Udefi</a>
  
</div>

    </div>
    </div>

  );
}

export default App;
