import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./CommonFormHeader.css"
type CommonFormHeaderProps = {
    label: string
    desc: string
}

export default function CommonFormHeader(props: CommonFormHeaderProps) {
    return (
        <Container>
            <Row>
                <Col>
                    <h6>{props.label}</h6>
                    <p style={{
                        width: "140px",
                        border: "1px solid #D0D0D0",
                    }}></p>
                    <p>{props.desc}</p>
                </Col>
            </Row>
        </Container>
    )
}
