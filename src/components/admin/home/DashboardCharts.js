import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Zoom } from 'react-awesome-reveal';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const DashboardCharts = () => {

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Lending Data Chart',
            },
        },
    };

    const borrowing_options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Borrowing Data Chart',
            },
        },
    };

    const lendingData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Lending",
                data: [33, 25, 35, 51, 54, 76],
                fill: false,
                borderColor: "#7876F4",
                backgroundColor: "#fff",
            }
        ]
    };

    const borrowingData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Borrowing",
                data: [33, 25, 35, 51, 54, 76],
                fill: true,
                borderColor: "#F62B74",
                backgroundColor: "#fff",
            }
        ]
    };

    return (
        <Row className='my-5'>
            <Col xs='12' lg='6' className='bg-light'>
                <Zoom>
                    <Line data={lendingData} options={options} />
                </Zoom>
            </Col>
            <Col xs='12' lg='6'>
                <Zoom>
                    <Line data={borrowingData} options={borrowing_options} />
                </Zoom>
            </Col>
        </Row>
    )
}

export default DashboardCharts;
