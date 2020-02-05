import React from "react";
import {
  TopBody,
  Header,
  Footer,
  About,
  MainBody,
  Companies,
  ContactForm
} from "components";

function App() {
  return (
    <div className="App">
      <Header />
      <TopBody />
      <About />
      <MainBody />
      <Companies />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
