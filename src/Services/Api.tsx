import { ResultModel } from "../Components/Content/MobileCombustion/ResultForm";
import { SourceResponse, UnitResponse } from "./ResponseTypes";

export const ApiServices = {
    getFuelTypes: async (fuelType: string) => {
        let response = await fetch(`https://www.timdijitalmentorlukprogrami.com/api/fuel-type?data_type_id=${fuelType}`)
        let json = await response.json()
        let data: SourceResponse[] = json.data
        return data;
    },
    getCalculation: async (activity: number, fuel: number, amount: number, unit: number, vehicle: string, facilityId: string, year: string) => {
        let response = await fetch(`https://www.timdijitalmentorlukprogrami.com/api/greenhouse-gas/mobile-combustion?activity=${activity}&fuel=${fuel}&amount=${amount}&unit=${unit}&vehicle=${vehicle}&facility_id=${facilityId}&year=${year}`)
        let json = await response.json()
        let data: ResultModel = json.data
        return data;
    },
    getUnits: async (fuelType: string) => {
        let response = await fetch(`https://www.timdijitalmentorlukprogrami.com/api/unit?data_type_id=${fuelType}`)
        let json = await response.json()
        let data: UnitResponse[] = json.data
        return data;
    }
}