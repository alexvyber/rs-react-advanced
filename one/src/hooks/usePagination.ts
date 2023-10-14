import { useDebugValue } from "react";

const dotts = "...";

export function usePagination(
	totalItems: number,
	currentPage: number,
	itemsPerPage: number,
) {
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	let pages: (number | string)[] = [];

	switch (true) {
		// -> 1 2 3 4 5
		case totalPages <= 5:
			pages = getPages(totalPages);
			break;

		// -> 1 2 3 4 ... 10
		case currentPage <= 3:
			pages = [1, 2, 3, 4, dotts, totalPages];
			break;

		// -> 1 ... 4 5 6 ... 10
		case currentPage < totalPages - 2:
			pages = [
				1,
				dotts,
				currentPage - 1,
				currentPage,
				currentPage + 1,
				dotts,
				totalPages,
			];
			break;

		// -> 1 ... 7 8 9 10
		default:
			pages = [1, dotts, ...getPages(4, totalPages - 3)];
			break;
	}

	useDebugValue({ pages, totalPages });

	return { pages, totalPages };
}

function getPages(length: number, inc = 1) {
	return Array.from({ length }, (_, i) => i + inc);
}
