import React from 'react';
import { Line } from 'react-chartjs-2';

const MeasurementsChart = ({ measurements }) => {
    const options = {
        scales: {
            xAxes: [{
                type: 'time'
            }],
            yAxes: [
                {
                    id: 'temperature',
                    type: 'linear',
                    position: 'left',
                },
                {
                    id: 'pressure',
                    type: 'linear',
                    position: 'right',
                }
            ]
        }
    };

    const data = {
        labels: measurements.map(measurement => measurement.timestamp),
        datasets: [
            {
                label: 'Temperature',
                yAxisID: 'temperature',
                fill: 'false',
                borderColor: 'rgba(235, 52, 52, 1)',
                lineTension: 0.1,
                data: measurements.map(measurement => measurement.temperature)
            },
            {
                label: 'Luftdruck',
                yAxisID: 'pressure',
                fill: 'false',
                lineTension: 0.1,
                borderColor: 'rgba(75,192,192,1)',
                data: measurements.map(measurement => measurement.pressure)
            },
        ]
    };

    return (
        <Line data={data} options={options} />
    );
}

export default MeasurementsChart;