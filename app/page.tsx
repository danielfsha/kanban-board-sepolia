"use client";

import { useEffect, useState } from "react";

import Nav from "@/components/Nav";
import KanbanBoard from "@/components/KanbanBoard";
import Modal from "@/components/Modal";
import ButtonAddTask from "@/components/ButtonAddTask";

import { useActiveAccount, useReadContract } from "thirdweb/react";
import { CONTRACT } from "@/utils/constants";
import { Task } from "@/data/task";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const account = useActiveAccount();

  const { data, isLoading } = useReadContract({
    contract: CONTRACT,
    method: "getAllTasksByUser",
    params: [account?.address.toString()],
  });

  console.log(data);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Nav />
      {account ? (
        <>
          <KanbanBoard tasks={data == undefined ? [] : data} />
          <Modal isOpen={isOpen} toggleModal={toggleModal} />
          <div className="fixed bottom-10 left-[50%] translate-x-[-50%]">
            <ButtonAddTask isOpen={isOpen} toggleModal={toggleModal} />
          </div>
        </>
      ) : (
        <h1 className="flex flex-1 items-center justify-center h-full w-full text-center">
          Make sure to connect your Wallet!
        </h1>
      )}
    </main>
  );
}
