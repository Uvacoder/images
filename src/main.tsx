import App from "./App";
import ReactDOM from "react-dom";
import { ThemeProvider } from "./styles/ThemeProvider";
import { AppProvider } from "./shared/context/AppProvider";

ReactDOM.render(
  <AppProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </AppProvider>,
  document.getElementById("root")
);
