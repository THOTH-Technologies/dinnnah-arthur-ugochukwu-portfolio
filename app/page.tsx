import Image from "next/image";
import Gallery from "@/components/Gallery";
import { ArrowRight, ArrowUp, MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import ToolBadges from "@/components/ToolBadges";
import { BRANDING, CONTACT, JOBS, PRINT, SKILLS, SOCIAL, STATS } from "@/lib/content";
import { IMG } from "@/lib/assets";

export default function Page() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav />

      <main id="main">
        {/* ───────────── HERO ───────────── */}
        <section id="top" className="hero">
          <div className="hero__mark" aria-hidden="true">
            <span className="hero__line hero__line--top" />
            <span className="hero__ring">
              <span>2022</span>
              <span>{new Date().getFullYear()}</span>
            </span>
            <span className="hero__line hero__line--bottom" />
          </div>

          <div className="container hero__inner">
            <p className="eyebrow">Creative Portfolio</p>

            <h1 className="hero__name">
              <span>Dinnah</span>
              <span>Arthur</span>
              <span>
                Ug<em>o</em>chukwu
              </span>
            </h1>

            <p className="hero__role">Graphic Designer</p>
            <p className="hero__lede">
              Turning ideas into visuals that inspire action — branding, digital marketing assets and
              social media graphics.
            </p>

            <div className="hero__cta">
              <a href="#branding" className="btn">
                View my work <ArrowRight />
              </a>
              <a href="#contact" className="btn btn--ghost">
                Get in touch
              </a>
            </div>

            <div className="hero__tools">
              <span className="hero__tools-label">Tools</span>
              <ToolBadges />
            </div>
          </div>

          {/* <div className="container">
            <dl className="stats">
              {STATS.map((s) => (
                <div key={s.label} className="stats__item">
                  <dt>{s.value}</dt>
                  <dd>{s.label}</dd>
                </div>
              ))}
            </dl>
          </div> */}
        </section>

        {/* ───────────── ABOUT ───────────── */}
        <section id="about" className="section section--alt">
          <div className="container about">
            <Reveal className="about__photo">
              <div className="frame">
                <Image
                  src={IMG.aboutPortrait}
                  alt="Portrait of Dinnah Arthur Ugochukwu"
                  fill
                  sizes="(min-width: 900px) 40vw, 90vw"
                  priority
                />
              </div>
              <p className="about__caption">Dinnah Arthur Ugochukwu</p>
            </Reveal>

            <Reveal className="about__copy" delay={100}>
              <h2 className="title">
                <span>About</span>
                <span className="g">Me</span>
              </h2>
              <p className="prose">
                I’m Dinnah, a creative graphic designer with 5 years of experience turning ideas into
                visuals that inspire action. My expertise spans branding, digital marketing assets, and
                social media graphics.
              </p>
              <p className="prose">
                This portfolio highlights some of my work, showcasing how I merge creativity with
                strategy to deliver designs that connect with audiences.
              </p>

              <ul className="contact-list">
                <li>
                  <MailIcon />
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </li>
                <li>
                  <PhoneIcon />
                  <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                </li>
                <li>
                  <WhatsAppIcon />
                  <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
                    {CONTACT.whatsapp}
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ───────────── BRANDING ───────────── */}
        <section id="branding" className="section">
          <div className="container">
            <Reveal className="section__head">
              <div>
                <p className="eyebrow">Work 01</p>
                <h2 className="title">
                  <span className="g">Branding</span>
                  <span>Projects</span>
                </h2>
              </div>
              <blockquote className="quote">
                Strong brands are built on consistency and creativity. I’ve worked with businesses to
                craft logos, brand identities, and visual systems that reflect their essence and stand
                out in competitive markets. Each project focuses on creating a lasting impression that
                aligns with the brand’s voice and goals.
              </blockquote>
            </Reveal>
            <Reveal>
              <Gallery items={BRANDING} />
            </Reveal>
          </div>
        </section>

        {/* ───────────── SOCIAL ───────────── */}
        <section id="social" className="section section--alt">
          <div className="container">
            <Reveal className="section__head">
              <div>
                <p className="eyebrow">Work 02</p>
                <h2 className="title">
                  <span>Social</span>
                  <span className="g">Media</span>
                  <span>Graphics</span>
                </h2>
              </div>
              <p className="prose">
                In today’s digital world, visuals drive engagement. I specialize in designing social
                media graphics that are eye-catching, shareable, and tailored to platform-specific
                trends. My goal is to help brands boost visibility and interaction through
                scroll-stopping designs.
              </p>
            </Reveal>
            <Reveal>
              <Gallery items={SOCIAL} />
            </Reveal>
          </div>
        </section>

        {/* ───────────── PRINT ───────────── */}
        <section id="print" className="section">
          <div className="container">
            <Reveal className="section__head">
              <div>
                <p className="eyebrow">Work 03</p>
                <h2 className="title">
                  <span>Printable</span>
                  <span className="g">Materials</span>
                </h2>
              </div>
              <p className="prose">
                From flyers and menus to invitations and product packaging — print work designed to
                look sharp on the page and get noticed in the real world.
              </p>
            </Reveal>
            <Reveal>
              <Gallery items={PRINT} />
            </Reveal>
          </div>
        </section>

        {/* ───────────── SKILLS ───────────── */}
        <section id="skills" className="section section--alt">
          <div className="container skills">
            <Reveal>
              <p className="eyebrow">Skills</p>
              <h2 className="title">
                <span>Skills</span>
              </h2>
              <ul className="chips">
                {SKILLS.map((s, i) => (
                  <li key={s}>
                    <span className="chips__n">{String(i + 1).padStart(2, "0")}</span>
                    {s}
                  </li>
                ))}
              </ul>
              <div className="skills__tools">
                <span className="hero__tools-label">Daily tools</span>
                <ToolBadges />
              </div>
            </Reveal>

            <Reveal className="skills__photo" delay={100}>
              <div className="frame frame--tall">
                <Image
                  src={IMG.skillsPortrait}
                  alt="Dinnah Arthur Ugochukwu seated, with the word Creativity behind him"
                  fill
                  sizes="(min-width: 900px) 36vw, 90vw"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ───────────── EXPERIENCE ───────────── */}
        <section id="experience" className="section">
          <div className="container experience">
            <Reveal className="experience__head">
              <p className="eyebrow">Experience</p>
              <h2 className="title">
                <span>My</span>
                <span className="g">Work</span>
                <span>Experience</span>
              </h2>
            </Reveal>

            <ol className="timeline">
              {JOBS.map((job, i) => (
                <li key={job.org}>
                  <Reveal delay={Math.min(i, 3) * 60}>
                    <article className="job">
                      <p className="job__period">{job.period}</p>
                      <h3 className="job__org">{job.org}</h3>
                      <p className="job__role">{job.role}</p>
                      <ul className="job__points">
                        {job.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ───────────── CONTACT ───────────── */}
        <section id="contact" className="section section--alt contact">
          <div className="container contact__inner">
            {/* <Reveal className="contact__art" >
              <div className="contact__pen">
                <Image src={IMG.penTool} alt="" fill sizes="(min-width: 900px) 40vw, 60vw" />
              </div>
            </Reveal> */}

            <Reveal className="contact__copy" delay={100}>
              <p className="eyebrow">Thank you</p>
              <h2 className="title title--xl">
                <span>Let’s Work</span>
                <span className="g">Together</span>
              </h2>
              <p className="prose">
                Have a project in mind or looking for creative design solutions? Reach out directly —
                I’d love to hear about it.
              </p>

              <div className="contact__cards">
                <a className="card" href={`mailto:${CONTACT.email}`}>
                  <MailIcon />
                  <span>
                    <small>Email</small>
                    {CONTACT.email}
                  </span>
                </a>
                <a className="card" href={CONTACT.phoneHref}>
                  <PhoneIcon />
                  <span>
                    <small>Call</small>
                    {CONTACT.phone}
                  </span>
                </a>
                <a className="card" href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon />
                  <span>
                    <small>WhatsApp</small>
                    {CONTACT.whatsapp}
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__bar">
          <p>© {new Date().getFullYear()} Dinnah Arthur Ugochukwu · Graphic Designer</p>
          <a href="#top" className="footer__top">
            Back to top <ArrowUp />
          </a>
        </div>
      </footer>
    </>
  );
}
