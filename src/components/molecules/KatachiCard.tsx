import { Hai } from "../../types/types"
import { HaiImage } from "../atoms/HaiImage"

type Props = {
    hais: Hai[]
}

export default function KatachiCard({ hais }: Props) {
    return (
        <div className="KatachiCard">
            {hais.map((hai, i) => <HaiImage key={i} hai={hai} />)}
        </div>
    )
}