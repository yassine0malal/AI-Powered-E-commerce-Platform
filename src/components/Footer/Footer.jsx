import styles from "./footer.module.css";
import sendIcon from "../../assets/icons/send.png"
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import linkedin from "../../assets/icons/linkedin.png";
import x from "../../assets/icons/x.png";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <div className={styles.warper}>
            <div className={styles.footerSection}>

                <div className="company">
                    <h1>DakiMart</h1>

                    <p>S'abonner</p>
                    <p>Bénéficiez de 10 % de réduction sur votre première commande</p>
                    <div className={styles.send}>
                        <input type="text" placeholder="Entrer votre email" />
                        <img src={sendIcon} alt="" />
                    </div>
                </div>

                <div className="support">
                    <h3>Support</h3>
                    <p>Enset mohmedia,N 1289 Autorote ,Rabat Agdal</p>
                    <p>support@dakimrt.com</p>
                    <p>+212 655 1460 69</p>
                </div>

                <div className={styles.siteMap}>
                    <h3>Carte de Site</h3>
                    <nav>
                        <Link to="/home">Home</Link>
                        <Link to="/promotions">Promotions</Link>
                        <Link to="/best-sellers">Meilleures ventes</Link>
                        <Link to="/about">à propos</Link>
                        <Link to="/login">Login</Link>
                    </nav>
                </div>
                <div className={styles.socialNetwork}>
                    <h3>Réseaux Sociaux</h3>
                    <div className={styles.net}>
                        <a href=""><img src={facebook} alt="facebook" /></a>
                        <a href=""><img src={x} alt="twitter" /></a>
                        <a href=""><img src={instagram} alt="instagram" /></a>
                        <a href=""><img src={linkedin} alt="linkden" /></a>

                    </div>
                </div>
            </div>
            <hr />
            <div className={styles.copyrights}>
                <p>&copy; Copyright DakiMart 2026. All right reserved</p>
            </div>

        </div>
    );
}