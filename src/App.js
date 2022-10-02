import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="text-center">
          <header className="App-header">Dictionary</header>
          <main>
            <Dictionary defaultKeyword="Dictionary" />
          </main>
          <footer className="App-footer">
            <a href="https://github.com/Rae40/dictionary-react">Coded by </a>{" "}
            Renee Christian
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
