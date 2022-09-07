export interface SourceResponse {
    id: number;
    name: string;
    data_type_id?: number;
    created_at?: null;
    updated_at?: null;
    deleted_at?: null;
    vehicles?: Vehicle[];
}

export interface Vehicle {
    id: number;
    name: string;
    sourceId?: number;
    created_at?: null;
    updated_at?: null;
    deleted_at?: null;
    pivot?: Pivot;
}

export interface Pivot {
    fuel_id: number;
    vehicle_id: number;
}

export interface UnitResponse {
    id: number;
    name: string;
    multiply_by?: number;
    is_main?: number;
    data_type_id?: number;
    created_at?: null;
    updated_at?: null;
    deleted_at?: null;
}
