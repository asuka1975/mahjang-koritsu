
export type Hai = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | "西";

export type Katachi = {
    hais: Hai[]
    order: number
}

export type Question = {
    katachi1: Katachi,
    katachi2: Katachi
}