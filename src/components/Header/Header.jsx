import { Link } from "react-router-dom";
import './Header.css'
// import nube from 'https://static.vecteezy.com/system/resources/previews/009/380/519/non_2x/clouds-clipart-design-illustration-free-png.png';

export default function Header() {
  return (

      <header className="nabvar">
        <div className="header">
          <div className="div-nube">
            <Link className="nabvar-name" to="/">Home</Link>
            <img className="nube" type="nube" img src ='https://static.vecteezy.com/system/resources/previews/009/372/302/non_2x/cloud-illustration-design-elements-for-web-interface-weather-forecast-or-cloud-storage-applications-white-clouds-set-isolated-on-blue-background-vector-illustration-clouds-silhouettes-free-png.png' alt="nube" />
          </div>
          <div className="div-nube">
            <Link className="nabvar-name" to="/characters">Characters</Link>
            <img className="nube" type="nube" img src ='https://static.vecteezy.com/system/resources/previews/009/372/302/non_2x/cloud-illustration-design-elements-for-web-interface-weather-forecast-or-cloud-storage-applications-white-clouds-set-isolated-on-blue-background-vector-illustration-clouds-silhouettes-free-png.png' alt="nube" />
          </div>
          <div className="div-nube">
            <Link className="nabvar-name" to="/contact">Contact</Link>
            <img className="nube" type="nube" img src ='https://static.vecteezy.com/system/resources/previews/009/372/302/non_2x/cloud-illustration-design-elements-for-web-interface-weather-forecast-or-cloud-storage-applications-white-clouds-set-isolated-on-blue-background-vector-illustration-clouds-silhouettes-free-png.png' alt="nube" />
          </div>
        </div>

        
      </header>

  );
}
