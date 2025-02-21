import {
  FaCaretRight,
  FaCaretDown,
  FaCircle,
  FaCheckCircle,
  FaPlayCircle,
  FaExpand,
  FaVolumeUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const [openSections, setOpenSections] = useState({
    welcome: false,
    introduction: false,
    understanding: false,
    figma: false,
    designing: false,
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [progress, setProgress] = useState(50);

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const handleProgressChange = (e) => {
    setProgress(e.target.value);
  };
  return (
    <>
      <div className="container my-4">
        <nav className="text-muted mb-4">
          <a href="#" className="text-decoration-none text-muted">
            UI/UX Design for beginners
          </a>{" "}
          &gt;
          <a href="#" className="text-decoration-none text-muted">
            Introduction to UI/UX Design
          </a>
        </nav>
        <div className="row">
          <aside className="col-md-3 mb-4">
            <h1 className="h4 text-primary mb-4">UI/UX Design for Beginners</h1>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-2">
                <FaCaretRight onClick={() => toggleSection("welcome")} />
                <span className="ms-2">Welcome on board</span>
              </li>
              {openSections.welcome && (
                <>
                  <li className="d-flex align-items-center mb-2">
                    <FaCheckCircle className="text-primary" />
                    <span className="ms-2">A message from the Instructor</span>
                  </li>
                </>
              )}
              <li className="d-flex align-items-center mb-2">
                <FaCaretRight onClick={() => toggleSection("introduction")} />
                <span className="ms-2">Introduction to UI/UX Design</span>
              </li>
              {openSections.introduction && (
                <>
                  <li className="d-flex align-items-center mb-2">
                    <FaCheckCircle className="text-primary" />
                    <span className="ms-2">What is UI/UX Design?</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <FaCheckCircle className="text-primary" />
                    <span className="ms-2">The Basics of UI/UX Design</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <FaCircle />
                    <span className="ms-2">What is UX</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <FaCircle />
                    <span className="ms-2">What is UI</span>
                  </li>
                </>
              )}
              <li className="d-flex align-items-center mb-2">
                <FaCaretRight onClick={() => toggleSection("understanding")} />
                <span className="ms-2">Understanding UI/UX</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaCaretRight onClick={() => toggleSection("figma")} />
                <span className="ms-2">Introduction to Figma</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <FaCaretRight onClick={() => toggleSection("designing")} />
                <span className="ms-2">Designing your first Mobile...</span>
              </li>
            </ul>
          </aside>
          <main className="col-md-9">
            <div className="border rounded p-4 mb-4">
              <div className="d-flex align-items-center justify-content-between">
                <FaPlayCircle
                  className={`fs-2 ${isPlaying ? "text-primary" : ""}`}
                  onClick={togglePlay}
                />
                <div className="flex-grow-1 mx-4">
                  <input
                    type="range"
                    className="form-range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleProgressChange}
                  />
                </div>
                <FaExpand className="fs-4" />
                <FaVolumeUp className="fs-4 ms-4" />
                <input
                  type="range"
                  className="form-range ms-2"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={handleVolumeChange}
                />
              </div>
            </div>
            <p className="text-muted mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              vestibulum erat id lobortis accumsan. In pretium ligula quis
              suscipit blandit. Morbi condimentum urna mi, id consequat ligula
              hendrerit eget.
            </p>
            <p className="text-muted">
              Aliquam ornare lacus vitae consectetur. Curabitur porttitor auctor
              diam, at suscipit augue placerat sit amet. Sed suscipit purus ut
              sollicitudin rutrum. In iaculis tincidunt orci et blandit.
              Pellentesque quis dignissim turpis. Duis imperdiet ornare velit
              semper consequat. Duis enim enim, pellentesque at rhoncus ac,
              feugiat at elit. Etiam ut laoreet tellus.
            </p>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
