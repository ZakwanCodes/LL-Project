import styles from "./ProtectedRoute.module.css";


export default function LoadSpinner(){
    return (
          <div className={styles.loadingContainer}>
            <div className={styles.spinner}>
              <div className={styles.spinnerCircle}></div>
              <p className={styles.loadingText}>Loading...</p>
            </div>
          </div>    
        );
}