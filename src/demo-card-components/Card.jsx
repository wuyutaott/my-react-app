import profilePic from '../assets/profile.webp';

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">wuyutaott</h2>
            <p className="card-text">I make Youtube videos and play games</p>
        </div>
    );
}

export default Card;