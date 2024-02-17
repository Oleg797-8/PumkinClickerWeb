var clicks = 0;

function count_clicks_user() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};