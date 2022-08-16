import './Columns.css';
import img1 from './images/gdsc_hero.jpg'

const Columns = () => {
    return (
            <div className="home-cols">
                <div class="first-hero-col">
                    <h4>Google Developer Students Club</h4>
                    <h1>Helping students bridge the gap between theory and practice</h1>
                    <p>Google Developer Student Clubs (GDSC) are community groups for college and 
                        university students interested in Google developer technologies. Students 
                        from all undergraduate or graduate programs with an interest in growing as 
                        a developer are welcome. By joining a GDSC, students grow their knowledge in 
                        a peer-to-peer learning environment and build solutions for local businesses 
                        and their community.
                    </p>
                </div>
                <div className="second-hero-col">
                    <img className="hero-img" src={img1} />
                </div>
            </div>
    )
}

export default Columns