import './Button.css'

const Button = (props) => {
    return (
        <button className="button-yes">
            {props.name}
        </button>
    )
}

export default Button;