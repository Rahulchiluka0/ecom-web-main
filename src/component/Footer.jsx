import styles from "./Footer.module.css";
function Footer() {
  return (
    <>
      <div className={styles.logo_bar}>
        <img src="https://glitch-io.github.io/EcommWebsite/img/logo.svg" />
        <div className={styles.social_media}>
          <div className={styles.social_logo}>
            <i className="fa-brands fa-facebook"></i>
          </div>
          <div className={styles.social_logo}>
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className={styles.social_logo}>
            <i className="fa-brands fa-pinterest"></i>
          </div>
          <div className={styles.social_logo}>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
      <div className={styles.footer_details}>
        <div className={styles.contact}>
          <h3>
            <strong>Contact us</strong>
          </h3>
          <div className={styles.details}>
            <i className="fa-solid fa-location-dot"></i>
            <p>Address: Parul University, Limda Vadodara Gujarat</p>
          </div>
          <div className={styles.details}>
            <i className="fa-solid fa-phone"></i>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className={styles.details}>
            <i className="fa-solid fa-envelope"></i>
            <p>Email: rahulchiluka0425@gmail.com</p>
          </div>
        </div>
        <div className={styles.account}>
          <h3>
            <strong>My Account</strong>
          </h3>
          <div className={styles.details}>
            <i className="fa-solid fa-greater-than"></i>
            <p>My Account</p>
          </div>
          <div className={styles.details}>
            <i className="fa-solid fa-greater-than"></i>
            <p>View Cart</p>
          </div>
          <div className={styles.details}>
            <i className="fa-solid fa-greater-than"></i>
            <p>Wishlist</p>
          </div>
          <div className={styles.details}>
            <i className="fa-solid fa-greater-than"></i>
            <p>Compare</p>
          </div>
          <div className={styles.details}>
            <i className="fa-solid fa-greater-than"></i>
            <p>New Products</p>
          </div>
        </div>
        <div className={styles.newsletter}>
          <h3>
            <strong>Newsletter</strong>
          </h3>
          <p>
            Authoritatively morph 24/7 potentialities with <br /> error-free
            partnerships.
          </p>
          <div className={styles.email}>
            <input type="email" placeholder="Email Address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© 2023 <span> Chillu</span>. All Rights Reserved</p>
      </div>
    </>
  );
}

export default Footer;
