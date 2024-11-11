import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, ButtonGroup, ButtonToolbar, Card } from 'react-bootstrap';

// Importo i dati dei JSON
import booksDataFantasy from './books/fantasy';
import booksDataHorror from './books/horror';
import booksDataHistory from './books/history';
import booksDataRomance from './books/romance';
import booksDataScifi from './books/scifi';

// Memorizzo i dati dei libri
const AllTheBooks = () => {
    const [fantasyBooks, setFantasyBooks] = useState([]);
    const [horrorBooks, setHorrorBooks] = useState([]);
    const [historyBooks, setHistoryBooks] = useState([]);
    const [romanceBooks, setRomanceBooks] = useState([]);
    const [scifiBooks, setScifiBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('fantasy'); // Mantiene la categoria selezionata

    useEffect(() => { // Assegna i dati dei libri alle variabili
        setFantasyBooks(booksDataFantasy); 
        setHorrorBooks(booksDataHorror);   
        setHistoryBooks(booksDataHistory); 
        setRomanceBooks(booksDataRomance); 
        setScifiBooks(booksDataScifi);     
    }, []);

    const categoryChange = (category) => { // Aggiorna in base alla categoria selezionata
        setSelectedCategory(category);
    };

    const booksCategory = () => { // Determina quale categoria di libri mostrare
        switch (selectedCategory) {
            case 'fantasy':
                return fantasyBooks;
            case 'horror':
                return horrorBooks;
            case 'history':
                return historyBooks;
            case 'romance':
                return romanceBooks;
            case 'scifi':
                return scifiBooks;
            default:
                return [];
        }
    };

    return (
        <div>
            <div className=" d-flex row text-center my-4">
                <ButtonToolbar className='justify-content-center'>
                    <ButtonGroup>
                        <Button onClick={() => categoryChange('fantasy')} active={selectedCategory === 'fantasy'}>
                            Fantasy
                        </Button>
                        <Button onClick={() => categoryChange('horror')} active={selectedCategory === 'horror'}>
                            Horror
                        </Button>
                        <Button onClick={() => categoryChange('history')} active={selectedCategory === 'history'}>
                            History
                        </Button>
                        <Button onClick={() => categoryChange('romance')} active={selectedCategory === 'romance'}>
                            Romance
                        </Button>
                        <Button onClick={() => categoryChange('scifi')} active={selectedCategory === 'scifi'}>
                            Sci-Fi
                        </Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>  

            <Container className="my-4" fluid>
                <Row>
                    {booksCategory().map((book) => (
                        <Col md={2} className="mb-4">
                            <Card className="bg-dark text-light shadow-lg h-100" style={{ cursor: 'pointer'}}>
                                <Card.Img src={book.img} alt={book.title} style={{ height: '400px', objectFit: 'fill'}}/>
                                <Card.Body>
                                    <Card.Title className="text-center">
                                        <small>{book.title}</small>
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))};
                </Row>
            </Container>
        </div>
    );
}

export default AllTheBooks;