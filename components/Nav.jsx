"use client";

import { chain, client } from "@/utils/constants";
import { ConnectButton } from "thirdweb/react";

function Nav({}) {
  return (
    <div className="w-full flex items-center justify-between px-10 py-4">
      <div>Kanban board</div>

      <ConnectButton
        client={client}
        chain={chain}
        connectModal={{
          size: "compact",
        }}
      />
    </div>
  );
}

export default Nav;
