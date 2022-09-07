import { Col, Container, Row } from 'react-bootstrap'
import { ListType } from './ListType'
import "./NavBar.css"

type NavBarProps = {
    Label: string
    List: ListType[]
}

export default function NavBar(props: NavBarProps) {

    return (
        <div>
            <p className='menu-top-title'>{props.Label}</p>

            <Container fluid>
                {
                    props.List.map((item, index) => {
                        return (<Row key={index} className={"menu-row"}>
                            <Col xs="1"></Col>
                            <Col className={item.isActive ? "menu-row-active" : ""}>
                                <Container>
                                    <Row>
                                        <Col xs="1">{item.icon}</Col>
                                        <Col>{item.label}</Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>)
                    })
                }
            </Container>
            {/* <ul className='menu-list'>
                {
                    props.List.map((item, index) => {
                        return (<li key={index}>
                            <div style={item.isActive ? {
                                background: "#0D1840",
                                borderRadius: "4px",
                                width: "167px",
                                height: "34px",
                                color: 'white'
                            } : {}}>
                                {item.icon}<p>{item.label}</p>
                            </div>
                        </li>)
                    })
                }
            </ul> */}
        </div>
    )
}
