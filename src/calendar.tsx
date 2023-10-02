import { useState } from "react";
import { parseDate } from "@internationalized/date";
import { Calendar } from "react-aria-components";
import { MonthCalendarGrid } from "./monthPicker";
export const CalendarI = () => {
  const [startDate, setStartDate] = useState(parseDate("2020-02-03"));
  return (
    <Calendar
      aria-label="Appointment date"
      value={startDate}
      onChange={setStartDate}
    >
      {({ state }) => (
        <div
          className="week"
          style={{
            display: "grid",
            gridTemplateAreas: "heading heading heading previous grid next",
            alignItems: "center",
            justifyItems: "center",
            gap: "8px",
          }}
        >
          <button slot="previous">◀</button>
          <button slot="next">▶</button>
          <MonthCalendarGrid state={state} />
        </div>
      )}
      {/* <header>
        <button slot="previous">◀</button>
        {startDate.toString()}
        <button slot="next">▶</button>
      </header> */}
      {/* <CalendarGrid>{(date) => <CalendarCell date={date} />}</CalendarGrid> */}
      {/* <MonthCalendarGrid state={state} /> */}
    </Calendar>
  );
};
