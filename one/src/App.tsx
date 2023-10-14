import { useState } from "react";
import "./App.css";
import { DatePicker } from "./components/datepicker";
import { Using } from "./components/using-hook";
import { CallbackShit } from "./components/use-callback-shit";
// import { ErrorBoundary } from "./components/error-boundaries";
// import { Modal } from "./components/modal";
// import { Portal } from "./components/portal";

function App() {
	// const [value, setValue] = useState(new Date());
	return (
		<>
			{/* <Using /> */}
			<CallbackShit />
			{/* <DatePicker value={value} onChange={setValue} /> */}
			{/* <ErrorBoundary
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
			</ErrorBoundary> */}
		</>
	);
}

export default App;
