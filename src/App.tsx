import "./App.scss";
import { Footer, Header } from "./components";
import { Home } from "./page";

const App = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Home */}
      <Home />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
