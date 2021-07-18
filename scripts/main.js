const birdElement = document.querySelector("#bird")

const pipes = document.querySelectorAll('#pipes div[id^="pipe-"]')

pipes.forEach( (pipe) => {
	let id = pipe.getAttribute('id')
	const numID = Number(id.split('-')[1])

	pipe.style.animationDelay = `${1.75 * numID}s`
	pipe.style.animationPlayState = "running"


})