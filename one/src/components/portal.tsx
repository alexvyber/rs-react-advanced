import { useState } from "react";
import { createPortal } from "react-dom";

export const Portal = () => {
	const [isOpen, setOpen] = useState(false);
	return (
		<>
			<button onClick={() => setOpen(true)}>Open Portal</button>
			<Alert isOpen={isOpen} onClose={() => setOpen(false)}>
				Some Text
			</Alert>
		</>
	);
};

function Alert({
	onClose,
	isOpen,
	children,
}: React.PropsWithChildren & { onClose: () => void; isOpen: boolean }) {
	if (!isOpen) return null;

	if (Math.random() > 0.75) throw new Error("Bah");

	return createPortal(
		<div
			onClick={onClose}
			style={{
				background: "rgba(0,0,0,.25)",
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				display: "flex",
				justifyContent: "center",
				placeItems: "center",
			}}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				style={{ background: "white", padding: "20px" }}
			>
				{children}
			</div>
		</div>,
		document.getElementById("alert")!,
	);
}
