import back from "../assets/back.svg";

function MessagePanel() {
  const dragStart = (e) => {
    e.dataTransfer.setData("Text", e.target.value);
    console.log("Drag Start: ", e);
  };

  return (
    <div className="w-[300px] h-full flex flex-col justify-start items-start border border-solid border-gray-400">
      <div className="w-full p-2 grid grid-cols-[24px_1fr_24px] border-b border-b-solid border-b-gray-400">
        <div className="aspect-square h-full flex justify-center items-center p-[2px] hover:cursor-pointer">
          <img
            src={back}
            alt="<-"
            height={16}
            width={16}
            className="size-full"
          />
        </div>
        <div className="text-center">Messages</div>
        <div></div>
      </div>
      <div className="w-full h-fit p-2 border-b border-b-solid border-b-gray-400 flex flex-col justify-start items-start gap-2">
        <h3 className="text-gray-500">Text</h3>

        <textarea
          draggable
          onDragStart={(e) => dragStart(e)}
          className="w-full border border-solid border-gray-400 text-[0.9rem] cursor-grab active:cursor-grabbing p-2"
          rows={3}
        />

        <p className="text-[0.85rem] text-gray-500">
          Drag and drop the input field to the left section to add a new node.
        </p>
      </div>
    </div>
  );
}

export default MessagePanel;
