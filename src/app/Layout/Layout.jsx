import { Outlet } from "react-router-dom";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./layout.module.css";

export default function Layout() {

    return (
        <div className={styles.layout}>
            <NavBar />
            <hr className={styles.hrLayout} />
            <main style={{/* border: "2px solid red" */}}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}