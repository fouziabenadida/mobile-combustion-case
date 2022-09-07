import React from 'react'
import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CombinedInput from '../../FormItems/CombinedInput'
import { KeyValuePair } from '../../FormItems/Select'
import CommonFormHeader from './CommonFormHeader'
import { ResultFormHandler } from './MobileCombustion'

export interface ResultModel {
  id?: string
  co2: string
  ch4: string
  n2o: string
  co2e: string
  year?: KeyValuePair
  units?: KeyValuePair
  activity?: KeyValuePair
  vehicle?: KeyValuePair
  amountOfFuel?: number
  fuel?: KeyValuePair
  facility?: KeyValuePair
}

export default React.forwardRef<ResultFormHandler | undefined, any>((props, ref) => {

  React.useImperativeHandle(ref, () => {
    return {
      Clear: () => setFields({
        ch4: "",
        co2: "",
        co2e: "",
        n2o: "",
        id: undefined
      }),
      Save: () => {
        return fields
      },
      SetResults: (result) => {
        if (fields.id) {
          result.id = fields.id
        }
        setFields(result)
      }
    }
  });


  const [fields, setFields] = useState<ResultModel>({
    ch4: "",
    co2: "",
    co2e: "",
    n2o: ""
  })

  return (
    <>
      <CommonFormHeader label='SONUÇ ALANI' desc="Girdi Alanı'nda girdiğiniz değerlere göre salınan gaz miktarları aşağıdaki gibidir:" />
      <Container>
        <Row className='result-row'>
          <Col>
            <CombinedInput text={fields.co2} type={<img src="./assets/CO2.png" />} />
          </Col>
        </Row>
        <Row className='result-row'>
          <Col>
            <CombinedInput text={fields.ch4} type={<img src="./assets/CH4.png" />} />
          </Col>
        </Row >
        <Row className='result-row'>
          <Col>
            <CombinedInput text={fields.n2o} type={<img src="./assets/N2O.png" />} />
          </Col>
        </Row>
        <Row className='result-row'>
          <Col>
            <CombinedInput text={fields.co2e} type={<img src="./assets/CO2E.png" />} />
          </Col>
        </Row>
      </Container>
    </>
  )
})
