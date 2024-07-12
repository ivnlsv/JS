const chatButton = document.querySelector('.chat__button');
const closeButton = document.querySelector("#close-button");
const chatBox = document.querySelector('.chat__box');
const chatMessage = document.querySelector('#chat-message');
const sendButton = document.querySelector('.btn__send');
const wsUrl = 'wss://echo-ws-service.herokuapp.com'
const sendGeoButton = document.querySelector('#send-geo');
const mapLink = document.querySelector('#map-link');

let websocket;

function writeToScreen(message) {
  let pre = document.createElement('div');
  pre.classList.add('message__box');
  pre.innerHTML = message;
  chatMessage.appendChild(pre);
}

chatButton.addEventListener('click', () => {
    chatBox.classList.toggle('hidden');
    websocket = new WebSocket(wsUrl);
    websocket.onmessage = function(e) {
      writeToScreen (
         '<p class="message--text">' + e.data+ '</p>'
      );
   };
   websocket.onerror = function(e) {
      writeToScreen(
         '<p class="message--text">ERROR</p>'+ e.data
      );
   };
});
closeButton.addEventListener('click', () => {
  chatBox.classList.toggle('hidden');
  websocket.close();
  websocket = null;
  chatMessage.innerHTML = '';
  message.value = '';
});
sendButton.addEventListener('click', () => {
  const message = document.getElementById('message').value;
   writeToScreen(message);
   websocket.send(message);
});
 async function position() {
  const position = await new Promise((resolve, reject) => {
     navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  const longitude =  position.coords.longitude;
  const latitude =  position.coords.latitude;
  chatMessage.innerHTML = `
  <div class="message__box">
     <a href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}" id="map-link" target="_blank">Гео-локация</a>
  </div>
  `;
}
sendGeoButton.addEventListener('click', () => {
  writeToScreen(position());
  websocket.send(position());
  chatMessage.innerHTML = '';
});

