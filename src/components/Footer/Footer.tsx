import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Footer = () =>
{
    const { t } = useTranslation();

    return <footer>
        <Container>
            <Row>
                <Col className="text-center">{ t('FOOTER.FOOTER') }</Col>
            </Row>
        </Container>
    </footer>;
};

export default Footer;