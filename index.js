// declare point variables
let homePoints = 0;
let guestPoints = 0;
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
// get btn elements
btnH1 = document.getElementById("btn-h1");
btnH2 = document.getElementById("btn-h2");
btnH3 = document.getElementById("btn-h3");
btnG1 = document.getElementById("btn-g1");
btnG2 = document.getElementById("btn-g2");
btnG3 = document.getElementById("btn-g3");
newGameEl = document.getElementById("new-game");
// add btn event listeners
btnH1.addEventListener("click", function () {
	addHome(1);
});
btnH2.addEventListener("click", function () {
	addHome(2);
});
btnH3.addEventListener("click", function () {
	addHome(3);
});
btnG1.addEventListener("click", function () {
	addGuest(1);
});
btnG2.addEventListener("click", function () {
	addGuest(2);
});
btnG3.addEventListener("click", function () {
	addGuest(3);
});
newGameEl.addEventListener("click", function () {
	newGame();
});
// add points to homePoints
function addHome(points) {
	homePoints += points;
	homeScore.textContent = homePoints;
	leadingTeam();
}
// add points to guestScore
function addGuest(points) {
	guestPoints += points;
	guestScore.textContent = guestPoints;
	leadingTeam();
}
// reset both scores to 0 when newGame runs
function newGame() {
	homeScore.textContent = 0;
	homePoints = 0;
	guestScore.textContent = 0;
	guestPoints = 0;
}
//attempting to add outline to winning
function leadingTeam() {
	if (homePoints > guestPoints) {
		document.getElementById("outline-home").className = ".outline";
	} else if (homePoints < guestPoints) {
		document.getElementById("outline-guest").className = ".outline";
	}
}
