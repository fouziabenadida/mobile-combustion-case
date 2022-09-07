import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'

type SelectProps = {
    label: string
    data: KeyValuePair[]
    value?: string | number
    onChange?: React.ChangeEventHandler<HTMLSelectElement>
}
export interface KeyValuePair {
    Key: string | number
    Value: string
}
export default function Select(props: SelectProps) {
    const [value, setValue] = useState<number | string | undefined>(undefined)
    useEffect(() => {
        if (props.value !== undefined) {
            setValue(props.value)
        }
    }, [props.value])

    return (
        <Form.Group className="mb-3" >
            <Form.Label>{props.label}</Form.Label>
            <Form.Select value={value} onChange={props.onChange}>
                {
                    props.data.map((item, index) => {
                        return <option key={index} value={item.Key}>{item.Value}</option>
                    })
                }
            </Form.Select>
        </Form.Group>
    )
}
