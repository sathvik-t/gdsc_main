import "./AnnouncementCard.css";

const AnnouncementCard = (props) => {
    return (
        <div class="main-card">
            <div className="announcement-image">Image</div>
            <div className="content">
                <div className="announcement-heading">
                    <p>{props.heading}</p>
                </div>
                <div>
                    <p><em>{props.date}</em></p>
                </div>
                <div>
                    <p>{props.description}</p>
                </div>
                <div>
                    <p>Difficulty Level: <em><b>{props.level}</b></em></p>
                </div>
                <div>
                    <p><a href=""></a></p>
                </div>
            </div>
        </div>
    )
}

export default AnnouncementCard;