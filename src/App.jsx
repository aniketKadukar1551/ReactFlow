import { Provider } from "react-redux";
import { ReactFlowProvider } from "@xyflow/react";

import AppRouter from "./AppRouter";

import "./styles/App.css";

import appStore from "./Store/appStore";

function App() {
  return (
    <div id="app">
      <ReactFlowProvider>
        <Provider store={appStore}>
          <AppRouter />
        </Provider>
      </ReactFlowProvider>
    </div>
  );
}

export default App;
