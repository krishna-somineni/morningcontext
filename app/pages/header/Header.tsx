import { CAUROSEL_HEADING, CAUROSEL_HEADING_DESCRIPTION, CAUROSEL_HEADING_SUBSCRIBE } from '@/app/utils/Constants';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.cardContainer}>
      <h3 className={styles.heading}>{ CAUROSEL_HEADING}</h3>
      <p className={styles.description}>{CAUROSEL_HEADING_DESCRIPTION}
      </p>
      <button className={styles.subscribeButton}>{CAUROSEL_HEADING_SUBSCRIBE}</button>
    </div>
  );
};

export default Header;
