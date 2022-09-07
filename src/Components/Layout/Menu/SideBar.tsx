import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ListType } from './ListType'
import NavBar from './NavBar'
import "./SideBar.css"


export default function SideBar() {

    const menu: ListType[] = [
        {
            label: "Eğitimler",
            icon: <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.7856 5.5385H6.96419V1C6.96419 0.867392 6.90775 0.740215 6.80729 0.646447C6.70682 0.552679 6.57056 0.5 6.42848 0.5C5.64021 0.499699 4.85989 0.647007 4.13371 0.933204C3.40753 1.2194 2.75025 1.63867 2.20078 2.16619C1.65132 2.69371 1.22083 3.31876 0.934809 4.00434C0.648788 4.68991 0.513047 5.42208 0.53562 6.1575C0.595279 7.55506 1.2162 8.8805 2.27497 9.87035C3.33373 10.8602 4.7528 11.442 6.25009 11.5H6.43062C7.98528 11.4995 9.47674 10.9256 10.5801 9.90343C11.6835 8.88121 12.3093 7.49346 12.3213 6.0425C12.3219 5.9765 12.3085 5.91105 12.2818 5.84993C12.2551 5.7888 12.2158 5.73321 12.166 5.68635C12.1161 5.6395 12.0569 5.60231 11.9916 5.57694C11.9263 5.55156 11.8563 5.53849 11.7856 5.5385ZM9.77134 9.24149C9.31005 9.65926 8.76331 9.98601 8.16375 10.2022C7.56419 10.4185 6.92411 10.5197 6.28169 10.5C5.05682 10.4525 3.89593 9.97663 3.02981 9.16687C2.16369 8.3571 1.65578 7.27279 1.60705 6.1295C1.57272 5.00072 1.99436 3.90116 2.78826 3.04903C3.58217 2.19691 4.69031 1.65452 5.89276 1.5295V6.0405C5.89276 6.1731 5.94921 6.30028 6.04967 6.39405C6.15014 6.48782 6.2864 6.5405 6.42848 6.5405H11.214C11.0839 7.5699 10.5738 8.52489 9.77134 9.24149Z" fill="#0D1840" />
            </svg>,
            isActive: false
        },
        {
            label: "Analiz",
            icon: <img src='./assets/dashboard.png' width="13" height="13" />,
            isActive: true
        },
        {
            label: "Raporlar",
            icon: <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.25 12.75H1.75C1.05964 12.75 0.5 12.1904 0.5 11.5V1.5C0.5 0.809644 1.05964 0.25 1.75 0.25H6.125C6.13181 0.250295 6.13854 0.251558 6.145 0.25375C6.15111 0.255636 6.15739 0.256892 6.16375 0.2575C6.21887 0.261033 6.27328 0.271749 6.32562 0.289375L6.34312 0.295C6.35729 0.299801 6.37108 0.305651 6.38438 0.3125C6.45247 0.342765 6.51451 0.385115 6.5675 0.4375L10.3175 4.1875C10.3699 4.24049 10.4122 4.30253 10.4425 4.37063C10.4487 4.38438 10.4531 4.39875 10.4581 4.41313L10.4637 4.42937C10.4812 4.48149 10.4915 4.53574 10.4944 4.59063C10.4953 4.59637 10.4968 4.60201 10.4987 4.6075C10.4999 4.61326 10.5003 4.61914 10.5001 4.625V11.5C10.5001 12.1904 9.94036 12.75 9.25 12.75ZM1.75 1.5V11.5H9.25V5.25H6.125C5.77982 5.25 5.5 4.97018 5.5 4.625V1.5H1.75ZM6.75 2.38375V4H8.36625L6.75 2.38375Z" fill="#343A40" />
            </svg>,
            isActive: false
        },
        {
            label: "Profil",
            icon: <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8.91911" cy="5.43449" r="3.64177" stroke="#343A40" stroke-width="2" />
                <path d="M16.6554 15.0275C16.6554 12.6348 13.3303 10.6952 9.22859 10.6952C5.12686 10.6952 1.80176 12.6348 1.80176 15.0275" stroke="#343A40" stroke-width="2" />
            </svg>
            ,
            isActive: false
        }, {
            label: "Tim'e Yaz",
            icon: <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.875 13.125V3.125C1.875 2.43464 2.43464 1.875 3.125 1.875H11.875C12.5654 1.875 13.125 2.43464 13.125 3.125V9.375C13.125 10.0654 12.5654 10.625 11.875 10.625H5.625C5.35446 10.6245 5.09114 10.7123 4.875 10.875L1.875 13.125ZM3.125 3.125V10.625L4.45875 9.625C4.67478 9.46207 4.93817 9.37427 5.20875 9.375H11.875V3.125H3.125Z" fill="#343A40" />
            </svg>
            ,
            isActive: false
        }
    ]

    const tercihler: ListType[] = [
        {
            label: "Yetkilendirme",
            icon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.125 12.125H0.875V11.5C0.877755 9.0849 2.8349 7.12776 5.25 7.125H7.75C10.1651 7.12776 12.1222 9.0849 12.125 11.5V12.125H10.875V11.5C10.8729 9.77497 9.47503 8.37707 7.75 8.375H5.25C3.52497 8.37707 2.12707 9.77497 2.125 11.5V12.125ZM6.5 6.5C4.77411 6.5 3.375 5.10089 3.375 3.375C3.375 1.64911 4.77411 0.25 6.5 0.25C8.22589 0.25 9.625 1.64911 9.625 3.375C9.62293 5.10003 8.22503 6.49793 6.5 6.5ZM6.5 1.5C5.46447 1.5 4.625 2.33947 4.625 3.375C4.625 4.41053 5.46447 5.25 6.5 5.25C7.53553 5.25 8.375 4.41053 8.375 3.375C8.375 2.33947 7.53553 1.5 6.5 1.5Z" fill="#343A40" />
            </svg>
            ,
            isActive: false
        },
        {
            label: "Şifre Değiştir",
            icon: <img src='./assets/padlock.svg' width="13" height="13" />,
            isActive: false
        },
        {
            label: "Gizlilik Politikası",
            icon: <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.63751 12.75H5.36251C5.06883 12.75 4.81473 12.5456 4.75188 12.2588L4.49751 11.0813C4.15817 10.9326 3.8364 10.7466 3.53814 10.5269L2.39001 10.8925C2.11001 10.9818 1.80563 10.8639 1.65876 10.6094L0.51876 8.64C0.373502 8.38532 0.423547 8.06405 0.639385 7.86563L1.53001 7.05313C1.48951 6.68507 1.48951 6.31368 1.53001 5.94562L0.639385 5.135C0.423229 4.93648 0.373165 4.61483 0.51876 4.36L1.65626 2.38937C1.80313 2.13481 2.10751 2.01696 2.38751 2.10625L3.53563 2.47187C3.68817 2.35885 3.84697 2.25452 4.01126 2.15938C4.16897 2.07043 4.33128 1.9899 4.49751 1.91812L4.75251 0.741875C4.81505 0.45498 5.06888 0.250309 5.36251 0.25H7.63751C7.93114 0.250309 8.18497 0.45498 8.24751 0.741875L8.50501 1.91875C8.6805 1.99595 8.85141 2.08317 9.01688 2.18C9.17122 2.26926 9.32041 2.36712 9.46376 2.47312L10.6125 2.1075C10.8923 2.01854 11.1963 2.13635 11.3431 2.39062L12.4806 4.36125C12.6259 4.61593 12.5758 4.9372 12.36 5.13562L11.4694 5.94812C11.5099 6.31618 11.5099 6.68757 11.4694 7.05562L12.36 7.86812C12.5758 8.06655 12.6259 8.38782 12.4806 8.6425L11.3431 10.6131C11.1963 10.8674 10.8923 10.9852 10.6125 10.8962L9.46376 10.5306C9.3184 10.6377 9.16735 10.7368 9.01126 10.8275C8.8474 10.9224 8.67839 11.0082 8.50501 11.0844L8.24751 12.2588C8.18471 12.5454 7.93095 12.7498 7.63751 12.75ZM3.76251 9.14313L4.27501 9.51813C4.39054 9.60322 4.51096 9.68148 4.63564 9.7525C4.75295 9.82044 4.87374 9.88219 4.99751 9.9375L5.58064 10.1931L5.86626 11.5H7.13501L7.42063 10.1925L8.00376 9.93688C8.25832 9.82461 8.49995 9.68505 8.72438 9.52063L9.23751 9.14563L10.5131 9.55188L11.1475 8.45312L10.1581 7.55125L10.2281 6.91875C10.2589 6.6421 10.2589 6.3629 10.2281 6.08625L10.1581 5.45375L11.1481 4.55L10.5131 3.45062L9.23751 3.85687L8.72438 3.48187C8.49988 3.31669 8.25829 3.1761 8.00376 3.0625L7.42063 2.80687L7.13501 1.5H5.86626L5.57938 2.8075L4.99751 3.0625C4.87364 3.1169 4.75283 3.17804 4.63564 3.24563C4.51172 3.31646 4.39194 3.39429 4.27689 3.47875L3.76376 3.85375L2.48876 3.4475L1.85314 4.55L2.84251 5.45062L2.77251 6.08375C2.74176 6.3604 2.74176 6.6396 2.77251 6.91625L2.84251 7.54875L1.85314 8.45063L2.48751 9.54937L3.76251 9.14313ZM6.49751 9C5.1168 9 3.99751 7.88071 3.99751 6.5C3.99751 5.11929 5.1168 4 6.49751 4C7.87822 4 8.99751 5.11929 8.99751 6.5C8.99579 7.88 7.87751 8.99828 6.49751 9ZM6.49751 5.25C5.81463 5.25069 5.25869 5.79928 5.2489 6.48209C5.23912 7.1649 5.77911 7.72919 6.46169 7.74945C7.14427 7.76971 7.71678 7.23844 7.74751 6.55625V6.80625V6.5C7.74751 5.80964 7.18787 5.25 6.49751 5.25Z" fill="#343A40" />
            </svg>
            ,
            isActive: false
        }
    ]

    return (
        <Container fluid className='sideBar'>
            <Row className='profile'>
                <Col>
                    <div className='profilePhoto'>
                        <img src="./assets/profile.png" />
                    </div>
                    <div className='profileName'>
                        <h5>Murat Turan</h5>
                    </div>
                    <div className='profileTitle'>
                        <p>Tedarik Zinciri Yöneticisi</p>
                    </div>
                </Col>
            </Row>
            <Row className='navBar'>
                <Col>
                    <NavBar Label='MENÜ' List={menu} />
                    <NavBar Label='TERCİHLER' List={tercihler} />
                    <div className='tim-logo'>
                        <img src='./assets/TIM_LOGO_TR.png' />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


// <Container>
// <Row>
//     <Col></Col>
// </Row>
// </Container>