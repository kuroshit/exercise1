const Button = ({ text, handleClick}) => {
    return (
        <button className="feedback-button" onClick={handleClick}>{text}</button>
    )
}

export default Button;