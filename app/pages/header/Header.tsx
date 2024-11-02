import { CAUROSEL_HEADING, CAUROSEL_HEADING_DESCRIPTION, CAUROSEL_HEADING_SUBSCRIBE } from '@/app/utils/Constants';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.cardContainer}>
        <div className='absolute bottom-[205px] lg:bottom-[150px]'>
          <h3 className={styles.heading}>{ CAUROSEL_HEADING}</h3>
        </div>
        <div className="relative p-4 border-l-2 border-r-2 border-b-2 border-white">
            <p className={styles.description}>{CAUROSEL_HEADING_DESCRIPTION}</p>
            <button className={styles.subscribeButton}>{CAUROSEL_HEADING_SUBSCRIBE}</button>
            <div className="absolute top-0 left-0 h-0.5 w-[90px] lg:w-[340px] bg-white"></div>
            <div className="absolute top-0 right-0 h-0.5 w-[90px] lg:w-[340px] bg-white"></div>
        </div>
    </div>
  );
};

export default Header;
