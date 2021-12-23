import { useParams } from "react-router-dom";

export default function DuoPage() {
    let params = useParams();
    return <div>
        {params.firstSummoner} AND {params.secondSummoner}
    </div>
}
