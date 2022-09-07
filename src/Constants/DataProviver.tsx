import { KeyValuePair } from "../Components/FormItems/Select";

export const GetLastFiveYears = () => {
    let year: number = new Date().getFullYear();

    let data: KeyValuePair[] = [];
    data.push({ Key: -1, Value: "Seçiniz" })

    for (let i = 0; i < 5; i++) {
        const element = year - i;
        data.push({
            Key: element,
            Value: element.toString()
        })
    }

    return data;
}

export const GetRandomFaciltyID = () => {

    let faciltyIds: KeyValuePair[] = [];
    faciltyIds.push({ Key: -1, Value: "Seçiniz" })
    for (let i = 0; i < 15; i++) {
        const element = Math.floor(Math.random() * 100) + 1000;

        faciltyIds.push({
            Key: element,
            Value: element.toString()
        })
    }
    return faciltyIds;
}

export const GetActivityTypes = () => {
    let data: KeyValuePair[] = [
        { Key: -1, Value: "Seçiniz" },
        {
            Key: "4",
            Value: "Distance Activity"
        },
        {
            Key: "5",
            Value: "Fuel Use"
        },
    ]

    return data
}