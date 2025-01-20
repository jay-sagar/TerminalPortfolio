import { useEffect, useState } from "react";
import AsciiArt from "./components/AsciiArt";

function App() {
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState([]);

  const help = [
    "about       Learn about me",
    "skills      Check out my technical skills",
    "projects    View my projects",
    "contact     Get my contact details",
    "clear       Clear my terminal",
  ];

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log(e.target.value);
      setInput(e.target.value); 
    }
  };

  useEffect(() => {
    if (input == "help") {
      setDisplay(help);
    } else if (input === "clear") {
      setDisplay([]);
    }
  }, [input]);

  return (
    <div className="bg-[#211d1b] font-mono min-h-screen">
      <div className="flex flex-col justify-start mx-6 pt-6">
        <div className="text-[#DCDCCC]">
          <div>Jay Sagar Terminal [Version 1.0.0]</div>
          <div>(c) Jay Sagar Portfolio. All rights reserved.</div>
        </div>
        <AsciiArt />
        <div className="text-green-500">
          <div>Welcome to the terminal interface.</div>
          <div>
            Use <span className="text-white">'help'</span> to see the list of
            available commands.
          </div>
        </div>
        <div>
          <label htmlFor="cmd" className="text-lime-500">
            dev@jaysagar:~$
          </label>
          <input
            onKeyDown={(e) => handleSubmit(e)}
            id="cmd"
            className="bg-[#211d1b] focus:outline-none text-white px-2"
            type="text"
            autoFocus
          />
          <div>
            <ul className="mx-5 my-4 text-white">
              {display.map((value, index) => {
                return <li key={index} className="whitespace-pre">{value}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
