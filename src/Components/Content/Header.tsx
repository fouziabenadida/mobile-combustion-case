import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Header.css"
export default function Header() {
    return (
        <Container fluid className='header-bar'>
            <Row>
                <Col>
                    <img src="./assets/notification.png" />
                </Col>
            </Row>
            <Row>
                <Col xs="1">
                    <img style={{ float: "right" }} src='./assets/header-logo.png' />
                </Col>
                <Col xs="1" className='padding-reset'>
                    <div className='dijital-mentor'>
                        <p>Dijital Mentor</p>
                        <img src='./assets/down.png' />
                    </div>
                </Col>
                <Col xs="1">

                </Col>
                <Col>
                    <Container>
                        <Row>
                            <Col>
                                <p className='welcome-text'>Merhaba Murat Bey,</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className='welcome-desc'>Talep etmiş olduğunuz tedarik zinciri raporunu oluşturdum. Bu alana tıklayarak rapora erişim sağlayabiliriniz.</p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>

        </Container >
    )
}
