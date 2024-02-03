
function App() {
  
  const matchs = [
    'Кубок европейских чемпионов',
    'Кубок УЕФА', 
    'Межконтинентальный кубок', 
    'Клубный чемпионат мира', 
    'Кубок Интертото'
  ];

  let list = matchs.map((match, index) => {
    return <li key={index}>
      {match}
    </li>
  });

  return (
    <div>
      <ul>
        {list}
      </ul>
    </div>
  );
}

export default App;
