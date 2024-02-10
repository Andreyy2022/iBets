import { useState } from "react";

function Europe({homePageEurope, valueChoice, setValueChoice, matchs, choicePoints}) {
    const [value, setValue] = useState('');

    const text = `В Кубке европейских чемпионов учавствуют команды "Реал Мадрит" (Испания) и "Милан"(Италия). 
        Футбольный чемпионат пройдет ${matchDate()} в Испании.`

    function matchDate() {
        const date = new Date();
        date.setMonth(date.getMonth() + 1);
    
        return date.toLocaleDateString();
    }

    function changeHandler(event) {
		setValue(event.target.value);
        showButton();
        setValueChoice({...valueChoice, ['match']: matchs[0]});
	}

    function showButton() {
        return value ? <button className="btn" onClick={() => homePageEurope('bet', value)}>Сделать ставку</button> : '';
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
        <div>{showButton()}</div>
    </div>
}

export default Europe;