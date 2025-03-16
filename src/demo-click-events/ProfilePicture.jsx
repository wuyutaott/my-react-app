function ProfilePicture() {

    const styles = {
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        border: "5px solid hsl(70, 2.80%, 42.00%)",
        cursor: "pointer"
    };

    const handleClick = (e) => {
        e.target.style.display = "none";
    }

    return (
        <img style={styles} onClick={(e) => handleClick(e)} src="src/assets/profile.webp" />
    )
}

export default ProfilePicture;