import { useState } from "react";

//images
import PlatoImage from "./img/plato.png";
import LeafImage from "./img/leaf.svg";

import MainBackground from "./background";

//import css here
import "./css/reset.css";
import "./css/App.css";

const questions = [
  {
    pergunta:
      "Aristóteles está errado em sua teoria porque ele gosta de frutas, e isso é inaceitável! A falácia apresentada pelo personagem tem o nome de:",
    respostas: [
      { alt: "a) ignorância da questão", res: false },
      { alt: "b) ad hominem", res: true },
      { alt: "c) apelo à emoção", res: false },
    ],
  },
  {
    pergunta:
      "Foi apresentada uma teoria que concluiria essa questão filosófica. Mas o pensador é Aristóteles. Logo, a teoria é péssima! O personagem usa uma falácia de que nome?",
    respostas: [
      { alt: "a) Falácia genética", res: true },
      { alt: "b) ad hominem", res: false },
      { alt: "c) Falácia de ambiguidade", res: false },
    ],
  },
  {
    pergunta: "Qual falácia abaixo é um exemplo de Falácia do apelo ao povo?",
    respostas: [
      {
        alt: "a) Claro que Aristóteles dirá que gosta de Sócrates. Ele seria julgado se negasse isso.",
        res: false,
      },
      {
        alt: "b) Argumentaram que Aristóteles é bonito. Mas o autor era um homossexual. Logo, o argumento é falso.",
        res: false,
      },
      {
        alt: "c) Como é que tu não odeias Aristóteles? Milhares de pessoas o odeiam.",
        res: true,
      },
    ],
  },
  {
    pergunta:
      "Qual o nome da falácia a seguir: Você deveria odiar Aristóteles assim como eu. Se não odiá-lo, como vou conseguir viver com isso? Perderei o sono, será horrível!",
    respostas: [
      { alt: "a) Falácia do apelo ao povo", res: false },
      { alt: "b) Falácia do apelo à falsa autoriedade", res: false },
      { alt: "c) Falácia do apelo à emoção", res: true },
    ],
  },
  {
    pergunta:
      '"Minha mãe disse que Aristóteles é um homem em que não se pode confiar. Logo, Aristóteles não é confiável." O personagem usa uma falácia de que nome?',
    respostas: [
      { alt: "a) Falácia de ambiguidade", res: false },
      { alt: "b) Falácia do apelo à falsa autoriedade", res: true },
      { alt: "c) Falácia do apelo à emoção", res: false },
    ],
  },
  {
    pergunta:
      "Iacubus diz que eu sou lento, mas e ele que é uma tartaruga A falácia apresentada pelo personagem tem o nome de:",
    respostas: [
      { alt: "a) tu quoque", res: true },
      { alt: "b) ad hominem", res: false },
      { alt: "c) apelo à emoção", res: false },
    ],
  },
  {
    pergunta:
      "O professor deve dar uma boa nota aos alunos, porque eles pobrezinhos se esforçaram muito A falácia apresentada pelo personagem tem o nome de:",
    respostas: [
      { alt: "a) ignorância da questão", res: false },
      { alt: "b) tu quoque", res: false },
      { alt: "c) apelo à emoção", res: true},
    ],
  },
  {
    pergunta:
      "Avalie o argumento abaixo e escolha a opção adequada. “Se tem alguém no quarto, então a luz está ligada. Mas a luz não está ligada. Logo, não há ninguém no quarto.”:",
    respostas: [
      { alt: "a) Modus ponens", res: false },
      { alt: "b) Modus tollens", res: true },
      { alt: "c) Falácia da negação do antecedente", res: false },
    ],
  },
  {
    pergunta:
       'O boxe é um esporte inseguro e arriscado; logo, o boxe é perigoso” A falácia apresentada pelo personagem tem o nome de:',
    respostas: [
      { alt: "a) tu quoque", res: false },
      { alt: "b) peticão de princípio", res: true },
      { alt: "c) apelo à emoção", res: false },
    ],
  },
  {
    pergunta:
    '"Se a arma tiver digitais ele é o assasino, porém a arma não tinha digitais, logo ele não é o assasino." O argumento é um:',
    respostas:[
      {alt: "Modus Tollens", res:false},
      {alt: "Falácia do Modus Thiagus", res:false},
      {alt: "Falácia da negação do antecedente", res:true}
    ]
  }
];

let jogo = Array.from(questions);

