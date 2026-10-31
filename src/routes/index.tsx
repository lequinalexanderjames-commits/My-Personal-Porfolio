import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Code2,
  Braces,
  Coffee,
  Lightbulb,
  Brain,
  Shuffle,
  BookOpen,
  Bike,
  Footprints,
  Guitar,
  Puzzle,
  Crown,
  X,
  UserRound,
  Terminal,
  Mail,
  GitFork,
} from 'lucide-react'
import { ContactForm } from '../components/ContactForm'
import { site } from '../lib/site'

export const Route = createFileRoute('/')({
  component: PortfolioHome,
  head: () => ({
    meta: [
      { title: site.name },
      { name: 'description', content: site.description },
    ],
  }),
})

const hobbies = [
  {
    title: 'Speedcubing',
    subtitle: 'One solve at a time.',
    icon: Puzzle,
    description:
      'Practicing different solving techniques, learning CFOP, and improving my solving times.',
    tag: 'PATTERNS & PERSISTENCE',
    art: 'cube',
  },
  {
    title: 'Chess',
    subtitle: 'Thinking a few moves ahead.',
    icon: Crown,
    description:
      'Exploring strategies, developing logical thinking, and learning to make better decisions.',
    tag: 'STRATEGY & FOCUS',
    art: 'chess',
  },
  {
    title: 'Cycling',
    subtitle: 'A little further every ride.',
    icon: Bike,
    description:
      'Exploring routes, enjoying outdoor rides, and challenging myself through long-distance cycling.',
    tag: 'EXPLORATION & ENDURANCE',
    art: 'cycling',
  },
  {
    title: 'Running',
    subtitle: 'Progress, step by step.',
    icon: Footprints,
    description:
      'Building consistency, improving endurance, and developing discipline through running.',
    tag: 'CONSISTENCY & DISCIPLINE',
    art: 'running',
  },
  {
    title: 'Guitar',
    subtitle: 'Finding my own rhythm.',
    icon: Guitar,
    description:
      'Exploring music, learning chords, and developing my guitar-playing skills.',
    tag: 'MUSIC & CREATIVITY',
    art: 'guitar',
  },
  {
    title: 'Programming',
    subtitle: 'Turning curiosity into code.',
    icon: Code2,
    description:
      'Learning the fundamentals of coding and understanding how software and technology work.',
    tag: 'LOGIC & CURIOSITY',
    art: 'code',
  },
]
const projects = [
  {
    title: 'Java Calculator',
    description:
      'A beginner Java project involving basic arithmetic operations.',
    tags: ['Java', 'Programming logic'],
    preview: 'calculator',
    note: 'A small learning project focused on arithmetic and the fundamentals of Java. An opportunity to practice programming logic through a familiar everyday tool.',
  },
  {
    title: 'Problem Bank',
    description: 'An academic HTML-based project.',
    tags: ['HTML', 'Academic project'],
    preview: 'bank',
    note: 'An academic project for practicing HTML and organizing information on a web page. Part of my journey to understand the structure and fundamentals of the web.',
  },
  {
    title: 'Personal Portfolio',
    description: 'This website, showcasing my interests and learning journey.',
    tags: ['HTML & CSS', 'TypeScript', 'React'],
    preview: 'portfolio',
    note: 'A personal space to share what I enjoy, what I am learning, and where I hope to go. Built with responsive layouts, interactive details, and a focus on the fundamentals.',
  },
]
type Detail = {
  title: string
  description: string
  tags?: string[]
  note?: string
}
function Cube({ small = false }: { small?: boolean }) {
  return (
    <div
      className={small ? 'cube-scene small-cube' : 'cube-scene'}
      aria-hidden="true"
    >
      <div className="cube-object">
        {['front', 'right', 'top'].map((face) => (
          <div key={face} className={`cube-face ${face}`}>
            {Array.from({ length: 9 }, (_, i) => (
              <span key={i} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
function DetailModal({
  detail,
  close,
}: {
  detail: Detail | null
  close: () => void
}) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const dialog = ref.current
    if (detail && dialog) {
      dialog.showModal()
      document.body.style.overflow = 'hidden'
    }
    return () => {
      if (dialog?.open) dialog.close()
      document.body.style.overflow = ''
    }
  }, [detail])
  return (
    <dialog
      ref={ref}
      className="detail-modal"
      onCancel={close}
      onClick={(e) => {
        if (e.target === e.currentTarget) close()
      }}
      aria-labelledby="modal-title"
    >
      {detail && (
        <>
          <button
            className="close-modal"
            aria-label="Close details"
            onClick={close}
          >
            <X size={22} />
          </button>
          <span className="eyebrow">A CLOSER LOOK</span>
          <h2 id="modal-title">{detail.title}</h2>
          <p>{detail.description}</p>
          {detail.note && <p>{detail.note}</p>}
          {detail.tags && (
            <div className="tags">
              {detail.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          )}
          <button className="button secondary" onClick={close}>
            Back to exploring <ArrowRight size={16} />
          </button>
        </>
      )}
    </dialog>
  )
}
function PortfolioHome() {
  const [detail, setDetail] = useState<Detail | null>(null)
  return (
    <>
      <section id="home" className="hero section-wrap">
        <div className="hero-content">
          <div className="status-pill">
            <span /> FIRST-YEAR BS COMPUTER SCIENCE STUDENT
          </div>
          <p className="hero-kicker">BEYOND THE BASICS</p>
          <h1>
            Learning.
            <br />
            Building.
            <br />
            <span>Improving.</span>
          </h1>
          <p className="hero-intro">
            Hi, I'm a Computer Science student passionate about technology,
            problem-solving, and continuous learning. I enjoy exploring new
            skills, challenging myself, and turning ideas into something
            meaningful.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              Explore My Portfolio <ArrowUpRight size={18} />
            </a>
            <a className="button secondary" href="#about">
              Get to Know Me <ArrowRight size={17} />
            </a>
          </div>
          <div className="hero-note">
            <span className="tiny-line" /> A work in progress. And proud of it.
          </div>
        </div>
        <div className="hero-art">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <span className="coordinate coord-top">01 / THE STARTING POINT</span>
          <span className="floating-symbol symbol-one">{'{ }'}</span>
          <span className="floating-symbol symbol-two">+</span>
          <Cube />
          <div className="code-label">
            <Code2 size={18} />
            <span>
              built on <strong>curiosity</strong>
            </span>
            <span className="label-dot" />
          </div>
          <span className="coordinate coord-bottom">
            ALWAYS LEARNING. ALWAYS EVOLVING.
          </span>
        </div>
        <a href="#about" className="scroll-cue">
          <ArrowDown size={15} /> SCROLL TO DISCOVER
        </a>
        <span className="hero-index">PORTFOLIO — 2026</span>
      </section>
      <div className="interest-strip">
        <div className="section-wrap strip-inner">
          <span>
            <Code2 /> CURIOUS BY NATURE
          </span>
          <i>+</i>
          <span>
            <Puzzle /> DRIVEN BY CHALLENGES
          </span>
          <i>+</i>
          <span>
            <BookOpen /> LEARNING EVERY DAY
          </span>
          <i>+</i>
          <span>
            <Braces /> BUILT ON FUNDAMENTALS
          </span>
        </div>
      </div>
      <section id="about" className="section-wrap section-pad about-grid">
        <div className="portrait">
          <div className="portrait-grid" />
          <div className="portrait-outline">
            <UserRound size={110} strokeWidth={0.7} />
          </div>
          <span className="portrait-label">YOUR PHOTO HERE</span>
          <span className="portrait-caption">
            <span /> The person behind the progress
          </span>
          <span className="corner-mark">+</span>
        </div>
        <div>
          <p className="eyebrow">01 / THE PERSON BEHIND THE CODE</p>
          <h2>
            A Little <span>About Me</span>
          </h2>
          <p>
            I am a student currently pursuing a Bachelor of Science in Computer
            Science. I enjoy learning how things work, exploring different
            fields, and developing new skills through practical experience.
          </p>
          <p>
            I believe that learning goes beyond understanding concepts. It
            involves applying knowledge, making mistakes, solving problems, and
            continuously improving.
          </p>
          <p>
            My interests include technology, speedcubing, chess, cycling,
            running, and playing guitar.
          </p>
          <div className="about-facts">
            <span>
              <BookOpen size={17} /> BS Computer Science
            </span>
            <span>
              <span className="cyan-dot" /> First year. First chapter.
            </span>
          </div>
        </div>
      </section>
      <section id="skills" className="section-wrap section-pad ruled">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / BUILDING THE FOUNDATION</p>
            <h2>
              Small skills.
              <br />
              <span>Growing possibilities.</span>
            </h2>
          </div>
          <p>
            Starting with the fundamentals.
            <br />
            Getting a little better with every attempt.
          </p>
        </div>
        <div className="skills-layout">
          <div className="technical-skills">
            <h3>
              <Terminal size={18} /> Technical skills <span>IN PROGRESS</span>
            </h3>
            {[
              {
                title: 'HTML',
                text: 'Basic HTML',
                icon: Code2,
                level: 'Learning structure',
                width: '32%',
              },
              {
                title: 'CSS',
                text: 'Basic CSS',
                icon: Braces,
                level: 'Exploring styles',
                width: '28%',
              },
              {
                title: 'Java',
                text: 'Basic Java Programming',
                icon: Coffee,
                level: 'Practicing the basics',
                width: '24%',
              },
              {
                title: 'Logic',
                text: 'Programming Logic',
                icon: Lightbulb,
                level: 'Building understanding',
                width: '36%',
              },
            ].map((s) => (
              <div className="skill-row" key={s.title}>
                <s.icon size={21} />
                <div>
                  <strong>{s.text}</strong>
                  <div className="progress-track">
                    <span style={{ width: s.width }} />
                  </div>
                </div>
                <span className="skill-level">{s.level}</span>
              </div>
            ))}
            <p className="skill-note">
              A snapshot of my learning, not a measure of mastery.
            </p>
          </div>
          <div className="personal-skills">
            <h3>More than just code</h3>
            {[
              {
                title: 'Problem-solving',
                icon: Lightbulb,
                text: 'Finding a way forward.',
              },
              {
                title: 'Critical Thinking',
                icon: Brain,
                text: 'Looking a little deeper.',
              },
              {
                title: 'Adaptability',
                icon: Shuffle,
                text: 'Staying open to change.',
              },
              {
                title: 'Independent Learning',
                icon: BookOpen,
                text: 'Following my curiosity.',
              },
            ].map((s) => (
              <div key={s.title}>
                <s.icon size={20} />
                <span>
                  <strong>{s.title}</strong>
                  <small>{s.text}</small>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="hobbies" className="section-wrap section-pad ruled">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / MORE THAN A STUDENT</p>
            <h2>
              Beyond the <span>Classroom</span>
            </h2>
          </div>
          <p>
            Different interests. The same curiosity.
            <br />
            Click a card to explore a little more.
          </p>
        </div>
        <div className="hobby-grid">
          {hobbies.map((h, i) => (
            <button
              key={h.title}
              className={`hobby-card hobby-${h.art}`}
              onClick={() =>
                setDetail({
                  title: h.title,
                  description: h.description,
                  tags: [h.tag],
                })
              }
            >
              <div className="hobby-art">
                {h.art === 'cube' ? (
                  <Cube small />
                ) : (
                  <h.icon size={76} strokeWidth={1} />
                )}
                <span className="art-number">0{i + 1}</span>
                {h.art === 'chess' && <div className="chess-floor" />}
                {h.art === 'code' && (
                  <span className="code-art-text">
                    while (curious) {'{ learn(); }'}
                  </span>
                )}
              </div>
              <div className="hobby-info">
                <div>
                  <h3>{h.title}</h3>
                  <p>{h.subtitle}</p>
                </div>
                <ArrowUpRight size={20} />
              </div>
            </button>
          ))}
        </div>
      </section>
      <section id="projects" className="section-wrap section-pad ruled">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / PUTTING LEARNING INTO PRACTICE</p>
            <h2>
              Things I've <span>Worked On</span>
            </h2>
          </div>
          <p>
            Small projects. Real learning.
            <br />
            Every one is another step forward.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((p, i) => (
            <button
              className="project-card"
              key={p.title}
              onClick={() => setDetail({ ...p, tags: p.tags })}
            >
              <div className={`project-preview preview-${p.preview}`}>
                <div className="preview-window">
                  <div className="window-bar">
                    <i />
                    <i />
                    <i />
                    <span>{p.title.toLowerCase().replaceAll(' ', '-')}</span>
                  </div>
                  {i === 0 ? (
                    <div className="mini-calculator">
                      <div>
                        12 + 8 <strong>20</strong>
                      </div>
                      <div className="calc-keys">
                        {'789÷456×123−0.=+'.split('').map((n, j) => (
                          <span key={j}>{n}</span>
                        ))}
                      </div>
                    </div>
                  ) : i === 1 ? (
                    <div className="mini-bank">
                      <small>THE PROBLEM BANK</small>
                      <b>
                        A space to think.
                        <br />A place to solve.
                      </b>
                      {[
                        'Explore the fundamentals',
                        'Work through a problem',
                        'Keep learning',
                      ].map((t, j) => (
                        <span key={t}>
                          0{j + 1} <em>{t}</em> ↗
                        </span>
                      ))}
                    </div>
                  ) : (
                    <div className="mini-portfolio">
                      <small>BEYOND.</small>
                      <b>
                        Learning.
                        <br />
                        Building.
                        <br />
                        <em>Improving.</em>
                      </b>
                      <span>One step at a time. ↗</span>
                    </div>
                  )}
                </div>
                <span className="preview-caption">
                  {i === 2 ? 'WEBSITE PREVIEW' : 'ILLUSTRATIVE PREVIEW'}
                </span>
              </div>
              <div className="project-info">
                <div className="project-title">
                  <h3>{p.title}</h3>
                  <ArrowUpRight size={20} />
                </div>
                <p>{p.description}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
      <section id="goals" className="section-wrap section-pad ruled">
        <div className="goals-layout">
          <div>
            <p className="eyebrow">05 / THE ROAD AHEAD</p>
            <h2>
              Where I'm
              <br />
              <span>Heading</span>
            </h2>
            <p>
              No shortcuts. Just curiosity,
              <br />
              consistency, and the next step.
            </p>
            <div className="goal-decoration">
              <ArrowUpRight size={90} strokeWidth={0.7} />
            </div>
          </div>
          <ol className="goals-list">
            {[
              'Develop stronger programming and technical skills.',
              'Become a capable Computer Scientist.',
              'Build useful and meaningful projects.',
              'Improve my communication and problem-solving abilities.',
              'Continue exploring and learning beyond the classroom.',
            ].map((goal, i) => (
              <li key={goal}>
                <span>0{i + 1}</span>
                <p>{goal}</p>
                <ArrowUpRight size={17} />
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="philosophy">
        <div className="section-wrap">
          <p className="eyebrow">A PERSONAL PHILOSOPHY</p>
          <span className="quote-mark" aria-hidden="true">
            “
          </span>
          <blockquote>
            Everything has a foundation.
            <br />
            That can be built, maintained,
            <br className="desktop-break" /> grown, rust, and deteriorate.
          </blockquote>
          <div className="quote-bottom">
            <span className="tiny-line" />
            <p>
              I believe that skills and knowledge develop through consistent
              effort. Whether learning a programming language, solving a puzzle,
              or exploring something unfamiliar, improvement starts with
              understanding the fundamentals.
            </p>
          </div>
        </div>
      </section>
      <section id="contact" className="section-wrap section-pad contact-grid">
        <div>
          <p className="eyebrow">06 / START A CONVERSATION</p>
          <h2>
            Let's <span>Connect</span>
            <span className="cyan">.</span>
          </h2>
          <p>
            Have a question, an idea, or a shared interest?
            <br />
            I'd love to hear from you.
          </p>
          <div className="social-placeholders">
            <span>
              <Mail size={18} /> Email <small>Coming soon</small>
            </span>
            <span>
              <GitFork size={18} /> GitHub <small>Coming soon</small>
            </span>
            <span>
              <UserRound size={18} /> Social links <small>Coming soon</small>
            </span>
          </div>
          <p className="contact-note">
            Good conversations are another way to learn.
          </p>
        </div>
        <ContactForm />
      </section>
      <footer className="section-wrap">
        <a href="#home" className="brand">
          BEYOND<span>.</span>
        </a>
        <div>
          <span>BEYOND THE BASICS © 2026</span>
          <p>Learning. Building. Improving.</p>
        </div>
        <a href="#home" className="back-top">
          Back to top <ArrowUpRight size={16} />
        </a>
      </footer>
      <DetailModal detail={detail} close={() => setDetail(null)} />
    </>
  )
}
