import React from "react";

export default function Habit({ habit, onToggleHabit, onDeleteHabit }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={habit.completed}
        onChange={() => onToggleHabit(habit.id)}
        style={{ marginRight: "10px" }}
      />
      <span
        style={{
          flexGrow: 1,
          textDecoration: habit.completed ? "line-through" : "none",
        }}
      >
        {habit.name}
      </span>
      <button onClick={() => onDeleteHabit(habit.id)}>Delete</button>
    </li>
  );
}
