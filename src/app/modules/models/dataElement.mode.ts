export interface DataElement{
    name :string,
    id : string,
    valueType: string,
    optionSetValue: boolean,
    optionSet? : Array<{
        id : string,
        name : string,
        code : number,
    }>,
    categoryCombo : {
        id : string,
        name : string,
        categoryOptionCombos : Array<{
            id :string,
            name : string
        }>
    }
}

