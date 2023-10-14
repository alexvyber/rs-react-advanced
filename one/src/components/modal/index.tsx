import { useState } from "react";
import { CustomModal } from "./custom";
import { DialogModal } from "./dialog";

export function Modal() {
	const [isOpen, setOpen] = useState(false);
	const [isDialogOpen, setDialogOpen] = useState(false);

	return (
		<>
			<button type="button" onClick={() => setOpen(true)}>
				Show
			</button>
			<button type="button" onClick={() => setDialogOpen(true)}>
				Show Dialog
			</button>
			<CustomModal isOpen={isOpen} onClose={() => setOpen(false)}>
				Some Stufff
			</CustomModal>
			<DialogModal isOpen={isDialogOpen} onClose={() => setDialogOpen(false)}>
				Some Other Stuff
			</DialogModal>
		</>
	);
}
