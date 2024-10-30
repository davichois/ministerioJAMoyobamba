"use client";

import { sendGTMEvent } from "@next/third-parties/google";

function DonateButtom() {
  return (
    <a
      onClick={() => sendGTMEvent({ event: "buttonClicked", value: "donar_donar" })}
      href="https://www.buymeacoffee.com/ministerioo"
    >
      <img src="https://img.buymeacoffee.com/button-api/?text=Donar&emoji=🤝&slug=ministerioo&button_colour=5F7FFF&font_colour=ffffff&font_family=Inter&outline_colour=000000&coffee_colour=FFDD00" />
    </a>
  );
}

export default DonateButtom;
