import clsx from "clsx";
import { usePagination } from "../hooks/usePagination";
import { useState } from "react";

const dotts = "...";

export function Using() {
	const [currentPage, setCurrentPage] = useState(5);

	const { pages, totalPages } = usePagination(156, currentPage, 10);
	return (
		<div>
			{pages.map((pageNumber, i) =>
				pageNumber === dotts ? (
					<span
						key={`${pageNumber}-${i}`}
						className="px-4 py-2 rounded-full text-sm font-semibold text-black"
					>
						{pageNumber}
					</span>
				) : (
					<a
						key={`${pageNumber}-${i}`}
						href={"/#"}
						className={clsx(
							"px-4 py-2 mx-1 rounded-full text-sm font-semibold no-underline",
							pageNumber === currentPage ? "text-primary  " : "text-black",
						)}
					>
						{pageNumber}
					</a>
				),
			)}
			- {totalPages}
			<div>
				<button onClick={() => setCurrentPage(currentPage + 1)}>+</button>
				<button onClick={() => setCurrentPage(currentPage - 1)}>-</button>
			</div>
		</div>
	);
}
