export type ErrorType = {
    Response: string
    Error: string
}
export type MovieInfoType = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}
export type SuccessResponseType = {
    Response: string
    Search: Array<MovieInfoType>,
    totalResults: string
}

export type SearchMoviesType = {
    title:string,
    page:number,
}