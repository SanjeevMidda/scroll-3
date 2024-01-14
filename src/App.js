import { useEffect, useState } from "react";
import "./index.css";

function App() {
  let position = () => {
    console.log(window.scrollY);
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", position);
  }, []);

  const [scrollPosition, setScrollPosition] = useState(0);

  return (
    <div className="App">
      <div className="circle" style={{ opacity: scrollPosition < 50 ? 1 : 0 }}>
        <h1>hello</h1>
      </div>
      <h1 style={{ opacity: scrollPosition < 100 ? 1 : 0 }}>1.</h1>
      <h1 style={{ opacity: scrollPosition < 150 ? 1 : 0 }}>2.</h1>
      <h1 style={{ opacity: scrollPosition < 200 ? 1 : 0 }}>3.</h1>
      <h1 style={{ opacity: scrollPosition < 250 ? 1 : 0 }}>4.</h1>
      <h1 style={{ opacity: scrollPosition < 300 ? 1 : 0 }}>5.</h1>
      <h1 style={{ opacity: scrollPosition < 350 ? 1 : 0 }}>6.</h1>
      <h1 style={{ opacity: scrollPosition < 400 ? 1 : 0 }}>7.</h1>
      <h1 style={{ opacity: scrollPosition < 450 ? 1 : 0 }}>8.</h1>
      <h1 style={{ opacity: scrollPosition < 500 ? 1 : 0 }}>9.</h1>
      <h1 style={{ opacity: scrollPosition < 550 ? 1 : 0 }}>10</h1>
    </div>
  );
}

export default App;
