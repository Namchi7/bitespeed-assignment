function MessagePanel() {
  const dragStart = (e) => {
    e.dataTransfer.setData("Text", e.target.value);
    console.log("Drag Start: ", e);
  };

  return (
    <div className="w-[300px] h-full flex flex-col justify-start items-start border border-solid border-gray-400">
      <div className="w-full p-2 grid grid-cols-[24px_1fr_24px] border-b border-b-solid border-b-gray-400">
        <div className="">B</div>
        <div className="text-center">Messages</div>
        <div></div>
      </div>
      <div className="w-full h-fit p-2 border-b border-b-solid border-b-gray-400 flex flex-col justify-start items-start gap-2">
        <h3 className="text-gray-500">Text</h3>

        <textarea
          draggable
          onDragStart={(e) => dragStart(e)}
          className="w-full border border-solid border-gray-400"
          rows={3}
        />
      </div>
    </div>
  );
}

export default MessagePanel;
