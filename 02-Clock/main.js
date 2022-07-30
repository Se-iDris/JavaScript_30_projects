
const hourHand = document.querySelector('[data-hour]')
const minHand = document.querySelector('[data-min]')
const secHand = document.querySelector('[data-sec]')


function setClock() {
	const getTime = new Date();

	const getSec = getTime.getSeconds() / 60;
	
	const getMin = (getSec + getTime.getMinutes()) / 60;

	const getHour = (getMin + getTime.getHours()) / 12;

	setRotation(hourHand, getHour)
	setRotation(minHand, getMin)
	setRotation(secHand, getSec)
}

function setRotation(element, rotationRatio) {
	element.style.setProperty('--rotation', rotationRatio * 360)
}

setInterval(setClock, 1000) 
setClock()