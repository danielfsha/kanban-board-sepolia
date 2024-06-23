"use client";

import { Task } from "@/data/task";
import React, { useState } from "react";

function TaskCard({ task }) {
  const [isBeingDragged, setIsBeingDragged] = useState(false);

  return (
    <div>
      <div
        draggable
        onDragStart={(e) => {
          e.dataTransfer.setData("id", task.id);
          setIsBeingDragged(true);
        }}
        onDragEnd={() => {
          setIsBeingDragged(false);
        }}
        className={`${isBeingDragged && "isBeingDragged"} card`}
      >
        <h1 className="text-sm font-normal">{task.title}</h1>
        {/* <div
          className={`inline-block 
        ${
          task.priority == "high"
            ? "bg-red-200 text-red-600"
            : task.priority == "medium"
            ? "bg-yellow-200 text-yellow-600"
            : "bg-green-200 text-green-600"
        }}
        text-bold p-1 px-2 text-sm rounded-full`}
        >
          {task.priority}
        </div> */}
        <p className="opacity-75 text-sm">{task.timestamp}</p>
      </div>
    </div>
  );
}

export default TaskCard;
