import "./App.css";
import NoErrorComponent from "./NoErrorComponent";
import YesErrorComponent from "./YesErrorComponent";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div>
      <ErrorBoundary fallback={<h1>There was an error</h1>}>
        <NoErrorComponent />
      </ErrorBoundary>

      <ErrorBoundary fallback={<h1>There was an error</h1>}>
        <YesErrorComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
