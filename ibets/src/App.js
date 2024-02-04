import { useState } from "react";
import Europe from "./components/Europe";
import Uefa from "./components/Uefa";
import Intercontinental from "./components/Intercontinental";
import International from "./components/International";
import Intertoto from "./components/Intertoto";

  const matchs = [
    'Кубок европейских чемпионов',
    'Кубок УЕФА', 
    'Межконтинентальный кубок', 
    'Клубный чемпионат мира', 
    'Кубок Интертото'
  ];

  const choicePoints = ['на победу хозяев', 'на ничью', 'на победу гостей'];

function App() {
  const [europe, setEurope] = useState(false);
  const [uefa, setUefa] = useState(false);
  const [intercontinental, setIntercontinental] = useState(false);
  const [international, setInternational] = useState(false);
  const [intertoto, setIntertoto] = useState(false);

  const [valueChoice, setValueChoice] = useState(getBet());

  function getBet() {
    let betObj;

    return betObj = {
      match: '',
      bet: ''
    };
  }

  function change(prop, value) {
    setValueChoice({...valueChoice, [prop]: value});
    
    console.log (valueChoice);
 }

  const listItems = <ul>
    <li onClick={() => setEurope(true)}>{matchs[0]}</li>
    <li onClick={() => setUefa(true)}>{matchs[1]}</li>
    <li onClick={() => setIntercontinental(true)}>{matchs[2]}</li>
    <li onClick={() => setInternational(true)}>{matchs[3]}</li>
    <li onClick={() => setIntertoto(true)}>{matchs[4]}</li>
  </ul>;

  const ArrModuls = [
    {status: europe, tag: 
      <Europe homePageEurope={homePageEurope} 
      valueChoice={valueChoice} 
      setValueChoice={setValueChoice}
      change={change}
      matchs={matchs}
      choicePoints={choicePoints}
      />},
    {status: uefa, tag: <Uefa homePageUefa={homePageUefa} />},
    {status: intercontinental, tag: <Intercontinental homePageIntercontinental={homePageIntercontinental} />},
    {status: international, tag: <International homePageInternational={homePageInternational} />},
    {status: intertoto, tag: <Intertoto homePageIntertoto={homePageIntertoto} />},
  ];

  function show() {
    for (let elem of ArrModuls) {
        if (elem.status) {
            return elem.tag;
        }
    }

    return listItems;
  }

  function homePageEurope(prop1, match, prop2, valueRadio) {
    change(prop1, match);
    change(prop2, betRadio(valueRadio));
    setEurope(false);

    console.log(valueChoice);
  }

  function homePageUefa() {
    setUefa(false);
  }

  function homePageIntercontinental() {
    setIntercontinental(false);
  }

  function homePageInternational() {
    setInternational(false);
  }

  function homePageIntertoto() {
    setIntertoto(false);
  }

  function betRadio(valueRadio) {
    return valueRadio == '1' ? choicePoints[0] :
    valueRadio == '2' ? choicePoints[1] :
    valueRadio == '3' ? choicePoints[1] :
    '';
  }

  return (
    <div>
      {show()}
    </div>
  );
}

export default App;
