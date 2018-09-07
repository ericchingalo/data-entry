export interface DataSet{
    name: string,
    id: string,
    formType: string,
    version: number,
    timelyDays: number,
    periodType: string,
    openFuturePeriods: string,
    expiryDays: number,
    dataEntryForm? : string,
    organisationUnits : Array<{
        id: string
    }>
    categoryCombo : {
        name : string,
        id : string,
        categories : Array<{
            name: string,
            id : string,
            categoryOPtions: Array<{
                name: string,
                id: string,
                organisationUnits: Array<{
                    id: string
                }>
            }>
        }>,
        categoryOptionCombos: Array<{
            name : string,
            id : string,
            categoryOptions : Array<{
                id : string,
            }>
        }>
    },
    dataSetElements: Array<{
        dataElement : Array<{
            id : string
        }>
    }>,
    compulsoryDataElementOperands : Array <{
        name: string,
        dimensionItem : string,
        dimensionItemType: string
    }>,
    indicators : Array<{
        id : string
    }>,
    sections : Array<{
        id : string
    }>
}