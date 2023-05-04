import logo from "./logo.svg";
import "./App.css";
import { Suspense } from "react";
import Grid from "./Grid";
import Card from "./Card";
import Data from "./Data";
function App() {
  return (
    <Grid>
      <Card>
        <Suspense fallback="Loading...">
          <Data type="Users" />
        </Suspense>
      </Card>

      <Card>
        <Suspense fallback="Loading...">
          <Data type="Comments" />
        </Suspense>
      </Card>

      <Card>
        <Suspense fallback="Loading...">
          <Data type="Posts" />
        </Suspense>
      </Card>
    </Grid>
  );
}

export default App;
