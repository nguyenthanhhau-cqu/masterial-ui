import { ThemeProvider } from "@material-ui/core/styles";
import Header from "./ui/Header";
import theme from "./ui/Theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <div> This is a home function</div>}
          />
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
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
