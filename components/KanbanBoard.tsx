"use client";

import { useEffect, useState } from "react";

import TaskCard from "./TaskCard";
import { tasks as intialTasks, statuses, Task, Status } from "@/data/task";
import { CONTRACT } from "@/utils/constants";
import { prepareContractCall } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";

type Props = {
  tasks: Array<Task> | [];
};

function KanbanBoard({ tasks }: Props) {
  const { mutate: sendTransaction, isPending } = useSendTransaction();

  const columns = statuses.map((status) => {
    const taskInColumn = tasks.filter((task) => task.status == status);
    return {
      title: status,
      tasks: taskInColumn,
    };
  });

  const handleDrop = async (
    e: React.DragEvent<HTMLDivElement>,
    status: Status,
  ) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");

    const transaction = await prepareContractCall({
      contract: CONTRACT,
      method: "updateTaskStatus",
      params: [BigInt(id), status],
    });

    sendTransaction(transaction);
  };

  return (
    <div className="flex items-start flex-1 space-x-4 px-10 ">
      {columns.map((column, columnIndex) => (
        <div
          className="column"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            {
              handleDrop(e, column.title);
            }
          }}
          key={columnIndex}
        >
          <h1 className="title capitalize">{column.title}</h1>
          {column.tasks.map((task, taskIndex) => (
            <TaskCard key={taskIndex} task={task} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;
