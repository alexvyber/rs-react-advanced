import { Component, ReactNode } from "react";

type State = {
	hasError: boolean;
	// getDerived:
};

type Props = {
	fallback: React.ReactNode;
} & React.PropsWithChildren;
export class ErrorBoundary extends Component<Props, State> {
	state = { hasError: false };

	public static getDerivedStateFromError(_: Error): State {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error("Uncaught error:", error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return this.props.fallback;
		}

		return this.props.children;
	}
}
