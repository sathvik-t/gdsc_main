import "./Announcements.css"
import AnnouncementCard from "./Announcements/AnnouncementCard";

const Announcements = () => {
    return (
        <div className="announcement">
            <div className="heading ">
                <h2>Accouncements</h2>
            </div>
            <div className="subheading">
                <p>Events are the one of the important part of the GDSC club. We organise events workshops on various topics from HTML CSS to Machine Learning and Artifical Intelligence. Interested candidates signup for the event using a google form which will be provided prior a week or two from the event</p>
            </div>
            <div className="annoucement-grid">
                <AnnouncementCard 
                    heading="Android Basics with Compose"
                    date="29 March"
                    description="Build a series of apps using Jetpack Compose, the modern way to create beautiful user interfaces in your Android apps. You will write these apps in the Kotlin programming language. This course is still under development, so more units are coming soon."
                    level="Beginner"
                />
                <AnnouncementCard 
                    heading="Android Basics in Kotlin"
                    date="19 April"
                    description="Build a series of apps in Kotlin, which is the language that the majority of professional Android developers use. This is an older course than the Compose course and teaches you how to use Android views to build user interfaces. The complete course is available now."
                    level="Beginner"
                />
                <AnnouncementCard 
                    heading="Android Basics with Compose"
                    date="29 March"
                    description="Incorporate and convert Java code into Kotlin using Android Studio, and learn Kotlin language conventions along the way. You’ll also learn how to write Kotlin code to make it callable from Java code."
                    level="Intermediate"
                />
            </div>
        </div>
    )
}

export default Announcements;