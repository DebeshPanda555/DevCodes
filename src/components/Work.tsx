import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  // Define project details
  const projects = [
    {
      id: 1,
      name: "PayFlow",
      category: "Full-Stack Development",
      tools:
        "React.js, Node.js, Express.js, PostgreSQL, WebSockets, JWT, Tailwind CSS",
      image: "/images/Payflow.png",
      github: "https://github.com/yourusername/payflow",
      live: "https://payflow.example.com",
    },
    {
      id: 2,
      name: "DoodleVerse",
      category: "Real-Time Systems",
      tools:
        "Go, WebSockets, React.js, TypeScript, Tailwind CSS, Concurrent Systems",
      image: "/images/Doodleverse.png",
      github: "https://github.com/yourusername/doodleverse",
      live: "https://doodleverse.example.com",
    },
    {
      id: 3,
      name: "Draft.io",
      category: "AI Resume Builder",
      tools:
        "React.js, JavaScript, Python, FastAPI, NLP, spaCy, NLTK, Streamlit, Docker, GitHub Actions",
      image: "/images/Draft.io.png",
      github: "https://github.com/yourusername/draftio",
      live: "https://draftio.example.com",
    },
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{project.id}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <div className="work-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-link"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-link"
                  >
                    Live Website
                  </a>
                </div>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;