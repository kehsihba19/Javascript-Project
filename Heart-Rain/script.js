function createHeart(){
	const heart=document.createElement('div');
	heart.classList.add("heart");
	heart.style.left=Math.random()*100+"vw";
	heart.style.animationDuration=Math.random()*2+3+'s';
	heart.innerText="❤";
	document.body.appendChild(heart);

	setTimeOut(()=>{
		heart.remove();
	},400);
}

setInterval(createHeart,300);