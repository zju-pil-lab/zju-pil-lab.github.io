import Image from 'next/image';
import ResearchField from '@/components/research-field';
import siteData from '@/data/site.json';

const externalProps = { target: '_blank', rel: 'noreferrer' } as const;

export default function Home() {
  const pi = siteData.principalInvestigator;
  const phdStudents = siteData.people.filter((person) => person.group === 'phd');
  const mastersStudents = siteData.people.filter((person) => person.group === 'master');

  return (
    <main id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="PIL Lab home">
          <span className="wordmark-symbol" aria-hidden="true"><i>P</i><i>I</i><i>L</i></span>
          <span>PIL LAB</span>
        </a>
        <div className="nav-links">
          <a href="#research">Research</a>
          <a href="#work">Selected work</a>
          <a href="#people">People</a>
          <a href="#resources">Resources</a>
          <a href="#news">News</a>
        </div>
        <a className="nav-contact" href="#contact">Contact <span>↘</span></a>
      </nav>

      <div id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> ZHEJIANG UNIVERSITY · RESEARCH LAB</p>
            <h1 id="hero-title">Probabilistic<br />Inference <em>&amp; Learning</em></h1>
            <p className="hero-deck">
              We study foundational principles and algorithms in machine learning,
              with an emphasis on probabilistic modeling, inference, generative models,
              and reliable reasoning under uncertainty.
            </p>
            <p className="hero-deck-zh">概率推断与学习实验室 · 研究机器学习的基础理论、生成模型与推断算法。</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#research">Explore research <span>→</span></a>
              <a className="button button-quiet" href="#contact">Join the lab</a>
            </div>
          </div>
          <ResearchField />
        </section>

        <section className="lab-strip" aria-label="Laboratory overview">
          <div><span>Institution</span><strong>Zhejiang University</strong></div>
          <div><span>Team</span><strong>1 PI · 4 PhD · 6 Master&apos;s</strong></div>
          <div><span>Research span</span><strong>Inference · Generation · Intelligence</strong></div>
          <div><span>Open resources</span><strong>2 research reading maps</strong></div>
        </section>

        <section className="section about-section" id="about">
          <header className="section-heading">
            <p className="eyebrow"><span /> ABOUT PIL</p>
            <h2>Research with<br />a principled core.</h2>
          </header>
          <div className="about-copy">
            <p className="about-lead">
              PIL stands for <em>Probabilistic Inference and Learning</em>.
              We connect machine learning with information theory, signal processing,
              and statistical mechanics to understand how intelligent systems learn from data.
            </p>
            <div className="about-notes">
              <article><span>01</span><h3>Foundations</h3><p>We ask what can be learned, inferred, and generated—and under which assumptions.</p></article>
              <article><span>02</span><h3>Algorithms</h3><p>We translate theory into efficient methods for high-dimensional, uncertain systems.</p></article>
              <article><span>03</span><h3>Open scholarship</h3><p>We build public reading maps and research artifacts for students and collaborators.</p></article>
            </div>
          </div>
        </section>

        <section className="research-section" id="research" aria-labelledby="research-title">
          <div className="research-intro">
            <div>
              <p className="eyebrow"><span /> RESEARCH AREAS</p>
              <h2 id="research-title">What we study</h2>
            </div>
            <p>Our work spans mathematical foundations and modern generative intelligence, with probability as a shared language.</p>
          </div>
          <div className="research-grid">
            {siteData.research.map((area) => (
              <article className="research-card" key={area.id}>
                <div className="card-meta"><span>{area.index}</span><span>{area.label}</span></div>
                <div>
                  <p className="research-zh">{area.titleZh}</p>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </div>
                <code>{area.formula}</code>
              </article>
            ))}
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="work-inner">
            <header className="work-heading">
              <div>
                <p className="eyebrow"><span /> SELECTED WORK</p>
                <h2 id="work-title">Representative<br />publications</h2>
              </div>
              <p>Eight representative works across generative inverse problems, statistical learning, Bayesian inference, and signal processing. Each entry links to its primary record.</p>
            </header>
            <div className="publication-list">
              {siteData.publications.map((publication, index) => (
                <article className="publication-row" key={publication.title}>
                  <span className="publication-index">{String(index + 1).padStart(2, '0')}</span>
                  <div className="publication-main">
                    <p className="publication-meta">{publication.year} · {publication.venue}</p>
                    <h3><a href={publication.url} {...externalProps}>{publication.title}</a></h3>
                    <p className="publication-authors">{publication.authors}</p>
                    <p className="publication-summary">{publication.summary}</p>
                    <div className="publication-actions">
                      <a href={publication.url} {...externalProps}>Paper ↗</a>
                      {'code' in publication && publication.code ? <a href={publication.code} {...externalProps}>Code ↗</a> : null}
                    </div>
                  </div>
                  <a className="publication-arrow" aria-label={`Open ${publication.title}`} href={publication.url} {...externalProps}>↗</a>
                </article>
              ))}
            </div>
            <a className="text-link light-link" href="https://mengxiangming.github.io/" {...externalProps}>View the PI&apos;s full publication list <span>↗</span></a>
          </div>
        </section>

        <section className="section people-section" id="people">
          <header className="section-heading people-heading">
            <p className="eyebrow"><span /> PEOPLE</p>
            <h2>People behind<br />the research.</h2>
            <p>One principal investigator and ten graduate researchers working across theory, algorithms, and modern generative intelligence.</p>
          </header>
          <div className="people-content">
            <article className="person-card pi-card">
              <a className="person-photo" href={pi.photoSource} {...externalProps} aria-label="Official ZJUI profile for Xiangming Meng">
                <Image src={pi.photo} alt="Xiangming Meng" fill sizes="(max-width: 760px) 150px, 220px" />
                <span>OFFICIAL PHOTO · ZJUI ↗</span>
              </a>
              <div className="person-info">
                <p className="person-role">{pi.role}</p>
                <h3>{pi.name} <span>{pi.nameZh}</span></h3>
                <p className="person-title">{pi.title}<br />{pi.titleZh}<br />{pi.affiliation}</p>
                <p className="person-bio">{pi.bio}</p>
                <div className="person-links">
                  <a href={pi.homepage} {...externalProps}>Homepage ↗</a>
                  <a href={pi.profile} {...externalProps}>ZJU profile ↗</a>
                  <a href={`mailto:${pi.email}`}>Email ↗</a>
                </div>
              </div>
            </article>

            <div className="student-group">
              <div className="student-group-heading">
                <div><span>01</span><p>DOCTORAL RESEARCHERS</p></div>
                <h3>博士生 <span>PhD students</span></h3>
                <p>{phdStudents.length} members</p>
              </div>
              <div className="member-grid">
                {phdStudents.map((person) => (
                  <article className="member-card" key={person.name}>
                    <div className="member-photo">
                      <Image src={person.photo} alt={person.name} fill sizes="(max-width: 760px) 45vw, 180px" />
                    </div>
                    <div className="member-info">
                      <p>{person.role}</p>
                      <h4>{person.name}</h4>
                      <span>{person.roleZh}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="student-group">
              <div className="student-group-heading">
                <div><span>02</span><p>MASTER&apos;S RESEARCHERS</p></div>
                <h3>硕士生 <span>Master&apos;s students</span></h3>
                <p>{mastersStudents.length} members</p>
              </div>
              <div className="member-grid">
                {mastersStudents.map((person) => (
                  <article className="member-card" key={person.name}>
                    <div className="member-photo">
                      <Image src={person.photo} alt={person.name} fill sizes="(max-width: 760px) 45vw, 180px" />
                    </div>
                    <div className="member-info">
                      <p>{person.role}</p>
                      <h4>{person.name}</h4>
                      <span>{person.roleZh}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="resource-section" id="resources" aria-labelledby="resources-title">
          <div className="resource-heading">
            <div>
              <p className="eyebrow"><span /> OPEN RESOURCES</p>
              <h2 id="resources-title">Maps for learning<br />and research.</h2>
            </div>
            <p>Curated, source-linked reading routes maintained by PIL Lab for students entering fast-moving research areas.</p>
          </div>
          <div className="resource-grid">
            {siteData.resources.map((resource) => (
              <article className="resource-card" key={resource.title}>
                <div className="resource-top"><span>{resource.index}</span><span>{resource.label}</span></div>
                <div className="resource-mark" aria-hidden="true"><i /><i /><i /><i /><i /></div>
                <p className="resource-zh">{resource.titleZh}</p>
                <h3>{resource.title}</h3>
                <p className="resource-description">{resource.description}</p>
                <p className="resource-meta">{resource.meta}</p>
                <div className="resource-links">
                  <a href={resource.url} {...externalProps}>Open map <span>↗</span></a>
                  <a href={resource.github} {...externalProps}>Source</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section news-section" id="news">
          <header className="section-heading">
            <p className="eyebrow"><span /> LAB NOTES</p>
            <h2>Recent updates</h2>
          </header>
          <div className="news-list">
            {siteData.news.map((item) => {
              const isExternal = item.url.startsWith('https://');
              return (
                <a href={item.url} {...(isExternal ? externalProps : {})} className="news-row" key={`${item.date}-${item.title}`}>
                  <time>{item.date}</time>
                  <span>{item.type}</span>
                  <p>{item.title}</p>
                  <i>↗</i>
                </a>
              );
            })}
          </div>
          <div className="news-footer">
            <p>{siteData.newsNote}</p>
            <a href="https://mengxiangming.github.io/" {...externalProps}>More updates on the PI homepage ↗</a>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow"><span /> CONTACT & OPPORTUNITIES</p>
            <h2 id="contact-title">Work with us.</h2>
          </div>
          <div className="contact-copy">
            <p>Prospective students and collaborators interested in probabilistic inference, generative models, diffusion language models, or inverse problems are welcome to get in touch.</p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:xiangmingmeng@intl.zju.edu.cn">Send an email <span>↗</span></a>
              <a className="button button-quiet" href="https://github.com/zju-pil-lab" {...externalProps}>GitHub organization</a>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <a className="wordmark footer-wordmark" href="#top"><span className="wordmark-symbol"><i>P</i><i>I</i><i>L</i></span><span>PIL LAB</span></a>
        <p>Probabilistic Inference and Learning<br />Zhejiang University</p>
        <p><a href="https://github.com/zju-pil-lab" {...externalProps}>GitHub ↗</a><br />© 2026 PIL Lab</p>
      </footer>
    </main>
  );
}
