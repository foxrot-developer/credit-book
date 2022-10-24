import React, { useState } from 'react';
import { Modal, Button, Container } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { useSelector } from 'react-redux';

import Axios from '../../../axios/Axios';
import Toast from '../../../shared/Toast';

const RatingModal = ({ id, ...props }) => {

    const [rating, setRating] = useState(0);

    const ratingChanged = (newRating) => {
        setRating(newRating);
    };

    const ratingHandler = (id) => {
        const data = {
            rating: {
                id: id,
                rating: rating
            }
        }

        Axios.patch(`loan-api/user/${id}`, data)
            .then(response => {
                console.log(response.data);
                Toast.success(response.data.message);
            })
            .catch(error => {
                console.log(error.message);
                Toast.error(error.message);
            });;
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Rate Your Experience
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container className='d-flex flex-column align-items-center justify-content-center'>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={50}
                        activeColor="#ffd700"
                    />
                    <Button className='px-5 btn custom-btn mt-5' disabled={rating === 0} onClick={ratingHandler}>
                        SUBMIT
                    </Button>
                </Container>
            </Modal.Body>
        </Modal >
    )
}

export default RatingModal;
