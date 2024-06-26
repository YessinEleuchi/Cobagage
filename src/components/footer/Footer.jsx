import React from 'react';
import logo from "../../Assets/CobagageLogo.png";
import downloadAppStore from "../../Assets/footer/AppStore.webp";
import googlePlayStore from "../../Assets/footer/PlayStore1.webp";
import './footer.css'; // Import the CSS file
import  instagram  from '../../Assets/footer/Icons/instagram.png';
import { Link } from 'react-router-dom';
import facebook from '../../Assets/footer/Icons/facebook.png';
import twitter from '../../Assets/footer/Icons/twitter.png'
import youtube from '../../Assets/footer/Icons/youtube.png'
import linkedin from '../../Assets/footer/Icons/linkedin.png'
const Footer = () => {
  return (
    <div>

      <div className="f-footer-regular-2">

        <div className="f-container-regular-9">

          <div className="w-layout-grid f-footer-grid-2">
            <div id="w-node-fcb2eebb-85ed-6021-2f8a-079ae0733039-269d2a97">
              <div className="f-margin-bottom-148">
                <a href="HomePage" className="f-footer-logo-3 w-inline-block"><img
                  src={logo} loading="lazy" width="124"
                  sizes="(max-width: 479px) 90vw, 124px" alt=""
                /></a>
              </div>
              <div className="f-margin-bottom-147">
                <a href="https://www.facebook.com/cobagage.cobagage.9">
                  <img src={facebook} style={{ width: 40, margin: 5 }} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/cobagage_officiel/?igshid=YzAwZjE1ZTI0Zg%3D%3D&utm_source=qr">
                  <img src={instagram} style={{ width: 40, margin: 5 }} alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com/in/cobagage-network-11abb427a/">
                  <img src={linkedin} style={{ width: 40, margin: 5 }} alt="LinkedIn" />
                </a>
                <a href="https://twitter.com/CobagageSite">
                  <img src={twitter} style={{ width: 40, margin: 5 }} alt="Twitter" />
                </a>
                <a href="https://www.youtube.com/@cobagage6596/featured">
                  <img src={youtube} style={{ width: 40, margin: 5 }} alt="YouTube" />
                </a>
              </div>
              <div className="f-footer-social-group-4"><img
                src={downloadAppStore}
                loading="lazy"
                alt="L&#x27;image est un badge noir avec le texte &quot;Download on the App Store&quot; et le logo d&#x27;Apple, indiquant que l&#x27;application peut être téléchargée sur l&#x27;App Store d&#x27;Apple.
" className="image-15" />
                <img src={googlePlayStore} loading="lazy"
                  alt="L&#x27;image est un badge noir avec le texte &quot;GET IT ON Google Play&quot; accompagné du logo de Google Play, indiquant que l&#x27;application peut être téléchargée sur Google Play Store."
                  className="image-16" /></div>
            </div>
            <div className="f-footer-block-2">
              <div className="f-footer-title-2">Nos services</div>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>Chef à domicile</div>
              </a>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>Traiteur</div>
              </a>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>Traiteur entreprise</div>
              </a>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>Cours de cuisine</div>
              </a>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>Chef longue durée</div>
              </a>
            </div>
            <div className="f-footer-block-2">
              <div className="f-footer-title-2">Villes</div>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>Paris</div>
              </a>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>Lyon</div>
              </a>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>Bordeaux</div>
              </a>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>Marseille</div>
              </a>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>Lille</div>
              </a>
            </div>
            <div className="f-footer-block-2">
              <div className="f-footer-title-2">Offres personnalisées</div>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>Cartes cadeaux</div>
              </a>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>Offrir une prestation</div>
              </a>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>Demander un devis</div>
              </a>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>Conciergerie</div>
              </a>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>Télécharger l&#x27;APP</div>
              </a>
            </div>
            <div className="f-footer-block-2">
              <div className="f-footer-title-2">À propos</div>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>Aide</div>
              </a>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>Comment ça marche ?</div>
              </a>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>FAQ</div>
              </a>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>Nos partenaires</div>
              </a>
              <a href="#" className="f-footer-link-4 w-inline-block">
                <div>Nos articles</div>
              </a>
            </div>
          </div>


          <section className="footer-subscribe">
            <div className="container-18">
              <div className="footer-wrapper-three">
                <div className="footer-block-three">
                  <a href="#" className="footer-link-three">CGU</a>
                  <a href="#" className="footer-link-three">Mentions légales</a>
                  <a href="#" className="footer-link-three">CGV</a>
                  <a href="#" className="footer-link-three">Politique de confidentialité</a>
                  <a href="#" className="footer-link-three">Cookies</a>
                </div>
                <div className="footer-social-block-three">
                  <a href="#" className="footer-social-link-three w-inline-block"><img
                    src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a61f512aaed_instagram%20big.svg"
                    loading="lazy" alt="" /></a>
                </div>
              </div>
              <div className="footer-divider-two"></div>
              <div className="footer-bottom">
                <div className="footer-copyright">©2024 GetChef. Tous droits réservés</div>
                <div className="footer-legal-block">
                  <a href="#" className="footer-legal-link">Nous contacter</a>
                  <a href="#" className="footer-legal-link">Rejoignez-nous !</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Footer;