import { useState, useEffect } from 'react';
import { MdArrowOutward, MdWifiOff } from 'react-icons/md';
import './TechNews.css';

interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string;
  published_at: string;
  user: {
    name: string;
  };
}

const TechNews = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://dev.to/api/articles?tag=programming&per_page=6');
        if (response.ok) {
          const data = await response.json();
          setArticles(data);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Failed to fetch tech news:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [setArticles]);

  const renderSkeletons = () => {
    return Array(6).fill(0).map((_, i) => (
      <div key={i} className="news-card glass-card skeleton-card">
        <div className="news-img skeleton-img"></div>
        <div className="news-content">
          <div className="skeleton-text skeleton-meta"></div>
          <div className="skeleton-text skeleton-title"></div>
          <div className="skeleton-text skeleton-title short"></div>
          <div className="skeleton-text skeleton-desc"></div>
          <div className="skeleton-text skeleton-desc"></div>
        </div>
      </div>
    ));
  };

  return (
    <section id="tech-news" className="tech-news-section" data-aos="fade-up" style={{ position: 'relative' }}>
      <div className="black-grid-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}></div>
      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="section-title">Latest Tech News</h2>
        
        {loading ? (
          <div className="news-grid">
            {renderSkeletons()}
          </div>
        ) : error || (!articles || articles.length === 0) ? (
          <div className="error-state glass-card">
            <MdWifiOff size={48} color="var(--text-secondary)" />
            <h3>Unable to load latest news</h3>
            <p>Please check your internet connection or try again later.</p>
          </div>
        ) : (
          <div className="news-grid">
            {articles.map((article) => (
              <a href={article.url} target="_blank" rel="noreferrer" key={article.id} className="news-card glass-card">
                {article.cover_image && (
                  <div className="news-img">
                    <img src={article.cover_image} alt={article.title} loading="lazy" />
                  </div>
                )}
                <div className="news-content">
                  <div className="news-meta">
                    <span>{new Date(article.published_at).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{article.user.name}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <span className="read-more">Read Article <MdArrowOutward /></span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TechNews;
