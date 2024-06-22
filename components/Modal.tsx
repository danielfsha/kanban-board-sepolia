"use client";

import { useState } from "react";

import { TransactionButton } from "thirdweb/react";

import { priorities } from "@/data/task";
import { prepareContractCall } from "thirdweb";
import { CONTRACT } from "@/utils/constants";

type Props = {
  isOpen: boolean;
  toggleModal: () => void;
};

function Modal({ isOpen, toggleModal }: Props) {
  const [taskText, setTaskText] = useState<string>("");

  return (
    <div
      className={`${
        !isOpen && "opacity-0 hidden pointer-events-none"
      } fixed top-0 left-0 w-screen h-screen z-10`}
    >
      <div
        onClick={() => toggleModal()}
        className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-70"
      ></div>

      {/* card */}
      <div className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] card min-w-96 z-20">
        <div className="flex items-center justify-between">
          New Task
          <button onClick={() => toggleModal()} className="btn w-12 h-12">
            X
          </button>
        </div>

        <div className="flex flex-col space-y-4">
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            className="border-0 outline-none px-2"
            placeholder="enter task name...."
          />

          {/* <p> select level of priority</p>
          <div className="flex flex-wrap space-x-2">
            {priorities.map((p) => (
              <div
                onClick={() => alert(p)}
                className={`inline-flex 
                ${
                  p == "high"
                    ? "bg-red-200 text-red-600"
                    : p == "medium"
                    ? "bg-yellow-200 text-yellow-600"
                    : "bg-green-200 text-green-600"
                }}
                text-bold p-1 px-2 text-sm rounded-full`}
              >
                {p}
              </div>
            ))}
          </div> */}

          <TransactionButton
            transaction={() =>
              prepareContractCall({
                contract: CONTRACT,
                method: "createTask",
                params: [taskText.toString()],
              })
            }
          >
            Add new task
          </TransactionButton>
        </div>
      </div>
    </div>
  );
}

export default Modal;
