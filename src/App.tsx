import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';


const App = () =>
{
    return <Router>
        <Header />
        <main className="py-3">
            <Container>
                <Route path="/" component={ Home } exact />
                <Route path="/product/:id" component={ Product } />
                <Route path="/cart/:id?" component={ Cart } />
            </Container>
        </main>
        <Footer />
    </Router>;
};

export default App;