export type SearchInputTypes={
    value:string,
    onChangeValue:(value:string)=> void,
    onSearch:()=>void
    onCancel?:()=>void
}