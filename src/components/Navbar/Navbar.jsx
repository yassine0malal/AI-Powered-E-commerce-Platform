import { useState } from "react";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import Links from "./Links";
import styles from "./Navbar.module.css";
import menu from "../../assets/icons/menu.png";


export default function NavBar() {
    const navigate = useNavigate();
    return (
        //two cases if it is connected it will show one kind if it is not it will show another 
        <>
            <div className={styles.upperNavbar}> Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span  >ShopNow</span></div>
            <div className={styles.navBarSection}>

                <div>
                    <h1>DakiMart</h1>
                </div>
                
                <div className={styles.link1}>
                    <img src={menu} alt="menu" />
                </div>

                <div className={styles.link2}>
                    <Links />
                </div>

                <div className="searchWihIcons">
                    <SearchBar />
                </div>
            </div>
        </>
    );
}