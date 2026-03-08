import { useState } from "react";
import styles from "./Sign-up.module.css";
import googleSmallImage from "../../assets/images/google-small-image.png"
export default function Login() {
    return (
        <>
            <div className={styles.signUpSection}>

                <div className={styles.mainImage}>
                    <img src="auth.png  " alt="" />
                </div>


                <div className={styles.content}>
                    <h1>Log in to DakiMart</h1>
                    <p>Entrer votre informations.</p>
                    <div className={styles.inputs}>
                        <input type="email" placeholder="Entrer votre email" />
                        <input type="password" placeholder="Entrer votre password" />
                    </div>

                    <div className={styles.submit}>
                        <button onClick={() => { console.log("Ss") }} className={styles.submitBtn}>Log In</button>
                        <span className={styles.forget}><a href="ss">Forget Password?</a></span>
                    </div>
                </div>



            </div>
        </>
    );
}