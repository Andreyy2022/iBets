import { useState } from "react";

function International({homePageInternational, valueChoice, setValueChoice, matchs, choicePoints}) {
    const [value, setValue] = useState('');

    const text = `В Клубном чепионате Мира учавствуют команды "Аякс" (Нидерланды) и "Порту"(Португалия). 
        Футбольный чемпионат пройдет ${matchDate()} в Нидерландах.`

    function matchDate() {
        const date = new Date();
        date.setDate(date.getDate() + 12);
    
        return date.toLocaleDateString();
    }

    function changeHandler(event) {
		setValue(event.target.value);
        showButton();
        setValueChoice({...valueChoice, ['match']: matchs[3]});
	}

    function showButton() {
        return value ? <button className="btn" onClick={() => homePageInternational('bet', value)}>Сделать ставку</button> : '';
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

export default International;