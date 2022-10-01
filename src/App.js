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
          <footer className="App-footer">Coded by Renee Christian</footer>
        </div>
      </div>
    </div>
  );
}

export default App;
