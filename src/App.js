import { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact";
import Main from "./components/Main";
import ProjectDetail from "./components/Projects/ProjectDetail";
import { ThemeProvider } from "./context/themeProvider";
import { GlobalStyle } from "./theme/GlobalStyles";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ThemeProvider>
        <GlobalStyle />
        <Suspense fallback={<div>...loading</div>}>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/project" component={Projects} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/project/:id" component={ProjectDetail} />
          </Switch>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
