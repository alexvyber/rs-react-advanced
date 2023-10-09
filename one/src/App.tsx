import "./App.css";
import { ErrorBoundary } from "./components/error-boundaries";
import { Modal } from "./components/modal";

import { Portal } from "./components/portal";

function App() {
	return (
		<>
			<ErrorBoundary
				fallback={
					<>
						SOme Error
						<br />{" "}
						<button onClick={() => window.location.reload()}>Refresh</button>
					</>
				}
			>
				<Portal />
				<Modal />
			</ErrorBoundary>
		</>
	);
}

export default App;
