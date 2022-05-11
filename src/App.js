import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Questions from "./components/Questions";

const projectName = "Accordion Project";

const App = () => {
  return (
    <div className="bg-red-400 min-h-screen w-screen h-auto flex">
      <main className="container w-4/5 max-w-2xl mx-auto flex flex-col justify-center items-center">
        <Header projectName={projectName} />
        <Questions />
        <Footer />
      </main>
    </div>
  );
};
export default App;
