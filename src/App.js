import Header from "./components/Header";
import Signup from "./components/Signup";
function App() {
  return (
    <div className="app">
      <main className="flex flex-col flex-center">
        <Header />
        <Signup />
      </main>
    </div>
  );
}

export default App;
