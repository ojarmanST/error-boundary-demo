import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  /*error boundaries in react need to be class components because
  they need to take advantage of the static method below */

  // this function runs during the 'render' phase
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // this function runs during the 'commit' phase
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
