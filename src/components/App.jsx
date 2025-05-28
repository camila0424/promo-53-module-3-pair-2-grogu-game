import '../styles/App.scss';
import groguImage from '../images/grogu.webp';

function App() {
  return (
    
  <html lang="en">
    
    <body class="page">
      <header>
        <h1>¡Cuidado con Grogu!</h1>
      </header>
      <main class="page">
        <section class="board">
          <div class="cell"><div class="grogu">👣</div></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
        </section>

        <section>
          <button class="dice">Lanzar Dado</button>
          <div class="game-status">En curso</div>
        </section>

        <section class="goods-container">
          <div class="goods-item">🍪</div>
          <div class="goods-item">🍪</div>
          <div class="goods-item">🍪</div>
        </section>
        <section class="goods-container">
          <div class="goods-item">🥚</div>
          <div class="goods-item">🥚</div>
          <div class="goods-item">🥚</div>
        </section>
        <section class="goods-container">
          <div class="goods-item">🐸</div>
          <div class="goods-item">🐸</div>
          <div class="goods-item">🐸</div>
        </section>
        <section>
          <button class="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </body>
  </html>
  );
}

export default App;
