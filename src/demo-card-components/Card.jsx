import profilePic from '../assets/profile.webp';
import styles from './Card.module.css';

function Card() {
    return (
        <div className={styles.card}>
            <img className={styles['card-image']} src={profilePic} alt="profile picture" />
            <h2 className={styles['card-title']}>wuyutaott</h2>
            <p className={styles['card-text']}>I make Youtube videos and play games</p>
        </div>
    );
}

export default Card;