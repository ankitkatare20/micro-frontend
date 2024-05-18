import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";

import App from "./App";

const mount = (el, { onSignIn, onNavigate, defaultHistory, initalPath }) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initalPath],
  });
  
  if(onNavigate){
      history.listen(onNavigate)
  }

  ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el);

  // following code for handling navigation parent & child
  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if(pathname !== nextPathname){
        history.push(nextPathname)
      }
    }
  }

};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#dev-auth");

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() }); // defaultHistory is used to run app in isolation
  }
}

export { mount };
