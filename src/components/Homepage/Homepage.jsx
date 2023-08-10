import styles from './Homepage.module.css';
import welcome from '../../images/welcome.jpg';

function Homepage() {
  return (
    <div className={styles.homepage}>
      <img className={styles.welcome} src={welcome} alt="Welcome" />
    </div>
  );
}

export default Homepage;
