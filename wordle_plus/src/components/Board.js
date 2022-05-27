import Row from "./Row";
import "../css/board.css";

function Board() {
    return (
        <div>
            <div id="board" class="center">
                <Row/>
                <Row/>
                <Row/>
                <Row/>
                <Row/>           
                <div class="ui button" id="button">Guess</div> 
            </div>
        </div>
        
    );
}

export default Board;