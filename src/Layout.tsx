import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SideBar from './Components/Layout/Menu/SideBar'
import Content from './Components/Content/Content'

export default function Layout() {
    return (
        <Container fluid style={{ padding: 0 }}>
            <Row>
                <Col xs="2">
                    <SideBar />
                </Col>
                <Col xs="10">
                    <Content />
                </Col>
            </Row>
        </Container>
    )
}
