import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap';

import { productDetailAction } from '../actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Product = ({ history, match }: { history: any, match: any; }) =>
{

    const dispatch = useDispatch();

    const productDetail = useSelector((state: { productDetail: any; }) => state.productDetail);

    const { loading, product } = productDetail;

    useEffect(() =>
    {
        dispatch(productDetailAction(match.params.id));

    }, [match, dispatch]);

    const addToCartHandler = () =>
    {
        history.push('/cart/' + match.params.id);
    };

    const { t } = useTranslation();

    return <div>
        <Link to="/" className="btn btn-light my-3">{ t('PRODUCT.BACK_TO_MAIN_PAGE') }</Link>

        { loading ? <h2>{ t('PRODUCT.PRODUCT_IS_LOADING') }</h2> : <Row>
            <Col md={ 6 }>
                <Image src={ product.image } fluid />
            </Col>
            <Col md={ 3 }>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>{ product.name }</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        { product.description }
                    </ListGroup.Item>
                    <ListGroup.Item>
                        { product.price }
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={ 3 }>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Button
                            onClick={ addToCartHandler }
                            className="btn-block" type="button">
                            { t('PRODUCT.ADD_TO_CART') }
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
        }

    </div>;
};

export default Product;