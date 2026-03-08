import searchIcon from "../../assets/icons/searchIcon.png"
import styles from './Navbar.module.css';
export default function SearchBar() {
    return (
        <div className={styles.warperSearchBar}>

            {/* ----------- */}
            <button className={styles.searchIconResponsive}><img src={searchIcon} alt="search" /></button>

            <div className={styles.searchWithIcon}>
                <input type="text" placeholder="Que cherchez-vous ?" />
                <button type="submit"><img src={searchIcon} alt="search" /></button>
            </div>

            {/* ------------ */}

            <div className="icons">
                {/* like
                    cart
                    if it is connected -> the profile 
                */}
            </div>

        </div>
    );
}