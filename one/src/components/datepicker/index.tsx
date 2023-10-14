import { useDebugValue, useState } from "react";
import {
	addMonths,
	eachDayOfInterval,
	endOfMonth,
	endOfWeek,
	format,
	isSameDay,
	isSameMonth,
	isToday,
	startOfMonth,
	startOfWeek,
} from "date-fns";
import clsx from "clsx";

export function DatePicker({
	value,
	onChange,
}: React.ComponentProps<typeof DatePickerModal>) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="date-picker-container">
			<button
				className="date-picker-button"
				onClick={() => setIsOpen((o) => !o)}
			>
				{value == null ? "Select a Date" : format(value, "MMM do, yyyy")}
			</button>
			{isOpen && (
				<DatePickerModal
					onChange={(date) => {
						onChange(date);
						// setIsOpen(false);
					}}
					value={value}
				/>
			)}
		</div>
	);
}

function DatePickerModal({
	value,
	onChange,
}: { value: Date; onChange: (date: Date) => void }) {
	const [visibleMonth, setVisibleMonth] = useState(value || new Date());

	const visibleDates = eachDayOfInterval({
		start: startOfWeek(startOfMonth(visibleMonth)),
		end: endOfWeek(endOfMonth(visibleMonth)),
	});

	function showPreviousMonth() {
		setVisibleMonth((currentMonth) => {
			return addMonths(currentMonth, -1);
		});
	}

	function showNextMonth() {
		setVisibleMonth((currentMonth) => {
			return addMonths(currentMonth, 1);
		});
	}

	return (
		<div className="date-picker">
			<div className="date-picker-header">
				<button
					className="prev-month-button month-button"
					onClick={showPreviousMonth}
				>
					&larr;
				</button>
				<div className="current-month">
					{format(visibleMonth, "MMMM - yyyy")}
				</div>
				<button
					className="next-month-button month-button"
					onClick={showNextMonth}
				>
					&rarr;
				</button>
			</div>
			<div className="date-picker-grid-header date-picker-grid">
				<div>Sun</div>
				<div>Mon</div>
				<div>Tue</div>
				<div>Wed</div>
				<div>Thu</div>
				<div>Fri</div>
				<div>Sat</div>
			</div>
			<div className="date-picker-grid-dates date-picker-grid">
				{visibleDates.map((date) => (
					<button
						onClick={() => onChange(date)}
						className={clsx(
							"date",
							!isSameMonth(date, visibleMonth) &&
								"date-picker-other-month-date",
							isSameDay(date, value) && "selected",
							isToday(date) && "today",
						)}
						key={date.toDateString()}
					>
						{date.getDate()}
					</button>
				))}
			</div>
		</div>
	);
}
