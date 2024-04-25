import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookF, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';








const FooterSection = () =>
{
  return (
    <footer className="footer-section">
      <div className="footer-content">
        {/* Column 1: Contact Details */}
        <div className="footer-column">
          <h3>צור קשר</h3>
          <p>💈<b>Nati Barber Shop</b>💈</p>
          <p><a

            href="tel:0528064655"
          >
            <FontAwesomeIcon icon={faPhone} color='blue' size={"2xl"} />
          </a></p>
          <p>{`כתובת דוא"ל`}</p>
        </div>

        {/* Column 2: Opening Hours (Optional) */}
        <div className="footer-column">
          <h3>שעות פתיחה</h3>
          <p>ראשון - חמישי: 09:00 - 19:00</p>
          {/* ... other days */}
        </div>

        {/* Column 3: Social Links - adapt to your needs */}
        <div className="footer-column ">
          <h3>עקבו אחרינו</h3>
          <div className="follow-us">

            <a href="https://www.facebook.com/neatnel" target="_blank" rel="noopener noreferrer">

              <FontAwesomeIcon icon={faFacebookF} color='blue' size={"2xl"} />
            </a>
            <a href="https://www.instagram.com/netanel785/" target="_blank" rel="noopener noreferrer" >
              <FontAwesomeIcon icon={faInstagram} color='violet' size={"2xl"} />
            </a>
            <a href="https://www.tiktok.com/@user2vvhwg5brl" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} color='red' size={"2xl"} />
            </a>
            <a href="https://wa.me/972528064655" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} color='green' size={"2xl"} />
            </a>

            {/* Add other icons as needed */}
          </div>
        </div>
      </div>

      <p className="copyright">
        &copy; {new Date().getFullYear()} כל הזכויות שמורות ל <b>NatiBarberShop</b>
      </p>
    </footer>
  );
};

export default FooterSection;