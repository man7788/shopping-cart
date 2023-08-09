import '../styles/Homepage.css';
import welcome from '../images/welcome.jpg';

function Homepage() {
  return (
    <div className="homepage">
      <img className="welcome" src={welcome} alt="Welcome" />
    </div>
  );
}

export default Homepage;
