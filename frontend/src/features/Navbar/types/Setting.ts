export interface Setting {
    name: string,
    way: string,
    function?: (func: any) => void
}
