import { GitHubCalendar } from "react-github-calendar";
import "./GithubActivity.css";

const GithubActivity = () => {
    return (
        <section id="github-activity" className="github-section">
            <div className="section-container" data-aos="fade-up">
                <h2 className="section-title">GitHub Activity</h2>
                <div className="github-calendar-wrapper glass-card">
                    <GitHubCalendar 
                        username="mojojompe" 
                        colorScheme="light"
                        blockSize={14}
                        blockMargin={4}
                        fontSize={14}
                    />
                </div>
            </div>
        </section>
    );
};

export default GithubActivity;
