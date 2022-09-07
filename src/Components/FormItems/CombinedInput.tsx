import React, { useEffect, useState } from 'react'
import { Form, InputGroup } from 'react-bootstrap'

type CombinedInputProps = {
    type: React.ReactNode
    text: string
}

export default function CombinedInput(props: CombinedInputProps) {

    const [value, setValue] = useState<string | undefined>(undefined)

    useEffect(() => {
        if (props.text !== undefined) {
            setValue(props.text)
        }
    }, [props.text])

    return (
        <InputGroup>
            <InputGroup.Text style={{
                background: "#0D1840",
                borderRadius: "22px 8px 8px 22px"
            }} > {props.type}</InputGroup.Text>
            <Form.Control
                placeholder=""
                value={value}
            />
        </InputGroup>
    )
}
