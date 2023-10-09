import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function DialogModal({
	isOpen,
	onClose,
	children,
}: { isOpen: boolean; onClose: () => void } & React.PropsWithChildren) {
	const dialogRef = useRef<React.ElementRef<"dialog">>(null);
	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;

		if (isOpen) {
			dialogRef.current.showModal();
		} else {
			dialogRef.current.close();
		}
	}, [isOpen]);

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;

		dialog.addEventListener("close", onClose);

		return () => dialog.removeEventListener("close", onClose);
	}, [onClose]);

	return createPortal(
		<dialog
			ref={dialogRef}
			className={`modal-overlay ${isOpen && "show"}`}
			onClick={onClose}
		>
			{children}
		</dialog>,
		document.querySelector("#alert")!,
	);
}
