import Image from 'next/image';
import siteData from '@/data/site.json';

const externalProps = { target: '_blank', rel: 'noreferrer' } as const;
type NewsItem = (typeof siteData.news)[number];

export default function Home() {
  const pi = siteData.principalInvestigator;
  const phdStudents = siteData.people.filter((person) => person.group === 'phd');
  const mastersStudents = siteData.people.filter((person) => person.group === 'master');
  const latestUpdates = [
    siteData.news.find((item) => item.type === 'Publication'),
    siteData.news.find((item) => item.type !== 'Website' && item.type !== 'Publication'),
  ].filter((item): item is NewsItem => Boolean(item));

  return (
    <div id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <nav className="site-nav" aria-label="Primary navigation">
        <div className="nav-inner">
          <a className="wordmark" href="#top" aria-label="PIL Lab home">
            <strong>PIL Lab</strong>
            <span>Probabilistic Inference &amp; Learning</span>
          </a>
          <div className="nav-links">
            <a href="#research">Research</a>
            <a href="#work">Publications</a>
            <a href="#people">People</a>
            <a href="#resources">Resources</a>
            <a href="#news">News</a>
          </div>
          <a className="nav-contact" href={`mailto:${pi.email}`}>Contact</a>
        </div>
      </nav>

      <header className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="context-line">ZJU–UIUC Institute · Zhejiang University</p>
          <h1 id="hero-title">Probabilistic Inference and Learning Lab</h1>
          <p className="hero-zh">概率推理与学习实验室</p>
          <p className="hero-deck">
            PIL Lab studies probabilistic inference and generative modeling, with current work on
            diffusion models, inverse problems, diffusion language models, and learning algorithms.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#research">Research areas</a>
            <a className="plain-link" href="#people">Lab members</a>
          </div>
        </div>

        <aside className="hero-updates" aria-label="Latest lab updates">
          <div className="update-heading">
            <h2>Latest updates</h2>
            <a href="#news">All news</a>
          </div>
          {latestUpdates.map((item) => (
            <a className="update-item" href={item.url} {...externalProps} key={`${item.date}-${item.title}`}>
              <p><time>{item.date}</time><span>{item.type}</span></p>
              <h3>{item.title}</h3>
            </a>
          ))}
        </aside>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="standard-section about-section" id="about">
          <header className="section-title">
            <h2>About PIL Lab</h2>
          </header>
          <div className="section-body about-copy">
            <p>
              The Probabilistic Inference and Learning Lab is a research group at Zhejiang University.
              We study machine learning at the intersection of information theory, signal processing,
              and statistical physics.
            </p>
            <p>
              Our work develops theory and algorithms for high-dimensional inference and generation.
              Current projects include diffusion and flow models, generative methods for inverse
              problems, and parallel decoding for diffusion language models.
            </p>
            <p className="institution-line">
              Based at the <a href="https://zjui.intl.zju.edu.cn/en" {...externalProps}>ZJU–UIUC Institute ↗</a>
              <span>1 principal investigator · 10 graduate researchers</span>
            </p>
          </div>
        </section>

        <section className="standard-section research-section" id="research" aria-labelledby="research-title">
          <header className="section-title">
            <h2 id="research-title">Research areas</h2>
          </header>
          <div className="section-body">
            <p className="section-intro">
              Our research focuses on probabilistic inference, generative modeling, inverse problems,
              and diffusion language models.
            </p>
            <div className="research-list">
              {siteData.research.map((area) => (
                <article className="research-item" key={area.id}>
                  <div>
                    <p>{area.titleZh}</p>
                    <h3>{area.title}</h3>
                  </div>
                  <div className="research-description">
                    <p>{area.description}</p>
                    <a href={area.related.url} {...externalProps}>{area.related.label} ↗</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="standard-section publication-section" id="work" aria-labelledby="work-title">
          <header className="section-title">
            <h2 id="work-title">Selected publications</h2>
          </header>
          <div className="section-body">
            <p className="section-intro">
              Selected work by the PI and lab members in diffusion language models, generative inverse
              problems, statistical learning, Bayesian inference, and signal processing.
            </p>
            <div className="publication-list">
              {siteData.publications.map((publication, index) => (
                <article className="publication-row" key={publication.title}>
                  <time>{publication.year}</time>
                  <div className="publication-main">
                    <p className="publication-venue">{publication.venue}</p>
                    <h3><a href={publication.url} {...externalProps}>{publication.title}</a></h3>
                    <p className="publication-authors">{publication.authors}</p>
                    {index < 2 ? <p className="publication-summary">{publication.summary}</p> : null}
                    <div className="publication-actions">
                      <a href={publication.url} {...externalProps}>Paper</a>
                      {'code' in publication && publication.code ? <a href={publication.code} {...externalProps}>Code</a> : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <a className="section-link" href={pi.homepage} {...externalProps}>Full publication list on the PI homepage ↗</a>
          </div>
        </section>

        <section className="standard-section people-section" id="people" aria-labelledby="people-title">
          <header className="section-title">
            <h2 id="people-title">Lab members</h2>
          </header>
          <div className="section-body people-content">
            <p className="section-intro">
              PIL Lab currently includes one principal investigator, four PhD students, and six master&apos;s students.
            </p>

            <article className="pi-profile">
              <div className="pi-photo-wrap">
                <a className="pi-photo" href={pi.photoSource} {...externalProps} aria-label="Official ZJUI profile for Xiangming Meng">
                  <Image src={pi.photo} alt="Xiangming Meng" fill sizes="180px" />
                </a>
                <a className="photo-credit" href={pi.photoSource} {...externalProps}>Official profile photo · ZJUI</a>
              </div>
              <div className="pi-info">
                <p>{pi.role}</p>
                <h3>{pi.name} <span>{pi.nameZh}</span></h3>
                <p className="pi-title">{pi.title}<br />{pi.titleZh}<br />{pi.affiliation}</p>
                <p className="pi-bio">{pi.bio}</p>
                <div className="inline-links">
                  <a href={pi.homepage} {...externalProps}>Homepage</a>
                  <a href={pi.profile} {...externalProps}>ZJU profile</a>
                  <a href={`mailto:${pi.email}`}>Email</a>
                </div>
              </div>
            </article>

            <div className="student-group">
              <div className="student-heading">
                <h3>PhD students <span>博士生</span></h3>
                <p>{phdStudents.length} members</p>
              </div>
              <div className="member-grid">
                {phdStudents.map((person) => (
                  <article className="member-card" key={person.name}>
                    <div className="member-photo">
                      <Image src={person.photo} alt={person.name} fill sizes="(max-width: 760px) 45vw, 190px" />
                    </div>
                    <h4>{person.name}</h4>
                    <p>{person.role}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="student-group">
              <div className="student-heading">
                <h3>Master&apos;s students <span>硕士生</span></h3>
                <p>{mastersStudents.length} members</p>
              </div>
              <div className="member-grid">
                {mastersStudents.map((person) => (
                  <article className="member-card" key={person.name}>
                    <div className="member-photo">
                      <Image src={person.photo} alt={person.name} fill sizes="(max-width: 760px) 45vw, 190px" />
                    </div>
                    <h4>{person.name}</h4>
                    <p>{person.role}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="standard-section resource-section" id="resources" aria-labelledby="resources-title">
          <header className="section-title">
            <h2 id="resources-title">Reading maps</h2>
          </header>
          <div className="section-body">
            <p className="section-intro">
              PIL Lab maintains two public reading maps for diffusion language models, diffusion models,
              and flow matching.
            </p>
            <div className="resource-list">
              {siteData.resources.map((resource) => (
                <article className="resource-item" key={resource.title}>
                  <div>
                    <p>{resource.titleZh}</p>
                    <h3>{resource.title}</h3>
                  </div>
                  <div>
                    <p>{resource.description}</p>
                    <span>{resource.meta}</span>
                  </div>
                  <div className="resource-links">
                    <a href={resource.url} {...externalProps}>Website</a>
                    <a href={resource.github} {...externalProps}>GitHub</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="standard-section news-section" id="news" aria-labelledby="news-title">
          <header className="section-title">
            <h2 id="news-title">Lab news</h2>
          </header>
          <div className="section-body">
            <div className="news-list">
              {siteData.news.map((item) => {
                const isExternal = item.url.startsWith('https://');
                return (
                  <a href={item.url} {...(isExternal ? externalProps : {})} className="news-row" key={`${item.date}-${item.title}`}>
                    <time>{item.date}</time>
                    <span>{item.type}</span>
                    <p>{item.title}</p>
                  </a>
                );
              })}
            </div>
            <p className="news-note">{siteData.newsNote}</p>
            <a className="section-link" href={pi.homepage} {...externalProps}>More updates on the PI homepage ↗</a>
          </div>
        </section>

        <section className="standard-section contact-section" id="contact" aria-labelledby="contact-title">
          <header className="section-title">
            <h2 id="contact-title">Contact and opportunities</h2>
          </header>
          <div className="section-body contact-copy">
            <p>
              Students and researchers interested in probabilistic inference, generative models,
              diffusion language models, or inverse problems may contact the lab by email.
            </p>
            <div className="contact-actions">
              <a className="primary-link" href={`mailto:${pi.email}`}>Email the lab</a>
              <a className="plain-link" href="https://github.com/zju-pil-lab" {...externalProps}>GitHub organization ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p><strong>PIL Lab</strong><br />Probabilistic Inference and Learning</p>
        <p>ZJU–UIUC Institute<br />Zhejiang University</p>
        <p><a href={`mailto:${pi.email}`}>{pi.email}</a><br />© 2026 PIL Lab</p>
      </footer>
    </div>
  );
}
