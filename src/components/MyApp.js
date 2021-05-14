import React from 'react';
import { Container, Row, Col, Alert } from 'reactstrap';
// import './style.css';

class MyApp extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <h1 className="firstText">Hello React</h1>
                <p>lorem ipsum {this.props.name} {this.props.number}</p>

                <Container>
                    <Row>
                        <Col md="4">
                            <Alert color="danger">
                                This is red alert Component
                            </Alert>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default MyApp;