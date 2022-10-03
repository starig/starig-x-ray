type XrayResults = {
    name: string,
    value: string,
}

export type XrayDataItem = {
    id: string,
    is_favorite: boolean,
    first_name: string,
    last_name: string,
    gender: string,
    age: number,
    dob: string,
    dox: string,
    ab_prob: number,
    pneumonial: number,
    status: string,
    results: XrayResults[];
}

export interface XrayDataState {
    data: XrayDataItem[];
    status: Status;
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}