import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';


const App = () =>
{
    return <div>
        <Header />
        <main className="py-3">
            <Container>
                <Home />
            </Container>
        </main>
        <Footer />
    </div>;
};

export default App;