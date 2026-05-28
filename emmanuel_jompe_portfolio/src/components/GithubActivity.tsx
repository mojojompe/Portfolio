import { GitHubCalendar } from "react-github-calendar";
import "./GithubActivity.css";

const GithubActivity = () => {
    return (
        <section id="github-activity" className="github-section" style={{ position: 'relative', padding: '80px 0' }}>
            <div className="css-grid-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
            <div className="section-container" data-aos="fade-up" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="section-title" style={{ color: 'white' }}>GitHub Activity</h2>
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
