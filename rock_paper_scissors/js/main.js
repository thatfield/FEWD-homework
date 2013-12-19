var humanScore = 0, computerScore = 0;

document.getElementById("rock").onclick=fightWithRock;

function fightWithRock() {
	var randoWepoNum=botsWeapon();
	if (randoWepoNum=="paper"){
		computerScore=computerScore+1;
		document.getElementById("computerScore").textContent=computerScore;
		document.getElementById('status').textContent="You played rock. The bot played paper. You lose. :(";
	}
	else if (randoWepoNum=="scissors"){
		humanScore=humanScore+1;
		document.getElementById("humanScore").textContent=humanScore;
		
		document.getElementById('status').textContent="You played rock. The bot played scissors. You win! :)";


	}

	else {

		document.getElementById('status').textContent="You played rock. The bot played rock. You tied. :|";
		

	}
}

document.getElementById("paper").onclick=fightWithPaper;

function fightWithPaper() {
	var randoWepoNum=botsWeapon();
	if (randoWepoNum=="rock"){
		humanScore=humanScore+1;
		document.getElementById("humanScore").textContent=humanScore;
		document.getElementById('status').textContent="You played paper. The bot played rock. You win! :)";
	}
	else if (randoWepoNum=="scissors"){
		computerScore=computerScore+1;
		document.getElementById("computerScore").textContent=computerScore;
		document.getElementById('status').textContent="You played paper. The bot played scissors. You lose! :(";
	}

	else {
		document.getElementById('status').textContent="You played paper. The bot played paper. You tied. :|";
	}
}

document.getElementById("scissors").onclick=fightWithScissors;

	function fightWithScissors() {
		var randoWepoNum=botsWeapon();
		if (randoWepoNum=="rock"){
			computerScore=computerScore+1;
			document.getElementById("computerScore").textContent=computerScore;
			document.getElementById('status').textContent="You played scissors. The bot played rock. You lose! :(";
		}
		else if (randoWepoNum=="paper"){
			humanScore=humanScore+1;
			document.getElementById("humanScore").textContent=humanScore;
			document.getElementById('status').textContent="You played scissors. The bot played paper. You win! :)";
		}
		else
			document.getElementById('status').textContent="You played scissors. The bot played scissors. You tied. :|";
	}

function botsWeapon(){
	var randoWepoNum=Math.random();
	if(randoWepoNum<.33){
		randoWepoNum="rock";
	}
	else if(randoWepoNum<.67){
		randoWepoNum="paper";
	}
	else{
		randoWepoNum="scissors";

	}
	return randoWepoNum;
}
