import "./styles/Span.css";
import {
  FaReact,
  FaJsSquare,
  FaGitAlt,
  FaCss3Alt,
  FaHtml5,
  FaDocker,
  FaWordpress,
} from "react-icons/fa";
import {
  DiPython,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiBootstrap,
} from "react-icons/di";
import {
  SiTypescript,
  SiPostgresql,
  SiAmazonaws,
  SiGraphql,
  SiRedux,
  SiFirebase,
} from "react-icons/si";

const Span = () => {
  return (
    <div className="span-container">
      <h4>Frontend</h4>
      <div className="icon-section">
        <FaJsSquare color="#F0DB4F" size={50} />
        <FaReact color="#61DAFB" size={50} />
        <SiTypescript color="#3178C6" size={50} />
        <FaCss3Alt color="#264de4" size={50} />
        <FaHtml5 color="#e34c26" size={50} />
        <DiBootstrap color="#7952B3" size={50} />
        <SiRedux color="#764ABC" size={50} />
      </div>

      <h4>Backend</h4>
      <div className="icon-section">
        <DiNodejs color="#68A063" size={50} />
        <DiPython color="#3776AB" size={50} />
      </div>

      <h4>Databases</h4>
      <div className="icon-section">
        <DiMongodb color="#4DB33D" size={50} />
        <DiMysql color="#4479A1" size={50} />
        <SiPostgresql color="#336791" size={50} />
      </div>

      <h4>DevOps</h4>
      <div className="icon-section">
        <FaGitAlt color="#F34F29" size={50} />
        <FaDocker color="#0db7ed" size={50} />
        <SiAmazonaws color="#FF9900" size={50} />
      </div>

      <h4>Other</h4>
      <div className="icon-section">
        <SiGraphql color="#E10098" size={50} />
        <FaWordpress color="#21759B" size={50} />
        <SiFirebase color="#FFCA28" size={50} />
      </div>
    </div>
  );
};

export default Span;
