
export const transformData = (data:any) => {
    if (data.Response === 'False') {
        return 'not found'
    }
}
