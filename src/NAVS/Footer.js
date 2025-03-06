import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedin, faSquareInstagram, faSquareYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <footer className='my-5 p-3'>
        <div className="row justify-content-around footer_row">
          <aside className='col-lg-3 p-2 '>
            <figure>
              <img src={require("../IMAGES/cdt_logo.png")} alt="" />
            </figure>

            <aside className="address mb-5">
              <small>
                <FontAwesomeIcon icon={faPhone} />&nbsp;
                 08126445491, 08161997773
              </small>

              <small> 
                <FontAwesomeIcon icon={faEnvelope} />&nbsp;
                hello@creativedigita.com
              </small>
            </aside>

            <aside>
                <a href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faSquareInstagram} />
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faSquareYoutube} />
                </a>
            </aside>

          </aside>

          <aside className="col-lg-3 p-2 Quick_Links">
            <h6>About Us</h6>
            <article className='mt-4'>
              <small>
                Creative Digita Technologies is a tech academy that focuses on
                nurturing and developing tech talent with an emphasis on
                creating skilled, innovative, and professional tech experts.
              </small>
            </article>
          </aside>

          <aside className="col-lg-3 p-2  Quick_Links">
            <h6>Quick Links</h6>
            <article className='mt-4'>
            <small>
              <a href="">Home</a>
            </small>
            <small>
              <a href="">Courses</a>
            </small>
            <small>
              <a href="">ICT, Coding, Robotics for kids</a>
            </small>
            <small>
              <a href="">ICT, Coding, Robotics for schools</a>
            </small>
            <small>
              <a href="">School management system</a>
            </small>
            <small>
              <a href="">Bootcamp</a>
            </small>
            </article>
          </aside>

          <aside className="col-lg-3 p-2  Quick_Links">
            <h6>Legal Links</h6>
            
            <article className='mt-4'>
            <small>
              <a href="">Privacy olicy</a>
            </small>
            <small>
              <a href="">Terms $ Conditions</a>
            </small>
            <small>
              <a href="">Return Policy</a>
            </small>
            <small>
              <a href="">Blog</a>
            </small>
            <small>
              <a href="">FAQ</a>
            </small>
            <small>
              <a href="">Careers</a>
            </small>
            </article>
          </aside>
        </div>
      </footer>
    </>
  );
};

export default Footer;
