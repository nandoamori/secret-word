import "./GameOver.css";

function GameOver({retry, score}) {
  return (
    <div>
        <h1>Fim de jogo</h1>
        <h2>Pontuação: <span>{score}</span></h2>
        <button onClick={retry}>Reiniciar jogo</button>
    </div>
  )
}

export default GameOver