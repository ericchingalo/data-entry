export interface User{
    name: string,
    id: string,
    organisationUnits: Array<{
        id: string,
        displayName: string,
    }>,
    authorities : Array<string>,
    programs: Array<string>,
    dataSets: Array<string>
}