const App = () => {
  const [page, setPage] = useState(0);

  /*
 0 = titulo
 1 = regras
 2 = jogo
 3 = vencedor
 */

  const [team1, setTeam1] = useState(0);
  const [team2, setTeam2] = useState(0);
  const [team3, setTeam3] = useState(0);
  const [team4, setTeam4] = useState(0);

  const [index, setIndex] = useState(0);

  const [revealed, setRevealed] = useState(false);

  const [numero, setNumero] = useState(1);

  return (
    <div className="app">
      <div className="title-page-div">
        <MainBackground />

        {page == 0 ? (
          <>
            <h1>Argumentos & Falácias</h1>

            <div className="images">
              <img src={LeafImage} alt="decoration leaf" className="leaf" />

              <img src={PlatoImage} alt="plato lineart" className="plato-img" />

              <img
                src={LeafImage}
                alt="decoration leaf"
                className="leaf -right-leaf"
              />
            </div>

            <div className="buttons-wrapper">
              <button
                className="title-button"
                onClick={() => {
                  setPage(1);
                }}
              >
                Regras
              </button>
              <button
                className="title-button"
                onClick={() => {
                  setPage(2);
                }}
              >
                Jogar
              </button>
            </div>
          </>
        ) : page == 1 ? (
          <>
            <h1>Regras do Jogo</h1>

            <ul className="regras-ul">
              <li className="regras-li">Se separem em 4 equipes</li>
              <li className="regras-li">Cada Pergunta vale 1 ponto</li>
              <li className="regras-li">
                Clique em uma alternativa para ver se acertou
              </li>
              <li className="regras-li">
                Vence quem tiver mais pontos após 10 perguntas
              </li>
            </ul>

            <div className="buttons-wrapper">
              <button
                className="title-button"
                onClick={() => {
                  setPage(0);
                }}
              >
                Voltar
              </button>
              <button
                className="title-button"
                onClick={() => {
                  setPage(2);
                }}
              >
                Jogar
              </button>
            </div>
          </>
        ) : page == 2 ? (
          <>
            <div className="game">
              <div className="pergunta-resposta">
                <h2 className="pergunta">
                  {numero}) {jogo[index].pergunta}
                </h2>

                <ul>
                  <li
                    className="resposta"
                    style={
                      revealed
                        ? jogo[index].respostas[0].res
                          ? { color: "#51764c" }
                          : { color: "#bb4a46" }
                        : { color: "black" }
                    }
                  >
                    {jogo[index].respostas[0].alt}
                  </li>
                  <li
                    className="resposta"
                    style={
                      revealed
                        ? jogo[index].respostas[1].res
                          ? { color: "#51764c" }
                          : { color: "#bb4a46" }
                        : { color: "black" }
                    }
                  >
                    {jogo[index].respostas[1].alt}
                  </li>
                  <li
                    className="resposta"
                    style={
                      revealed
                        ? jogo[index].respostas[2].res
                          ? { color: "#51764c" }
                          : { color: "#bb4a46" }
                        : { color: "black" }
                    }
                  >
                    {jogo[index].respostas[2].alt}
                  </li>
                </ul>

                <div className="game-buttons">
                  <button
                    className="title-button"
                    onClick={() => {
                      setRevealed(true);
                    }}
                  >
                    Revelar
                  </button>
                  <button
                    className="title-button"
                    onClick={() => {
                      jogo.splice(index, 1)
                      setIndex(Math.floor(Math.random() * jogo.length));
                      setRevealed(false);
                      numero == 10 ? setPage(3) : setNumero(numero + 1);
                    }}
                  >
                    Próxima
                  </button>
                </div>
              </div>

              <footer>
                <div className="equipe e1">
                  <h3>Equipe A</h3>
                  <div className="pontos">
                    <button
                      className="score-button e1"
                      onClick={() => setTeam1(team1 + 1)}
                    >
                      +
                    </button>
                    <b>{team1}</b>
                    <button
                      className="score-button e1"
                      onClick={() => setTeam1(team1 - 1)}
                    >
                      -
                    </button>
                  </div>
                </div>

                <div className="equipe e2">
                  <h3>Equipe B</h3>
                  <div className="pontos">
                    <button
                      className="score-button e2"
                      onClick={() => setTeam2(team2 + 1)}
                    >
                      +
                    </button>
                    <b>{team2}</b>
                    <button
                      className="score-button e2"
                      onClick={() => setTeam2(team2 - 1)}
                    >
                      -
                    </button>
                  </div>
                </div>

                <div className="equipe e3">
                  <h3>Equipe C</h3>
                  <div className="pontos">
                    <button
                      className="score-button e3"
                      onClick={() => setTeam3(team3 + 1)}
                    >
                      +
                    </button>
                    <b>{team3}</b>
                    <button
                      className="score-button e3"
                      onClick={() => setTeam3(team3 - 1)}
                    >
                      -
                    </button>
                  </div>
                </div>

                <div className="equipe e4">
                  <h3>Equipe D</h3>
                  <div className="pontos">
                    <button
                      className="score-button e4"
                      onClick={() => setTeam4(team4 + 1)}
                    >
                      +
                    </button>
                    <b>{team4}</b>
                    <button
                      className="score-button e4"
                      onClick={() => setTeam4(team4 - 1)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </footer>
            </div>
          </>
        ) : (
          <>
            {team1 > team2 && team1 > team3 && team1 > team4 ? (
              <h1>
                Parabéns <h1 className="e1">Equipe A</h1> vocês ganharam!
              </h1>
            ) : team2 > team1 && team2 > team3 && team2 > team4 ? (
              <h1>
                Parabéns <h1 className="e2">Equipe B</h1> vocês ganharam!
              </h1>
            ) : team3 > team1 && team3 > team2 && team3 > team4 ? (
              <h1>
                Parabéns <h1 className="e3">Equipe C</h1> vocês ganharam!
              </h1>
            ) : team4 > team1 && team4 > team2 && team4 > team3 ? (
              <h1>
                Parabéns <h1 className="e4">Equipe D</h1> vocês ganharam!
              </h1>
            ) : (
              <>
                <h1>Empatou! </h1> <h1>Parabéns para todos!!</h1>
              </>
            )}

            <button
              className="title-button"
              onClick={() => {
                setPage(0);
                setIndex(0);
                setNumero(1);
                setTeam1(0);
                setTeam2(0);
                setTeam3(0);
                setTeam4(0);
                setRevealed(false);
                jogo = Array.from(questions);
                console.log(jogo)
              }}
            >
              Terminar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default App;