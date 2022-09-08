var socket = new WebSocket('ws://localhost/ws/int/');
socket.onmessage = function(event){
    var data = JSON.parse(event.data);
    console.log(data);
    document.querySelector('#msgtxt').innerHTML = data.message;
}