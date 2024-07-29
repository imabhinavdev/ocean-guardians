document.addEventListener('DOMContentLoaded', () => {
    const chartContainer = document.getElementById('chartContainer');
    const ctxBar = document.getElementById('barChart').getContext('2d');;
    
    const canvas = document.createElement('canvas');
    chartContainer.appendChild(canvas);
    
     new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['Plastic', 'Oil Spills', 'Industrial Waste', 'Sewage'],
            datasets: [{
                label: 'Pollution Levels (tons)',
                data: [8000000, 1300000, 6400000, 3200000],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 5
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    new Chart(canvas, {
        type: 'pie',
        data: {
            labels: ['Fish', 'Coral', 'Algae', 'Mammals'],
            datasets: [{
                data: [33000,6000,72500,1130],
                backgroundColor: ['#0077be', '#00aaff', '#00cccc', '#009999'],
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                      
                },
                title: {
                    display: true,
                    text: 'Marine Life Composition',
                    font: {
                        size: 18
                    }
                }
            }
        }
    });
});
