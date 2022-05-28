var xAxis = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
var yAxis = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];

var myChart = new Chart('myChart', {
    type: 'bar',
    data: {
    label: 'Weekly Expenses',
    labels: xAxis,
    datasets: [{
        backgroundColor: 'hsl(10, 79%, 65%)',
        borderRadius: '8',
        data: yAxis,
        hoverBackgroundColor: 'hsl(186, 34%, 60%)',
        indexAxis: 'x',
        label: 'Weekly Expenses'
    }]
    },
    options: {
    plugins: {
        legend: {
            display: false
        },
    },
    scales: {
        xAxis: {
        display: false
        },
        yAxis: {
        display: false
        }
    }
    }
});