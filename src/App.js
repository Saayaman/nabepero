import React from "react";
import {
  TopBody,
  Header,
  Footer,
  About,
  MainBody,
  ContactForm
} from "components";

function App() {
  return (
    <div className="App">
      <Header />
      <TopBody />
      <About />
      <MainBody />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
