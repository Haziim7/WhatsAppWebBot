//function to type a message in the message area and clicks on send button
function sendMessage(message) {
	//add message
	var messagePlace = document.getElementsByClassName("_2S1VP")[0];
	messagePlace.innerHTML = message;

	//trigger focus and message change
	event = document.createEvent("UIEvents");
	event.initUIEvent("input", true, true, window, 1);
	messagePlace.dispatchEvent(event);

	//click on send
	var sendButton = document.getElementsByClassName("_35EW6")[0];
	sendButton.click();
}

//function to print last message in console and returns true if it's sent from the other person
function getLastMessage() {
	//get get HTML div containing messages
	var lastMessageElement = document.getElementsByClassName("_9tCEa")[0].lastChild.childNodes;
	//get the message direction by checking last message div 
	var messageDirection = lastMessageElement[1].getAttribute("class").split(" ")[2];

	var message = lastMessageElement[1].childNodes;
	message = message[2].firstChild.firstChild.firstChild.innerHTML;

	if(messageDirection == "message-out") {
		console.log("You");
		console.log(message);
		return false;
	} else {
		console.log("Not You");
		console.log(message);
		return true;
	}
}

