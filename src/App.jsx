import { useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";
import {
  ArrowDownRight,
  ArrowRight,
  Menu,
  X,
  Compass,
  BookOpen,
  Trees,
  Trophy,
  Sparkles,
  HeartPulse,
  Users,
} from "lucide-react";
import "./index.css";

const photos = {
  hero: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2200&q=90",
  campus: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1200&q=85",
  learning: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
  sports: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=85",
  nature: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1000&q=85",
};

const reveal = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

function Reveal({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Our Story", "#story"],
    ["Learning", "#learning"],
    ["Campus Life", "#campus"],
    ["Admissions", "#admissions"],
  ];

  return (
    <header className="header">
      <a className="brand" href="#home" aria-label="Tulas home">
        <span className="brand-mark">T</span>
        <span className="brand-name">
          TULAS <small>INTERNATIONAL SCHOOL</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? "nav nav-open" : "nav"}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a
          className="nav-cta"
          href="#admissions"
          onClick={() => setOpen(false)}
        >
          Enquire now <ArrowRight size={15} />
        </a>
      </nav>
    </header>
  );
}

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${visible ? "cursor-visible" : ""}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
      aria-hidden="true"
    />
  );
}

function App() {
  const { scrollYProgress } = useScroll();

  const highlights = [
    { icon: Trees, value: "22 acres", label: "Pollution-free campus" },
    { icon: Trophy, value: "16+", label: "Sports and activities" },
    { icon: HeartPulse, value: "24/7", label: "Medical assistance" },
    { icon: Users, value: "6:1", label: "Student-teacher ratio" },
  ];

  const programs = [
    {
      number: "01",
      title: "Academic excellence",
      text: "Build a strong foundation through curiosity, critical thinking and meaningful learning.",
      icon: BookOpen,
    },
    {
      number: "02",
      title: "Sport & movement",
      text: "Develop teamwork, confidence and discipline through an active campus life.",
      icon: Trophy,
    },
    {
      number: "03",
      title: "Character & creativity",
      text: "Discover individual strengths through arts, exploration and shared experiences.",
      icon: Sparkles,
    },
  ];

  return (
    <>
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />

      <CustomCursor />
      <Header />

      <main>
        <section className="hero" id="home">
          <div
            className="hero-image"
            style={{ backgroundImage: `url("${photos.hero}")` }}
          />
          <div className="hero-overlay" />

          <div className="hero-content">
            <motion.p
              className="eyebrow light"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              DEHRADUN · INDIA · EST. 2012
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25 }}
            >
              A world of
              <br />
              <em>possibility.</em>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              More than a school. A place to discover who you are
              and everything you can become.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <a className="button button-gold" href="#admissions">
                Discover Tulas <ArrowRight size={17} />
              </a>
              <a className="text-link light-link" href="#story">
                Explore our story <ArrowDownRight size={17} />
              </a>
            </motion.div>
          </div>

          <div className="hero-bottom">
            <span>LEARN WITH PURPOSE. LIVE WITH POSSIBILITY.</span>
            <a href="#story" aria-label="Scroll to discover">
              <ArrowDownRight size={22} />
            </a>
            <span>30°22' N · DEHRADUN</span>
          </div>
        </section>

        <section className="intro section-pad" id="story">
          <Reveal>
            <p className="eyebrow">THE TULAS DIFFERENCE</p>
            <h2 className="display-heading">
              Space to grow.
              <br />
              <em>Freedom to flourish.</em>
            </h2>
          </Reveal>

          <Reveal className="intro-copy">
            <p>
              At Tulas International School, education goes beyond
              the classroom. We bring academics, sport, creativity and
              community together to help students discover their strengths.
            </p>
            <a
              className="text-link dark-link"
              href="https://tis.edu.in/"
              target="_blank"
              rel="noreferrer"
            >
              Discover the school <ArrowRight size={17} />
            </a>
          </Reveal>
        </section>

        <section className="stats section-pad" aria-label="School highlights">
          {highlights.map(({ icon: Icon, value, label }, index) => (
            <Reveal key={label} className="stat">
              <Icon size={23} strokeWidth={1.4} />
              <p className="stat-number">{value}</p>
              <p className="stat-label">{label}</p>
            </Reveal>
          ))}
        </section>

        <section className="story-grid" id="campus">
          <Reveal className="story-image-wrap">
            <img src={photos.campus} alt="School campus surrounded by greenery" />
            <span className="image-caption">01 / A PLACE TO BELONG</span>
          </Reveal>

          <Reveal className="story-text">
            <p className="eyebrow">ROOM TO BECOME</p>
            <h2 className="display-heading">
              Learning that
              <br />
              reaches <em>beyond.</em>
            </h2>
            <p>
              A supportive environment can change the way a student sees
              the world. Our aim is to create space for independent thought,
              lifelong friendships and the confidence to try something new.
            </p>
            <a className="text-link dark-link" href="#learning">
              Explore our approach <ArrowRight size={17} />
            </a>
          </Reveal>
        </section>

        <section className="learning section-pad" id="learning">
          <Reveal className="section-heading">
            <p className="eyebrow light">MORE THAN A CLASSROOM</p>
            <h2 className="display-heading light-heading">
              Every talent
              <br />
              deserves <em>a stage.</em>
            </h2>
          </Reveal>

          <div className="program-grid">
            {programs.map(({ number, title, text, icon: Icon }) => (
              <Reveal key={number} className="program-card">
                <div className="program-top">
                  <span>{number}</span>
                  <Icon size={24} strokeWidth={1.3} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#admissions" aria-label={`Enquire about ${title}`}>
                  <ArrowRight size={19} />
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="experience section-pad">
          <Reveal className="experience-copy">
            <p className="eyebrow">LIFE IN FULL COLOUR</p>
            <h2 className="display-heading">
              Find your
              <br />
              <em>own rhythm.</em>
            </h2>
            <p>
              From the playing field to the arts and the outdoors,
              school life is an opportunity to explore interests, build
              resilience and create lasting memories.
            </p>
            <a
              className="text-link dark-link"
              href="https://tis.edu.in/"
              target="_blank"
              rel="noreferrer"
            >
              Explore campus life <ArrowRight size={17} />
            </a>
          </Reveal>

          <Reveal className="experience-image">
            <img src={photos.sports} alt="Athletes running on a track" />
            <div className="image-badge">
              <Compass size={20} />
              <span>Discover. Participate. Grow.</span>
            </div>
          </Reveal>
        </section>

        <section className="nature-banner">
          <img src={photos.nature} alt="Sunlight falling across a natural landscape" />
          <div className="nature-overlay" />
          <Reveal className="nature-content">
            <p className="eyebrow light">A DIFFERENT KIND OF CLASSROOM</p>
            <h2 className="display-heading light-heading">
              Rooted in nature.
              <br />
              <em>Ready for the world.</em>
            </h2>
            <p>
              Discover an environment where learning and personal growth
              go hand in hand.
            </p>
          </Reveal>
        </section>

        <section className="admissions section-pad" id="admissions">
          <Reveal>
            <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
            <h2 className="display-heading">
              Great journeys
              <br />
              begin with <em>one step.</em>
            </h2>
            <p className="admissions-copy">
              Connect with the Tulas team to learn more about the school,
              campus life and admissions.
            </p>
            <a
              className="button button-dark"
              href="https://tis.edu.in/"
              target="_blank"
              rel="noreferrer"
            >
              Visit the official website <ArrowRight size={17} />
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">T</span>
          <span className="brand-name">
            TULAS <small>INTERNATIONAL SCHOOL</small>
          </span>
        </a>
        <p>Dhoolkot, Selaqui, Dehradun, Uttarakhand</p>
        <a href="https://tis.edu.in/">Official school website ↗</a>
        <span className="footer-note">
          Independent homepage redesign · For assessment purposes
        </span>
      </footer>
    </>
  );
}

export default App;
