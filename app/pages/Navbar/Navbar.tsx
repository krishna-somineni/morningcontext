import Image from 'next/image';
import search from '../../../public/images/Search_icon.jpg';
import styles from './Navbar.module.css';
import { LOGO_URL } from '@/app/utils/Constants';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className=' flex lg:flex'>
            <div className={`${styles.menuIcon} mt-2 lg:mt-2 `} >
                <span className={styles.menuLine}></span>
                <span className={styles.menuLine}></span>
                <span className={styles.menuLine}></span>
            </div>
            <div className=" w-[110px] h-[37px]">
                <img src={LOGO_URL} alt="The Morning Context" />     
            </div>
      </div>
      <div className='flex lg:flex'>
          <div className={styles.searchIcon}>
                <Image src={search} alt='search' className=' mt-1 lg:mt-1'></Image>
          </div> 
          <div className={styles.signupButton}>
              <button  className='p-1'>SIGN UP</button>
          </div>
      </div>

    </nav>
  );
};

export default Navbar;
