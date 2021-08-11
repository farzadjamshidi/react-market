import React, { useEffect } from 'react';
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAction, deleteFromCartAction } from '../actions/cartAction';

const Cart = ({ match }) =>
{

    const dispatch = useDispatch();

    const { cartItems } = useSelector((state) => state.cart);

    useEffect(() =>
    {
        if (match.params.id)
            dispatch(addToCartAction(match.params.id));

    }, [match, dispatch]);

    const removeFromCartHandler = (itemId) =>
    {
        dispatch(deleteFromCartAction(itemId));
    };

    return <div>
        <Row>
            <Col md={ 8 }>
                <h2>سبد خرید</h2>
                { cartItems.length === 0 ? (
                    <p>سبد خرید خالی است</p>
                ) : (
                    <ListGroup variant="flush">
                        { cartItems.map((item) => (
                            <ListGroup.Item key={ item._id }>
                                <Row>
                                    <Col md={ 2 }>
                                        <Image src={ item.image } alt={ item.name } fluid rounded />
                                    </Col>
                                    <Col md={ 3 }>{ item.name }</Col>
                                    <Col md={ 2 }>{ item.price }</Col>
                                    <Col md={ 2 }>
                                        <Button
                                            type="button"
                                            variant="light"
                                            onClick={ () => removeFromCartHandler(item._id) }
                                        >
                                            <i className="fa fa-trash"></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        )) }
                    </ListGroup>
                ) }
            </Col>
            <Col md={ 4 }>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            مجموع: { cartItems.reduce((acc, item) => acc + item.price, 0) }
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    </div>;
};

export default Cart;