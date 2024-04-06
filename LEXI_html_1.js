// Function to send a message
function sendMessage() {
  var messageInput = document.getElementById("message-input");
  var message = messageInput.value.trim();

  if (message !== "") {
    var chatContainer = document.getElementById("chat-container");
    var newMessage = document.createElement("div");
    newMessage.innerText = message;
    newMessage.className = "sent-message";
    chatContainer.appendChild(newMessage);
    
    messageInput.value = "";
    chatContainer.scrollTop = chatContainer.scrollHeight;
   // Check if chat container is full, then scroll to the bottom
   if (chatContainer.scrollHeight > chatContainer.clientHeight) {
    chatContainer.scrollTop = chatContainer.scrollHeight - chatContainer.clientHeight;
  } 
    // Simulate received message after a delay
    setTimeout(function() {
      var receivedMessage = document.createElement("div");
      receivedMessage.innerText = "LEXI : \n" + message;
      receivedMessage.className = "received-message";
      chatContainer.appendChild(receivedMessage);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 100);
  }
}

// Listen for Enter key press on the input field
document.getElementById("message-input").addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault(); // Prevent the default behavior of the Enter key (submitting the form)
    sendMessage(); // Call the sendMessage function
  }
  
});


