import React from 'react';
import Container from 'react-bootstrap/Container';


export default function MyFooter() {
  return (
    <footer>
        <Container className="bg-dark text-light text-center" fluid style={{ height: '5vh'}}>
          <div>Epibooks @ 2024</div>
        </Container>
    </footer>
  );
}
