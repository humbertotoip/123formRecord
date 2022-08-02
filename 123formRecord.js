console.clear()
let grav = window.parent.postMessage('get-grav','*');
console.log(grav);
window.addEventListener("message", receiveMessage, false);
function receiveMessage(event){
	console.log(event);
   	let gravacao = event['data'];
   	console.log(gravacao);
	document.getElementById(gravacao['field']).value = gravacao['grav'];
	console.log(document.getElementById(gravacao['field']).value);
}
