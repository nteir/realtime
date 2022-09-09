
const ctx = document.getElementById('myChart').getContext('2d');

var graphData = {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [{
            label: '',
            data: [0, 0, 0, 0, 0, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)'
            ],
            borderWidth: 1
        }]
    },
    options: {}
};

const myChart = new Chart(ctx, graphData);


var socket = new WebSocket('ws://localhost/ws/int/');
socket.onmessage = function(event){
    var djangoData = JSON.parse(event.data);
    console.log(djangoData);

    var newGraphData = graphData.data.datasets[0].data;
    newGraphData.shift();
    newGraphData.push(djangoData.message);
    graphData.data.datasets[0].data = newGraphData;
    myChart.update();

    document.querySelector('#msgtxt').innerHTML = djangoData.message;
}