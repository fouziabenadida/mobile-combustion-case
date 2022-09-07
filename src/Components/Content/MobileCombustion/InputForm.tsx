import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Select, { KeyValuePair } from '../../FormItems/Select'
import CommonFormHeader from './CommonFormHeader'
import { GetActivityTypes, GetLastFiveYears, GetRandomFaciltyID } from "./../../../Constants/DataProviver"
import { ApiServices } from '../../../Services/Api'
import { SourceResponse, UnitResponse, Vehicle } from '../../../Services/ResponseTypes'
import NumericInput from 'react-numeric-input'
import { InputFormHandler } from './MobileCombustion'
import { ResultModel } from './ResultForm'

type InputFormProps = {
    CalculatedResponse: (result: ResultModel) => void
}

export default React.forwardRef<InputFormHandler | undefined, InputFormProps>((props, ref) => {

    React.useImperativeHandle(ref, () => {
        return {
            Clear: clearAllInputs,
            SetFields: (fields) => {
                if (fields.id) {
                    console.log(fields)
                    if (fields.facility?.Value !== undefined)
                        setSelectedFaciltyId(fields.facility?.Value)
                    setSelectedYear(fields.year?.Value!)
                    if (fields.units?.Key !== undefined)
                        setSelectedUnit(parseInt(fields.units?.Key.toString()))
                    if (fields.activity?.Key !== undefined)
                        setSelectedActivityType(parseInt(fields.activity?.Key.toString()))

                    if (fields.fuel?.Key !== undefined)
                        setSelectedFoulSource(parseInt(fields.fuel?.Key.toString()))

                    if (fields.vehicle?.Key !== undefined)
                        setSelectedVehicleType(fields.vehicle?.Key.toString())

                    setSelectedAmount(fields?.amountOfFuel!)
                }

            }
        }
    });

    const clearAllInputs = () => {
        setSelectedFaciltyId("")
        setSelectedYear("")
        setSelectedUnit(-1)
        setSelectedActivityType(-1)
        setSelectedFoulSource(-1)
        setSelectedVehicleType("")
        setSelectedAmount(0)
    }

    const [selectedFaciltyId, setSelectedFaciltyId] = useState("")
    const [selectedYear, setSelectedYear] = useState("")
    const [selectedUnit, setSelectedUnit] = useState(-1)
    const [selectedActivityType, setSelectedActivityType] = useState(-1)
    const [selectedFoulSource, setSelectedFoulSource] = useState(-1)
    const [selectedVehicleType, setSelectedVehicleType] = useState("")
    const [selectedAmount, setSelectedAmount] = useState<number>(0)



    const [facilityIds, setFacilityIds] = useState<KeyValuePair[]>([])
    const [years, setYears] = useState<KeyValuePair[]>([])
    const [activityTypes, setActivityTypes] = useState<KeyValuePair[]>([])
    const [vehicles, setVehicles] = useState<KeyValuePair[]>([])
    const [units, setUnits] = useState<UnitResponse[]>([])
    const [sources, setSources] = useState<SourceResponse[]>([])


    useEffect(() => {
        const fillDatas = async () => {
            let sourcesResponse = await ApiServices.getFuelTypes(selectedActivityType.toString())
            sourcesResponse.unshift({ id: -1, name: "Seçiniz" })
            setSources(sourcesResponse)
            let unitsResponse = await ApiServices.getUnits(selectedActivityType.toString())
            unitsResponse.unshift({ id: -1, name: "Seçiniz" })
            setUnits(unitsResponse)
        }
        fillDatas()

    }, [selectedActivityType])


    useEffect(() => {
        if (selectedFoulSource !== -1) {
            let v = sources.find(x => x.id === selectedFoulSource)
            if (v) {
                let data = v.vehicles!.map(y => {
                    let item: KeyValuePair = {
                        Key: y.id,
                        Value: y.name
                    }
                    return item;
                })
                data.unshift({ Key: -1, Value: "Seçiniz" })
                setVehicles(data)
            }
        }

    }, [selectedFoulSource, sources])

    useEffect(() => {
        const calculate = async () => {
            if (selectedFaciltyId !== "" &&
                selectedYear !== "" &&
                selectedUnit !== -1 &&
                selectedActivityType !== -1 &&
                selectedFoulSource !== -1 &&
                selectedVehicleType !== "" &&
                selectedAmount !== 0) {
                var response = await ApiServices.getCalculation(selectedActivityType, selectedFoulSource, selectedAmount, selectedUnit, selectedVehicleType, selectedFaciltyId, selectedYear)
                if (response.ch4 !== undefined) {
                    props.CalculatedResponse({
                        ch4: response.ch4,
                        co2: response.co2,
                        co2e: response.co2e,
                        n2o: response.n2o,
                        activity: activityTypes.find(x => x.Key === selectedActivityType.toString()),
                        facility: facilityIds.find(x => x.Value === selectedFaciltyId),
                        year: years.find(x => x.Value === selectedYear),
                        vehicle: vehicles.find(x => x.Key === parseInt(selectedVehicleType)),
                        amountOfFuel: selectedAmount,
                        fuel: {
                            Key: sources.find(x => x.id === selectedFoulSource)?.id!,
                            Value: sources.find(x => x.id === selectedFoulSource)?.name!,
                        },
                        units: {
                            Key: units.find(x => x.id === selectedUnit)?.id!,
                            Value: units.find(x => x.id === selectedUnit)?.name!,
                        },
                    })
                }

            }
        }
        calculate()
    }, [selectedFaciltyId, selectedYear, selectedUnit, selectedActivityType, selectedFoulSource, selectedVehicleType, selectedAmount, props, facilityIds, years, vehicles, sources, units, activityTypes])


    useEffect(() => {
        console.log("loaded")
        setFacilityIds(GetRandomFaciltyID())
        setActivityTypes(GetActivityTypes())
        setYears(GetLastFiveYears())
        setActivityTypes(GetActivityTypes())
        setVehicles([{ Key: -1, Value: "Seçiniz" }])

    }, [])

    return (
        <>
            <CommonFormHeader label='GİRDİ ALANI' desc='Lütfen salınım değerlerini hesaplamak için aşağıdaki alanları doldurun:' />

            <Form>
                <Select label='Facilty ID' data={facilityIds} value={selectedFaciltyId} onChange={(e) => setSelectedFaciltyId(e.target.value)} />
                <Select label='Year' data={years} value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} />
                <Select label='Activity Type' data={activityTypes} value={selectedActivityType} onChange={(e) => setSelectedActivityType(parseInt(e.target.value))} />
                <Select label='Foul Source' value={selectedFoulSource} onChange={(e) => setSelectedFoulSource(parseInt(e.target.value))}
                    data={sources.map(x => {
                        let item: KeyValuePair = {
                            Key: x.id,
                            Value: x.name
                        }
                        return item;
                    })
                    } />
                <Select label='Vehicle Type' value={selectedVehicleType} data={vehicles} onChange={(e) => setSelectedVehicleType(e.target.value)} />

                <Container fluid>
                    <Row className='padding-reset'>
                        <Col style={{ paddingLeft: "0px" }}>
                            <Form.Group>
                                <Form.Label>Amount of Activity</Form.Label>
                                <NumericInput className="form-control" placeholder='Giriniz' value={selectedAmount} onChange={(e) => setSelectedAmount(e ?? 0)} style={false} />
                            </Form.Group>
                        </Col>
                        <Col style={{ paddingRight: "0px" }}>
                            <Select label='Units' value={selectedUnit} data={units.map(x => {
                                let item: KeyValuePair = {
                                    Key: x.id,
                                    Value: x.name
                                }
                                return item;
                            })} onChange={(e) => setSelectedUnit(parseInt(e.target.value))} />
                        </Col>
                    </Row>
                </Container>


            </Form>
        </>
    )
})
