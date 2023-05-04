import withErrorBoundary from "./withErrorBoundary";

function NoErrorComponent() {
  return <div>No Error Here!! I'm displaying.</div>;
}

export default withErrorBoundary(NoErrorComponent);
