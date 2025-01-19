import { useState } from "react";
import AsciiArt from "./components/AsciiArt";

function App() {
  return (
    <div className="bg-[#211d1b] font-mono">
      <div className="flex flex-col justify-start mx-6 pt-6">
        <div className="text-[#DCDCCC]">
          <div>Jay Sagar Terminal [Version 1.0.0]</div>
          <div>(c) Jay Sagar Portfolio. All rights reserved.</div>
        </div>
        <AsciiArt  />
        <div>
          Welcome to my interactive web terminal. For a list of available
          commands, type 'help'.
        </div>
        <div>
          <label htmlFor="cmd">dev@jaysagar:~$</label>
          <input id="cmd" className="bg-[#211d1b] focus:outline-none text-white px-2 caret-red-500" type="text" />
        </div>
      </div>
    </div>
  );
}

export default App;
