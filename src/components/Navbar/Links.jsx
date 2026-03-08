import { Link } from "react-router-dom";
import styles from './Navbar.module.css';

export default function Links() {
    return (
        <nav >
            <Link to="/">Home</Link>
            <Link to="/promotion">Promotions</Link>
            <Link to="/best-seller">Meilleures ventes</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login</Link>
        </nav>
    );
}