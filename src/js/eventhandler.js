// function addText(text, username, usercolor, avatarURL, timestamp) {
function handleEvents(event) {
  switch (event.type) {
    case "updateleaderboard":
      setleaderboard(event.leaders);
      break;
    case "startingoptions":
      setleaderboard(event.leaders);
      break;
    default:
      console.log("Unknown Event Type: " + event.type);
      console.log(event);
  }
}

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

export { handleEvents };
