import React from "react";
import {
  TopBody,
  Header,
  Footer,
  About,
  Summary,
  Slider,
  MainBody,
  Companies,
  BioGraphi,
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
      <BioGraphi />
      <Slider />
      <Summary />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
