import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export function CustomModal({
	isOpen,
	onClose,
	children,
}: { isOpen: boolean; onClose: () => void } & React.PropsWithChildren) {
	useEffect(() => {
		function handler(e: KeyboardEvent) {
			if (e.key === "Escape") onClose();
		}

		document.addEventListener("keydown", handler);

		return () => {
			document.removeEventListener("keydown", handler);
		};
	}, [onClose]);

	return createPortal(
		<div className={`modal-overlay ${isOpen && "show"}`} onClick={onClose}>
			<div onClick={(e) => e.stopPropagation()} className="modal">
				{children}
			</div>
		</div>,
		document.querySelector("#alert")!,
	);
}
