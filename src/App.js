import logo from "./logo.svg";
import "./App.css";
import Quarter from "./Quarter";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Quarter />
      </div>
    </ChakraProvider>
  );
}

export default App;
