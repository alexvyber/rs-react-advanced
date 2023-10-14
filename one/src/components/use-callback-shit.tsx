import { useCallback, useEffect, useRef, useState } from "react";

export function CallbackShit() {
	const [show, setShow] = useState(false);
	// const ref = useRef<React.ElementRef<"input">>(null)
	// Can't do that:
	// useEffect(() => {
	//   ref.current.focus()
	// }, [])

	// but can do this:
	const ref = useCallback<(input: HTMLInputElement) => void>(
		(input) => input?.focus(),
		[],
	);

	return (
		<>
			<button type="button" onClick={() => setShow((s) => !s)}>
				click
			</button>
			{show && <input type="text" ref={ref} />}
		</>
	);
}
