import Image from 'next/image';
import logoImage from '../../../public/images/Ellipse 2.36.jpg'; 
import search from '../../../public/images/Search_icon.jpg';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className='lg:flex'>
          <div className={`${styles.menuIcon} mt-2`} >
            <span className={styles.menuLine}></span>
            <span className={styles.menuLine}></span>
            <span className={styles.menuLine}></span>
          </div>
        <div className={styles.logoContainer}>
            <Image src={logoImage} alt="The Morning Context" width={40} height={40} />
            <span className={styles.brandName}>THE MORNING CONTEXT</span>
        </div>
      </div>
      <div className='flex'>
        <div className={styles.searchIcon}>
            <Image src={search} alt='search' className='lg:mt-1'></Image>
        </div> 
        <div className={styles.signupButton}>
            <button  className='p-1'>SIGN UP</button>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
