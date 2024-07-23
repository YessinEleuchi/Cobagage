import React from 'react';
import logo from '../../Assets/CobagageLogo.png';
import downloadAppStore from '../../Assets/footer/AppStore.webp';
import googlePlayStore from '../../Assets/footer/PlayStore1.webp';
import './footer.css'; // Import the CSS file
import instagram from '../../Assets/footer/Icons/instagram.png';
import facebook from '../../Assets/footer/Icons/facebook.png';
import twitter from '../../Assets/footer/Icons/twitter.png';
import youtube from '../../Assets/footer/Icons/youtube.png';
import linkedin from '../../Assets/footer/Icons/linkedin.png';

const Footer = () => {
  return (
      <div className="f-footer-regular-2">
        <div className="f-container-regular-9">
          <div className="w-layout-grid f-footer-grid-2">
            <div id="w-node-fcb2eebb-85ed-6021-2f8a-079ae0733039-269d2a97">
              <div className="f-margin-bottom-147">
                <h5>RÉSEAUX SOCIAUX</h5>
                <a href="https://www.facebook.com/cobagage.cobagage.9" target="_blank" rel="noopener noreferrer">
                  <img src={facebook} alt="Facebook" className="social-icon" />
                </a>
                <a href="https://www.instagram.com/cobagage_officiel/?igshid=YzAwZjE1ZTI0Zg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                  <img src={instagram} alt="Instagram" className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/cobagage-network-11abb427a/" target="_blank" rel="noopener noreferrer">
                  <img src={linkedin} alt="LinkedIn" className="social-icon" />
                </a>
                <a href="https://twitter.com/CobagageSite" target="_blank" rel="noopener noreferrer">
                  <img src={twitter} alt="Twitter" className="social-icon" />
                </a>
                <a href="https://www.youtube.com/@cobagage6596/featured" target="_blank" rel="noopener noreferrer">
                  <img src={youtube} alt="YouTube" className="social-icon" />
                </a>
              </div>
              <div className="f-footer-social-group-4">
                <img src={downloadAppStore} loading="lazy" alt="Download on the App Store" className="image-15" />
                <img src={googlePlayStore} loading="lazy" alt="Get it on Google Play" className="image-16" />
              </div>
            </div>
            <div className="f-footer-block-2">
              <a href="#"><div className="f-footer-title-2">Qui sommes-nous ?</div></a>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>Astuces et conseil</div>
              </a>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>Contactez nous</div>
              </a>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>Mentions légale</div>
              </a>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>CGVU</div>
              </a>
            </div>
            <div className="f-footer-block-2">
              <div className="f-footer-title-2">Cobagage</div>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>En savoir plus</div>
              </a>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>FAQ</div>
              </a>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>Cobagage comme job</div>
              </a>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>Politique de confidelité</div>
              </a>
            </div>
          </div>

          <section className="footer-subscribe">
            <div className="container-18">
              <div className="f-margin-bottom-148">
                <a href="HomePage" className="f-footer-logo-3 w-inline-block">
                  <img src={logo} loading="lazy" alt="Cobagage Logo" />
                </a>
              </div>
              <div className="footer-bottom">
                <div className="footer-legal-link">INPI – Enregistrement e-Soleau DSO2022014480</div>
                <div className="footer-copyright">©Cobagage Copyright 2019-2024 Tous droits réservés.</div>
              </div>
            </div>
          </section>
        </div>
      </div>
  );
};

export default Footer;
