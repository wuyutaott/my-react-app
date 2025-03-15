import PropTypes from 'prop-types';
import styles from './UserGreeting.module.css';

function UserGreeting({isLoggedIn = false, username = "Guest"}) {
    PropTypes.checkPropTypes(
        UserGreeting.propTypes,
        {isLoggedIn, username},
        'prop',
        'UserGreeting'
    );
    const welcomeMessage =  <h2 className={styles["welcome-message"]}>
                            Welcome {username}
                            </h2>;
    const loginPrompt =     <h2 className={styles["login-prompt"]}>
                            Please log in to continue
                            </h2>;
    return isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired
};

export default UserGreeting;