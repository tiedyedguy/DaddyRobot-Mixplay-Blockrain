import * as EventHandler from "./js/eventhandler.js";

window.addEventListener("load", function initMixer() {
  // Whenever someone clicks on "Hello World", we'll send an event
  // to the game client on the control ID "hello-world"

  mixer.socket.on("event", EventHandler.handleEvents);
  mixer.isLoaded();
  $("#game").blockrain({ autoBlockWidth: true, autoBlockSize: 25 });
  $("#game").blockrain("theme", "vim");
  $("#game").blockrain("theme", {
    background: "transparent",

    primary: null,
    secondary: null,
    stroke: null,
    blocks: {
      line: "#fa1e1e",
      square: "#f1fa1e",
      arrow: "#d838cb",
      rightHook: "#f5821f",
      leftHook: "#42c6f0",
      rightZag: "#4bd838",
      leftZag: "#fa1e1e"
    }
  });
  console.log("uh");
});
