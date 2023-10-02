import { type CalendarGridProps } from "react-aria-components";
import type { CalendarState } from "react-stately";
import { useCalendarGrid, useCalendarCell } from "react-aria";
import { useState } from "react";

interface WeekCalendarGridProps extends CalendarGridProps {
  state: CalendarState;
}

export const MonthCalendarGrid = ({
  state,
  ...props
}: WeekCalendarGridProps) => {
  const { gridProps } = useCalendarGrid(props, state);
  const months = ["jan", "feb", "mar", ""];
  return (
    <table {...gridProps}>
      <tbody>
        <tr>
          {/* {state
            .getDatesInWeek(0)
            .map((date, i) => date && <CalendarCell key={i} date={date} />)} */}
          <div className="grid grid-cols-3">
            {months.map(
              (month, i) => month && <button key={i}>{month}</button>
            )}
          </div>
        </tr>
      </tbody>
    </table>
  );
};

interface monthCell {
  children: React.ReactNode;
}
export const monthCell = ({ children }: monthCell) => {
  const a = useCalendarCell();
  return <button>{children}</button>;
};
