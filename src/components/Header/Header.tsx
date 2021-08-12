import { LinkContainer } from 'react-router-bootstrap';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


import "./Header.scss";

const Header = () =>
{
    const { t } = useTranslation();
    const { i18n } = useTranslation();

    const changeLanguage = (e: any) =>
    {
        i18n.changeLanguage(e.target.value);
    };

    return <header>
        <Navbar className="nav-bg" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>{ t('HEADER.REACT_MARKET') }</Navbar.Brand>
                </LinkContainer>
                <Nav>
                    <LinkContainer to="/cart">
                        <Nav.Link>
                            <i className="fa fa-shopping-cart"></i>
                        </Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/account">
                        <Nav.Link>
                            <i className="fa fa-user"></i>
                        </Nav.Link>
                    </LinkContainer>
                    <Button className="m-1" onClick={ changeLanguage } value='en'>English</Button>
                    <Button className="m-1" onClick={ changeLanguage } value='fa'>فارسی</Button>
                </Nav>
            </Container>
        </Navbar>
    </header>;
};

export default Header;