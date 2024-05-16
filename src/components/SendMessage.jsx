import PropTypes from "prop-types";
import { Handle, Position, useReactFlow } from "reactflow";

import message from "./src/assets/message.svg";
import whatsapp from "./src/assets/whatsapp.svg";

function SendMessage({ data }) {
  const { setNodes } = useReactFlow();

  const deleteNode = () => {
    console.log("Deleting...");
    setNodes((prevNodes) => prevNodes.filter((node) => node.id !== data.id));
  };

  return (
    <div className="w-[220px] h-fit flex flex-col justify-start items-center gap-0 rounded-[10px] bg-white overflow-hidden shadow-2xl ">
      <div className="w-full px-2 py-1 bg-[#b1ede3] grid grid-cols-[16px_1fr_16px]">
        <div className="aspect-square h-full flex justify-center items-center p-[2px]">
          <img
            src={message}
            alt=""
            height={16}
            width={16}
            className="size-full"
          />
        </div>
        <p className="text-[0.9rem] text-center font-semibold">Send Message</p>
        <div
          onClick={() => deleteNode()}
          className="aspect-square h-full flex justify-center items-center hover:cursor-pointer p-1 rounded-full bg-white"
        >
          {/* <img
            src="./src/assets/cross.svg"
            alt="X"
            height={16}
            width={16}
            className="size-full"
          /> */}
          <img
            src={whatsapp}
            alt=""
            height={16}
            width={16}
            className="size-full"
          />
        </div>
      </div>

      <p className="w-full h-fit text-left text-[0.9rem] p-2">{data.text}</p>

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}

SendMessage.propTypes = {
  data: PropTypes.object,
};

export default SendMessage;
