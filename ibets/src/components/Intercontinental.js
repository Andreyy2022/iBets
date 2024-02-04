import { useState } from "react";

function Intercontinental({homePageIntercontinental}) {
    const [value, setValue] = useState('');

    const text = `В Межконтинентальном кубке учавствуют команды "Бавария" (Германия) и "Ливерпуль"(Англия). 
        Футбольный чемпионат пройдет ${matchDate()} в Англии.`

    function matchDate() {
        const date = new Date();
        date.setMonth(date.getMonth() + 2);
    
        return date.toLocaleDateString();
    }

    function changeHandler(event) {
		setValue(event.target.value);
        showButton();
	}

    function showButton() {
        return value ? <button onClick={homePageIntercontinental}>Сделать ставку</button> : '';
    }

	const outputRadio = <div>
        <label> Ставки на спорт:
            <br/>
            <div>
                <input
                    type = "radio"
                    name = "radio"
                    value = "1"
                    checked = {value == '1' ? true : false}
                    onChange = {changeHandler}
                />
                <label>на победу хозяев</label>
            </div>
            <div>
                <input
                    type = "radio"
                    name = "radio"
                    value = "2"
                    checked = {value == '2' ? true : false}
                    onChange = {changeHandler}
                />
                <label>на ничью</label>
            </div>
            <div>
                <input
                    type = "radio"
                    name = "radio"
                    value = "3"
                    checked = {value == '3' ? true : false}
                    onChange = {changeHandler}
                />
                <label>на победу гостей</label>
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

export default Intercontinental;