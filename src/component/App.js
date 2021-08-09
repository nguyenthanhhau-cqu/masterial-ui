import { ThemeProvider } from "@material-ui/core/styles";
import Header from "./ui/Header";
import theme from "./ui/Theme";
import Footer from "./ui/Footer";
import { useState } from "react";
import LandingPage from "./ui/LandingPage";

import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState(0);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header
          value={value}
          setValue={setValue}
          selected={selected}
          setSelected={setSelected}
        />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/services"
            component={() => <div> This is a hoservicesme function</div>}
          />
          <Route
            exact
            path="/custom-software"
            component={() => <div> This is a software function</div>}
          />
          <Route
            exact
            path="/mobile-apps"
            component={() => <div> This is a mobile function</div>}
          />
          <Route
            exact
            path="/websites"
            component={() => <div> This is a websites function</div>}
          />
          <Route
            exact
            path="/revolution"
            component={() => <div> This is a revolution function</div>}
          />
          <Route
            exact
            path="/about"
            component={() => <div> This is a path="/about" function</div>}
          />
          <Route
            exact
            path="/contact"
            component={() => <div> This is a contact function</div>}
          />
          <Route
            exact
            path="/estimate"
            component={() => <div> This is a estimate function</div>}
          />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selected={selected}
          setSelected={setSelected}
        />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
