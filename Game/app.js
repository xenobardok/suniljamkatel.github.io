var option = document.querySelectorAll('.option');
var question = document.getElementById('question');
var reload = document.getElementById('reset');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var percent = document.querySelector('#percent');
percent.textContent = 0;
var answer;
var currentLevel = 0;
var totalLevels = 7;
init();
function init(){
	next();
	start();
}

function start(){
	for(var i=0; i<option.length; i++){
		option[i].addEventListener("click",function(){
	    if(this.textContent.trim() == answer){
				setTimeout(function(){
					next();
					percent.textContent = Math.ceil(currentLevel/totalLevels*100);
				}, 1000);
				this.classList.add('correct');
	    } else {
				setTimeout(function(){
					question.textContent = failed();
					removeAll();
				}, 1000);
				this.classList.add('wrong');
	    }
	  })
	}
}

function levelOne(){
	question.innerHTML = `
	<p><span>Suwannee, Florida</span></p>
	<p>Josh Beckham, a city inspector, is on a regular patrol. He cruises around the city making sure everything is okay and everybody is having a peaceful time.</p>
	<p>Suddenly, he hears a sound of a woman screaming for help. </p>
	<p>Following the sound, he comes in front of an abandoned warehouse.</p>
	<p>After careful investigation, he finds four entrances to the building.</p>
	`;
	one.textContent = 'East';
	two.textContent = 'North';
	three.textContent = 'South';
	four.textContent = 'West';
	answer = two.textContent;
}

function levelTwo(){
	removeAll();
	twoBlocks();
  question.innerHTML = `<p>
	Now that he's inside, he finds himself in the middle of a dark corridor. He can hear the sound but could not
	fathom where it's from. He has two options:
	</p>`;
	one.textContent = 'Left';
	two.textContent = 'Right';
	answer = one.textContent;
}

function levelThree(){
	removeAll();
	allBlocks();
	question.innerHTML = `
	<p>He moves forward! Slowly!! One step at a time!!!</p>
	<p>As he increases his steps, the voice of the woman intensifies.</p>
	<p>Every now and then he would hear mysterious sounds coming from behind the wall.
	With true valor, he moves forward, dedicated to saving the life of this young woman.</p>
	<p>He now stumbles in front of a big hall with flashing lights and wet floors.</p>
	<p>He now spots four doors.</p>
	`;
	one.textContent = 'Red Door';
	two.textContent = 'Blue Door';
	three.textContent = 'Black Door';
	four.textContent = 'Brown Door';
	answer = four.textContent;
}

function levelFour(){
	removeAll();
	allBlocks();
	question.innerHTML = `
	<p>The inspector opens the door to find a woman with a long hair, dressed in a white attire.
	The lady looks at him with great excitement and begins to walk towards him.</p>
	<p>As she moves forward, the inspector could smell a strange odor. He smelled like rotten eggs.</p>
	<p>He thinks for a while and </p>
	`;
	one.textContent = 'holds her hand and exits out of the building.';
	two.textContent = 'investigates who she is and where she\'s from.';
	three.textContent = 'turns around and run.';
	four.textContent = 'lets her decide what to do next.';
	answer = three.textContent;
}

function levelFive(){
	removeAll();
	twoBlocks();
	question.innerHTML = `
	<p>The officer knew that the lady was a spiritual object. He later realised that locals
	always told stories about a lady whos trapped in the old warehouse.</p>
	<p>The officer begins to run like he had never in his entire life.</p>
	<p>He finds the door from where he entered the house but, to his horror, the door was locked</p>
	<p>He spots two staircases. One going upstairs and the other down. He decides to take</p>
	`;
	one.textContent = 'One going upstairs.';
	two.textContent = 'One going downstairs.';
	answer = one.textContent;
}

function levelSix(){
	removeAll();
	twoBlocks();
	question.innerHTML = `
	<p>He ran so fast that he didn't realise that he was now at the top of the building.</p>
	<p>The haunted lady is behind him. He only has two choices now.</p>
	`;
	one.textContent = 'Jump from the building.';
	two.textContent = 'Go back down the stairs.';
	answer = one.textContent;
}

function complete(){
	removeAll();
	question.innerHTML = `
	<p>One amazing thing about living in Suwannee is that you get to witness so many ponds, rivers, and natural beauty.</p>
	<p>Luckily for us, our hero lands on a small pond and since the haunted lady never left the
	warehouse, the officer's life was spared. </p>
	<h3 style="text-align:center">Well done!, you completed the quest!<h3>
	`;

}
function next(){
	currentLevel++;

	switch(currentLevel){
		case 1:
			levelOne();
			break;
		case 2:
			levelTwo();
			break;
		case 3:
			levelThree();
			break;
		case 4:
			levelFour();
			break;
		case 5:
			levelFive();
			break;
		case 6:
			levelSix();
			break;
		case 7:
			complete();
			break;
	}
}

reload.addEventListener('click', function(){
  window.location.reload();
})

function removeAll(){
	one.classList.remove('correct', 'wrong');
	two.classList.remove('correct', 'wrong');
	three.classList.remove('correct', 'wrong');
	four.classList.remove('correct', 'wrong');
	for(var i=0; i<option.length; i++){
    option[i].style.display = 'none';
  }
}

function allBlocks(){
	for(var i=0; i<option.length; i++){
    option[i].style.display = 'block';
  }
}
function twoBlocks(){
	for(var i=0; i<2; i++){
    option[i].style.display = 'block';
  }
}

function failed(){
	if(currentLevel===4){
		return "The woman turned out to be a ghost. She killed the inspector!!!"
	} else if (currentLevel === 5) {
		return "The basement had a ghost party. The inspector was their chicken!!"
	}	else {
		var death = [
			"he fell down a deeeeeep hole!",
			"this is a deadend!",
			"he was lost!",
			"he got killed!"
		];
		return "Oh no! "+ death[Math.floor((Math.random()*3))];
	}
}
