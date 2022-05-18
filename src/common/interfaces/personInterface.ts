export interface Person {
    name: string;
    height: string;
    mass: string;
    gender: string;
    homeworld: [string];

}

export interface People {
    next: string | null
    previous: string | null
    results: [Person]
}

export interface Individual {
    results: [Person]
}