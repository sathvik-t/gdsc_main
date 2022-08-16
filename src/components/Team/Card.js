import "./Card.css";

const Card = (props) => {
    return (
        <div className="main-card">
            <div className="image">siuu</div>
            <h2 className="card-name">{props.name}</h2>
            <p className="card-position">{props.position}</p>
        </div>
    )
} 

export default Card;