import "../styles/App.scss";
import Header from "./Header";
import Grogu from "./Grogu";
import Board from "./Board";

function App() {
  return (
    <div className="page">
      <Header />
      <main className="page">
        <Grogu />
        <Board />
      </main>
    </div>
  );
}

export default App;
