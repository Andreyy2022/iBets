function Europe({homePageEurope, value, setValue}) {

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
	}

    function showButton() {
        return value ? <button onClick={homePageEurope}>Сделать ставку</button> : '';
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

export default Europe;