import { useEffect, useRef, useState } from "react";
import AsciiArt from "./components/AsciiArt";
import {
  help,
  whoAreYou,
  social,
  invalidCmd,
  skills,
  projects,
  email,
  github,
  linkedIn,
  instagram,
  youtube,
} from "./components/Information";

function App() {
  const [history, setHistory] = useState([]);
  const [banner, setBanner] = useState(true);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const command = e.target.value.trim();
      let output = [];

      switch (command.toLowerCase()) {
        case "help":
          output = help;
          break;

        case "whoareyou":
          output = whoAreYou;
          break;

        case "skills":
          output = skills;
          break;

        case "social":
          output = social;
          break;

        case "projects":
          output = projects;
          break;

        case "banner":
          setBanner(true);
          break;

        case "email":
          setTimeout(() => {
            window.open("mailto:jaysagar871@gmail.com", "_blank");
          }, 1000);
          output = email;
          break;
        
        case "linkedin":
          setTimeout(() => {
            window.open("https://www.linkedin.com/in/jaysagar", "_blank");
          }, 1000);
          output = linkedIn;
          break;

        case "instagram":
          setTimeout(() => {
            window.open("https://www.instagram.com/p1ayjay", "_blank");
          }, 1000);
          output = instagram;
          break;

        case "youtube":
          setTimeout(() => {
            window.open("https://www.youtube.com/@p1ayj4y", "_blank");
          }, 1000);
          output = youtube;
          break;
          
        case "github":
          setTimeout(() => {
            window.open("https://www.github.com/jay-sagar", "_blank");
          }, 1000);
          output = github;
          break;

        case "clear":
          setHistory([]);
          e.target.value = "";
          setBanner(false);
          return;

        default:
          output = invalidCmd;
          break;
      }

      setHistory((prevValue) => [
        ...prevValue,
        { command: command, output: output },
      ]);
      e.target.value = "";
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
    inputRef.current?.focus();
  }, [history]);

  return (
    <div
      className="bg-[#211d1b] font-mono h-screen overflow-y-auto"
      ref={containerRef}
    >
      <div className={banner ? "mx-6 pt-6" : "mx-6"}>
        {banner ? (
          <div>
            <div className="text-[#DCDCCC]">
              <div>Jay Sagar Terminal [Version 1.2.1]</div>
              <div>(c) Jay Sagar Portfolio. All rights reserved.</div>
            </div>
            <AsciiArt />
            <div className="text-green-500 mt-4">
              <div>Welcome to the terminal interface.</div>
              <div>
                Use <span className="text-white">'help'</span> to see the list
                of available commands.
              </div>
            </div>
          </div>
        ) : null}

        <div className="mt-4">
          {history.map((entry, index) => (
            <div key={index}>
              <div className="text-lime-500 inline-block">dev@jaysagar:~$</div>{" "}
              <div className="inline-block text-white">{entry.command}</div>
              {entry.output.map((data, key) => (
                <div key={key} className="text-green-500 mx-4 whitespace-pre">
                  {data}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Input line */}
        <div className="mt-2">
          <label htmlFor="cmd" className="text-lime-500">
            dev@jaysagar:~$
          </label>
          <input
            ref={inputRef}
            type="text"
            id="cmd"
            className="bg-[#211d1b] focus:outline-none text-white px-2"
            onKeyDown={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
