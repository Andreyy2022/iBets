import { useState } from "react";

function Uefa({homePageUefa, valueChoice, setValueChoice, matchs, choicePoints}) {
    const [value, setValue] = useState('');

    const text = `В Кубке УЕФА учавствуют команды "Галатасарай" (Турция) и "Гётеборг"(Швеция). 
        Футбольный чемпионат пройдет ${matchDate()} в Турции.`

    function matchDate() {
        const date = new Date();
        date.setDate(date.getDate() + 35);
    
        return date.toLocaleDateString();
    }

    function changeHandler(event) {
		setValue(event.target.value);
        showButton();
        setValueChoice({...valueChoice, ['match']: matchs[1]});
	}

    function showButton() {
        return value ? <button className="btn" onClick={() => homePageUefa('bet', value)}>Сделать ставку</button> : '';
    }

	const outputRadio = <div>
        <label>Ставка на спорт:
            <br/>
            <div className="listItemsCSScomp">
                <div>
                    <input
                        type = "radio"
                        name = "radio"
                        value = "1"
                        checked = {value == '1' ? true : false}
                        onChange = {changeHandler}
                    />
                    <label>{choicePoints[0]}</label>
                </div>
                <div>
                    <input
                        type = "radio"
                        name = "radio"
                        value = "2"
                        checked = {value == '2' ? true : false}
                        onChange = {changeHandler}
                    />
                    <label>{choicePoints[1]}</label>
                </div>
                <div>
                    <input
                        type = "radio"
                        name = "radio"
                        value = "3"
                        checked = {value == '3' ? true : false}
                        onChange = {changeHandler}
                    />
                    <label>{choicePoints[2]}</label>
                </div>
            </div>
        </label>    
	</div>

    return <div>
        <div>{text}</div>
        <br/>
        <div>{outputRadio}</div>
        {showButton()}
    </div>
}

export default Uefa;