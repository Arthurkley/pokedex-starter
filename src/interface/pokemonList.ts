export interface IPokemonListResponse {
    count: number
    next: string
    previous: null
    results: []
}

export interface IPokemonListItem {
    name: string
    url: string
}