import Marquee from "react-fast-marquee";
import StarElement from "./starElement";
const StarComponent = () => {
    return (
        <Marquee>
            <StarElement title={"GAMING SPANING"} />
            <StarElement title={"ACTION - PACKAED"} />
            <StarElement title={"MIND - BENDING"} />
            <StarElement title={"COLLECTION OG GAMES"} />
        </Marquee>
    )
}

export default StarComponent