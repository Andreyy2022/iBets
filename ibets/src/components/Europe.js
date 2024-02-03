import { useState } from "react";

function Europe() {
    const [radioValue, setRadoiValue] = useState(1);

    const text = `В Кубке европейских чемпионов учавствуют команды "Реал Мадрит" (Испания) и "Милан"(Италия). 
        Футбольный чемпионат пройдет ${matchDate()} в Испании.`

    function matchDate() {
        const date = new Date();
        date.setMonth(date.getMonth() + 1);
    
        return date.toLocaleDateString();
    }

    function changeHandler(event) {
		setRadoiValue(event.target.value);
	}
	
	const outputRadio = <div>
		<input
			type="radio"
			name="radio"
			radioValue="1"
			checked={radioValue == '1' ? true : false}
			onChange={changeHandler}
		/>
		<input
			type="radio"
			name="radio"
			radioValue="2"
			checked={radioValue == '2' ? true : false}
			onChange={changeHandler}
		/>
		<input
			type="radio"
			name="radio"
			radioValue="3"
			checked={radioValue == '3' ? true : false}
			onChange={changeHandler}
		/>
	</div>

    return <div>
        <div>{text}</div>
        <div>{outputRadio}</div>
    </div>
}

export default Europe;