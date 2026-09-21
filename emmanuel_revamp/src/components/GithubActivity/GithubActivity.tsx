import { GitHubCalendar } from 'react-github-calendar';
import './GithubActivity.css';

const GithubActivity = () => (
  <section id="github-activity" className="github-section">
    <div className="github-bg" aria-hidden="true" />
    <div className="section" style={{ position: 'relative', zIndex: 1 }}>
      <div data-aos="fade-up">
        <span className="section-label">Open Source</span>
        <h2 className="section-heading">Code Contributions</h2>
        <p className="github-sub">
          My GitHub activity — one commit at a time.{' '}
          <a href="https://github.com/mojojompe" target="_blank" rel="noreferrer" className="github-profile-link">
            @mojojompe ↗
          </a>
        </p>
      </div>

      <div className="github-calendar-card" data-aos="fade-up" data-aos-delay="100">
        <GitHubCalendar
          username="mojojompe"
          colorScheme="light"
          blockSize={14}
          blockMargin={4}
          fontSize={13}
          theme={{
            light: ['#efede6', '#d5cfc3', '#b5aca0', '#8a8480', '#1a1917']
          }}
        />
      </div>
    </div>
  </section>
);

export default GithubActivity;
