import * as EventHandler from "./js/eventhandler.js";

window.addEventListener("load", function initMixer() {
  // Whenever someone clicks on "Hello World", we'll send an event
  // to the game client on the control ID "hello-world"

  mixer.socket.on("event", EventHandler.handleEvents);
  mixer.isLoaded();
  setTimeout(() => {
    $("#game").blockrain({
      theme: {
        background: "transparent",
        primary: null,
        secondary: null,
        stroke: "#000000",
        strokeWidth: 3,
        innerStroke: "#333333",
        blocks: {
          line: "#fa1e1e",
          square: "#f1fa1e",
          arrow: "#d838cb",
          rightHook: "#f5821f",
          leftHook: "#42c6f0",
          rightZag: "#4bd838",
          leftZag: "#fa1e1e"
        }
      },
      playText: "Let's play BlockRain! USE WASD!",
      autoBlockWidth: true,
      autoBlockSize: 30,
      showFieldOnStart: false,
      onGameOver: function(score) {
        console.log(score);
        mixer.socket.call(
          "giveInput",
          {
            controlID: "points",
            event: "mousedown",
            score: score
          },
          true
        );
      }
    });
    // $("#game").blockrain("theme", "vim");
    // $("#game").blockrain("theme", {
    //   background: "transparent",

    //   primary: null,
    //   secondary: null,
    //   stroke: null,
    //   blocks: {
    //     line: "#fa1e1e",
    //     square: "#f1fa1e",
    //     arrow: "#d838cb",
    //     rightHook: "#f5821f",
    //     leftHook: "#42c6f0",
    //     rightZag: "#4bd838",
    //     leftZag: "#fa1e1e"
    //   }
    // });
    console.log("uh");
  }, 2000);
});

function setleaderboard(leaders) {
  $("#leaderboard").hide();
  $("#lbtbody").empty();
  leaders.sort(function(a, b) {
    return b.points - a.points;
  });
  leaders.forEach(leader => {
    let html =
      "<tr><td>" + leader.username + "</td><td>" + leader.points + "</td></tr>";
    $("#lbtbody").append(html);
  });
  $("#leaderboard").show();
}
