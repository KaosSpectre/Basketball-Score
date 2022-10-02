let homePoints = 0;
let guestPoints = 0;
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score")
// add points to homePoints
function add1Home() {
    homePoints += 1;
    homeScore.textContent = homePoints
}
function add2Home() {
    homePoints += 2;
    homeScore.textContent = homePoints
}
function add3Home() {
    homePoints += 3;
    homeScore.textContent = homePoints
}
// add points to guestScore
function add1Guest() {
    guestPoints += 1;
    guestScore.textContent = guestPoints;
}
function add2Guest() {
    guestPoints += 2;
    guestScore.textContent = guestPoints;
}
function add3Guest() {
    guestPoints += 3;
    guestScore.textContent = guestPoints;
}
// reset both scores to 0 when newGame runs
function newGame() {
    homeScore.textContent = 0;
    homePoints = 0;
    guestScore.textContent = 0;
    guestPoints = 0;
}

