import { PlusIcon } from "@heroicons/react/24/solid";
import React from "react";

const NewChat = () => {
  return (
    <div className="border-gray-700 border chatRow">
      <p>
        <PlusIcon className="h-4 w-45" />
        <p>New Chat</p>
      </p>
    </div>
  );
};

export default NewChat;
