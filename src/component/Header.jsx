import { list } from "../data";
import styles from "./Header.module.css";
import logo from "../assets/logo.svg"
function Header() {


  return (
    <>
      {/* <div className={styles.items}>
        {list.map((item) => (
          <div key={item.id} className={styles.item}>
            <img src={item.name} />
            <p>{item.category}</p>
            <p>{item.shoeType}</p>
          </div>
        ))}
        
      </div> */}

      <div className={styles.navbar}>
        <div className={styles.nav_logo}>
          <img src={logo} style={{ width: "100px" }} />
        </div>
        <div className={styles.nav_right}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Product</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Contact</li>
            <li><i className="fa-solid fa-magnifying-glass"></i></li>
            <li><i className="fa-solid fa-bag-shopping"></i></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
