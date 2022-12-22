import {useSearchParams} from "react-router-dom";

export function Menu2({location}) {
    if (location !== null && typeof location.state !== "undefined")
    localStorage.setItem("safe", location.state)

    const [searchParams] = useSearchParams();
    let op;
    function func() {
        let result;
        let num1 = Number(document.getElementById("num1").value);
        let num2 = Number(document.getElementById("num2").value);
        switch (op) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }
        document.getElementById("result").innerHTML = result;

    }
    return (
        <div>
            <div style={{marginTop: "5vh", marginBottom: "5vh"}}><b>Подменю 2</b></div>
            <div>
                <input id="num1" />

                <div id="operator_btns">
                    <button id="plus" onClick={() => {op='+'}}>+</button>
                    <button id="minus" onClick={() => {op='-'}}>-</button>
                    <button id="times" onClick={() => {op='*'}}>x</button>
                    <button id="divide" onClick={() => {op='/'}}>:</button>
                </div>

                <input id="num2" placeholder="?y=..." value={searchParams.get("y")}/>
                <br/>

                <button onClick={() => func()}>Посчитать</button>
                <p id="result"></p>
            </div>
        </div>
    )
}