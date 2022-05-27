import Cube from "./Cube";
import "../css/row.css";

function Row() {
    return (
        <div class="ui grid" id="row">
            <Cube/>
            <div/>
            <Cube/>
            <div/>
            <Cube/>
            <div/>
            <Cube/>
            <div/>
            <Cube/>
        </div>
    )
}

export default Row;