import { useState, useEffect } from 'react';
import AccordionGallery from '../ui/AccordionGallery/AccordionGallery';
import CardSwap, { Card } from '../ui/CardSwap/CardSwap';
import './TechNews.css';

interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string | null;
  published_at: string;
  user: { name: string };
}

const FALLBACK_IMG = '/Software Engineering.png';

const TechNews = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://dev.to/api/articles?tag=programming&per_page=6')
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(data => setArticles(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const accordionItems = articles
    .filter(a => a.cover_image)
    .slice(0, 5)
    .map(a => ({
      image: a.cover_image || FALLBACK_IMG,
      label: a.title,
      link: a.url,
      alt: a.title,
    }));

  const swapArticles = articles.slice(0, 4);

  const formatDate = (d: string) => new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <section id="tech-news" className="tech-news-section">
      <div className="section" data-aos="fade-up">
        <span className="section-label">Stay Current</span>
        <h2 className="section-heading">Latest Tech News</h2>
        <p className="tech-news-sub">Real articles from Dev.to, the developer community.</p>
      </div>

      {loading ? (
        <div className="section">
          <div className="news-skeleton-grid">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="news-skeleton" />
            ))}
          </div>
        </div>
      ) : error || articles.length === 0 ? (
        <div className="section">
          <div className="news-error-state">
            <span className="news-error-icon" aria-hidden="true">📡</span>
            <h3>Unable to load tech news</h3>
            <p>Please check your connection or try again later.</p>
          </div>
        </div>
      ) : (
        <>
          {/* Desktop: AccordionGallery */}
          <div className="tech-news-desktop section" data-aos="fade-up" data-aos-delay="100">
            <AccordionGallery
              items={accordionItems}
              defaultIndex={0}
              accentColor="#d5cfc3"
              overlayColor="#1a1917"
              textColor="#fafaf8"
              height={500}
              gap={10}
              radius={16}
              expandRatio={0.52}
              duration={0.6}
              ease="power3.out"
              parallax={0.5}
              tilt={8}
              stagger={0.06}
              trigger="hover"
              showLabels={true}
              grayscale={true}
            />
          </div>

          {/* Mobile: CardSwap */}
          <div className="tech-news-mobile" data-aos="fade-up">
            <CardSwap
              width="100%"
              height={280}
              cardDistance={50}
              verticalDistance={45}
              delay={4000}
              pauseOnHover
              skewAmount={4}
              easing="elastic"
            >
              {swapArticles.map(article => (
                <Card key={article.id} onClick={() => window.open(article.url, '_blank')}>
                  <div className="news-swap-card">
                    <img
                      src={article.cover_image || FALLBACK_IMG}
                      alt={article.title}
                      className="news-swap-img"
                      loading="lazy"
                    />
                    <div className="news-swap-overlay" />
                    <div className="news-swap-content">
                      <span className="news-swap-meta">{formatDate(article.published_at)} · {article.user.name}</span>
                      <h3 className="news-swap-title">{article.title}</h3>
                      <span className="news-swap-cta">Read Article ↗</span>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>
        </>
      )}
    </section>
  );
};

export default TechNews;
