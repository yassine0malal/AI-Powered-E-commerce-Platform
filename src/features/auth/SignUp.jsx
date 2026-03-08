import { useState } from "react";
import styles from "./Sign-up.module.css";
import googleSmallImage from "../../assets/images/google-small-image.png"
export default function SignUp() {
    return (
        <div className={styles.signUpSection}>

            <div className={styles.mainImage}>
                <img src="auth.png  " alt="" />
            </div>


            <div className={styles.content}>
                <h1>Create an account</h1>
                <p>Veuillez saisir vos coordonnées ci-dessous.</p>


                <div className={styles.inputs}>
                    <input type="text" placeholder="Entrer votre nom" />
                    <input type="text" placeholder="Entrer votre prénom" />
                    <input type="email" placeholder="Entrer votre email" />
                    <input type="password" placeholder="Entrer votre password" />
                    <select>
                        <option value="0" disabled>Vendeur ou Utilisateur</option>
                        <option value="user">User</option>
                        <option value="vendeur">Vendeur</option>
                    </select>
                    <input type="tel" id="bottomInput" placeholder="Entrer votre numéro de Tél" />

                </div>


                <button onClick={() => { console.log("Ss") }} className={styles.submitBtn}>Créer un Compte</button>

                <div className={styles.signByGoogle}>
                    <img className={styles.imageGoogle} src={googleSmallImage} alt="" />
                    <button>Continuer avec Google</button>
                </div>
                <p>J'ai déjà un compte? <span><a href="/login">Login</a></span> <span className={styles.forget}><a href="ss">Forget Password?</a></span></p>
            </div>

        </div>
    );
}