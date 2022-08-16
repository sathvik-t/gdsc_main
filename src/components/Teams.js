import './Teams.css';
import Card from './Team/Card';
import Button from '../UI/Button';

const Teams = () => {
    return (
        <div className="team-class">
            <div className="another_header">
                <h4>Members of Google Developer Students Club</h4>
            </div>
            <div className="heading">
                <h1>The people behind GDSC!</h1>
            </div>
            <div>
                <div className="subheading">
                    <p>Meet the people who help GDSC stay awesome!</p>
                </div>
                <div className="gdsc-members">
                    <Card 
                        name="Giga Chad"
                        position="Manager"
                    />
                    <Card 
                        name="Kanye West"
                        position="Singer"
                    />
                    <Card 
                        name="Pete Davidson"
                        position="IDK"
                    />

                    <Card 
                        name="Messi"
                        position="Fooballer"
                    />

                    <Card 
                        name="Ronaldo"
                        position="Footballer"
                    />
                </div>
            </div>
            <div className="subheading">
                <h2>Want to be a part of GDSC?</h2>
                <p>Want to be a part of Google Students Developer Club? Want to enhance your career along side with google?</p>
                <p>This is the perfect place to start with. Fill up the form and lets began your journey</p>
                <Button 
                    name="Fill The Form"
                />
            </div>
        </div>
    )
}

export default Teams;