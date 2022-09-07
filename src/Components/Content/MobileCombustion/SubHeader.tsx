import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function SubHeader() {
    return (
        <Container fluid className='sub-header padding-reset'>
            <Row>
                <Col >
                    <h1 className='scope-text'>Scope 1</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Container fluid className='sub-header-mobile-combustion'>
                        <Row>
                            <Col className='padding-reset'>
                                <img src='./assets/sub-header-logo.svg' />
                            </Col>
                            <Col className='padding-reset'>
                                <p>MOBILE COMBUSTION</p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
