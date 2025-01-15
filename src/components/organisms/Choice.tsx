import "./Choice.css"

import { Katachi } from "../../types/types"
import KatachiCard from "../molecules/KatachiCard"
import { Link } from "react-router-dom"

type Props = {
    katachi: Katachi,
    index: number
}

export default function Choice({ katachi, index }: Props) {
    return (
        <Link className="Choice" to={`/answer${index}`}>
            <KatachiCard hais={katachi.hais} />
        </Link>
    )
}