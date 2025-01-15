import { Hai } from "../../types/types"

type Props = {
    hai: Hai
}

const images = {
    1: "m1.png",
    2: "m2.png",
    3: "m3.png",
    4: "m4.png",
    5: "m5.png",
    6: "m6.png",
    7: "m7.png",
    8: "m8.png",
    9: "m9.png",
    "西": "j3.png"
}

export function HaiImage({ hai }: Props) {
    return <img src={images[hai]}></img>
}