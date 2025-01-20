import { useEffect, useRef, useState } from "react";
import AsciiArt from './components/AsciiArt';

function App() {
  const [history, setHistory] = useState([]);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  const help = [
    "about       Learn about me",
    "skills      Check out my technical skills",
    "projects    View my projects",
    "contact     Get my contact details",
    "clear       Clear my terminal",
  ];

  const whoAreYou = [
    "Hey 👋, My name is Jay Sagar who loves building cool stuff with the MERN stack and Spring Boot.",
    "My go-to languages are Java, JavaScript, TypeScript, C++, and SQL.",
    "I focus on creating scalable applications, have a solid understanding of low-level design (LLD), and am pretty good at data structures and algorithms.",
    "When I'm not coding, I enjoy studying Japanese as a hobby and loves to play competitive games like Counter-Strike, Apex Legends and Tekken. 🎮",
  ];

  const social = [];

  const invalidCmd = [
    "Invalid Command! Type 'help' to see the available commands.",
  ];

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

        case "clear":
          setHistory([]);
          e.target.value = "";
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
    <div className="bg-[#211d1b] font-mono min-h-screen">
      <div 
        ref={containerRef}
        className="mx-6 pt-6 h-screen overflow-y-auto"
      >
        <div className="text-[#DCDCCC]">
          <div>Jay Sagar Terminal [Version 1.2.1]</div>
          <div>(c) Jay Sagar Portfolio. All rights reserved.</div>
        </div>
        <AsciiArt />
        <div className="text-green-500 mt-4">
          <div>Welcome to the terminal interface.</div>
          <div>
            Use <span className="text-white">'help'</span> to see the list of
            available commands.
          </div>
        </div>

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