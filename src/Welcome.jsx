import React from 'react';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Welcome() {
  const [show, setShow] = useState(true);


    return (
      <>
      <Alert show={show} variant="success">
        <Alert.Heading>Benvenuto!</Alert.Heading>
        <p>
          Sfoglia la nostra libreria.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Chiudi
          </Button>
        </div>
      </Alert>
    </>
    );
};

export default Welcome;
