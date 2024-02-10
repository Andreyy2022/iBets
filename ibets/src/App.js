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
      bet: '',
    };
  }

  function change(prop, value) {
    setValueChoice({...valueChoice, [prop]: value});
  }

  const listItems = <ul className="listItemsCSS">
    <li onClick={() => setEurope(true)}>{matchs[0]}</li>
    <li onClick={() => setUefa(true)}>{matchs[1]}</li>
    <li onClick={() => setIntercontinental(true)}>{matchs[2]}</li>
    <li onClick={() => setInternational(true)}>{matchs[3]}</li>
    <li onClick={() => setIntertoto(true)}>{matchs[4]}</li>
  </ul>;

  const ArrModuls = [
    {status: europe, 
     tag: <Europe 
      homePageEurope={homePageEurope} 
      valueChoice={valueChoice} 
      setValueChoice={setValueChoice}
      matchs={matchs}
      choicePoints={choicePoints}
      />
    },
    {status: uefa, 
     tag: <Uefa 
      homePageUefa={homePageUefa} 
      valueChoice={valueChoice} 
      setValueChoice={setValueChoice}
      matchs={matchs}
      choicePoints={choicePoints}
      />
    },
    {status: intercontinental,
     tag: <Intercontinental 
      homePageIntercontinental={homePageIntercontinental}
      valueChoice={valueChoice} 
      setValueChoice={setValueChoice}
      matchs={matchs}
      choicePoints={choicePoints}
      />
    },
    {status: international,
     tag: <International 
      homePageInternational={homePageInternational}
      valueChoice={valueChoice} 
      setValueChoice={setValueChoice}
      matchs={matchs}
      choicePoints={choicePoints} 
      />
    },
    {status: intertoto, 
     tag: <Intertoto 
      homePageIntertoto={homePageIntertoto}
      valueChoice={valueChoice} 
      setValueChoice={setValueChoice}
      matchs={matchs}
      choicePoints={choicePoints}
      />
    },
  ];

  function show() {
    for (let elem of ArrModuls) {
        if (elem.status) {
            return elem.tag;
        }
    }

    return listItems;
  }

  function homePageEurope(prop, valueRadio) {
    change(prop, betRadio(valueRadio));
    setEurope(false);
  }

  function homePageUefa(prop, valueRadio) {
    change(prop, betRadio(valueRadio));
    setUefa(false);
  }

  function homePageIntercontinental(prop, valueRadio) {
    change(prop, betRadio(valueRadio));
    setIntercontinental(false);
  }

  function homePageInternational(prop, valueRadio) {
    change(prop, betRadio(valueRadio));
    setInternational(false);
  }

  function homePageIntertoto(prop, valueRadio) {
    change(prop, betRadio(valueRadio));
    setIntertoto(false);
  }

  function betRadio(valueRadio) {
    return valueRadio == '1' ? choicePoints[0] :
      valueRadio == '2' ? choicePoints[1] :
      valueRadio == '3' ? choicePoints[2] :
      '';
  }

  function message() {
    if (valueChoice.match) {
      if (europe === false && uefa === false && intercontinental === false && international === false && intertoto === false) {
        return <div>Спасибо, Ваша ставка "{valueChoice.bet}" на игру "{valueChoice.match}" принята.</div>;
      } else {
        return '';
      }
    }
  }

  return (
    <div>
      <h2>
        Ставки на спорт
      </h2>
      <div className="messageCSS">
        {message()}
      </div>
      <div className="showCSS">
        {show()}
      </div>
      {console.log(valueChoice)}
    </div>
  );
}

export default App;
