import { useState } from "react";

function Intertoto({homePageIntertoto, valueChoice, setValueChoice, matchs, choicePoints}) {
    const [value, setValue] = useState('');
    
    const text = `В Кубке Инертото учавствуют команды "Олимпик марсель" (Франция) и "Мехелен"(Бельгия). 
        Футбольный чемпионат пройдет ${matchDate()} во Франции.`

    function matchDate() {
        const date = new Date();
        date.setDate(date.getDate() + 20);
    
        return date.toLocaleDateString();
    }

    function changeHandler(event) {
		setValue(event.target.value);
        showButton();
        setValueChoice({...valueChoice, ['match']: matchs[4]});
	}

    function showButton() {
        return value ? <button className="btn" onClick={() => homePageIntertoto('bet', value)}>Сделать ставку</button> : '';
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

export default Intertoto;