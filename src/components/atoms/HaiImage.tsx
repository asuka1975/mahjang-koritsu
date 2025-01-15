import { Hai } from "../../types/types"

import m1 from "../../assets/m1.png"
import m2 from "../../assets/m2.png"
import m3 from "../../assets/m3.png"
import m4 from "../../assets/m4.png"
import m5 from "../../assets/m5.png"
import m6 from "../../assets/m6.png"
import m7 from "../../assets/m7.png"
import m8 from "../../assets/m8.png"
import m9 from "../../assets/m9.png"
import j3 from "../../assets/j3.png"

type Props = {
    hai: Hai
}

const images = {
    1: m1,
    2: m2,
    3: m3,
    4: m4,
    5: m5,
    6: m6,
    7: m7,
    8: m8,
    9: m9,
    "西": j3
}

export function HaiImage({ hai }: Props) {
    return <img src={images[hai]}></img>
}