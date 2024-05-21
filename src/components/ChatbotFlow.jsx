import { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";
import SendMessage from "./SendMessage";
import CustomEdge from "./CustomEdge";
import showSaveAlert from "./SaveAlert";

const nodeTypes = {
  sendMessage: SendMessage,
};
const edgeTypes = {
  customEdge: CustomEdge,
};

export const initialNodes = JSON.parse(localStorage.getItem("nodes")) || [];
export const initialEdges = JSON.parse(localStorage.getItem("edges")) || [];

function ChatbotFlow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params) => {
      const edge = { ...params, id: `${Date.now()}`, type: "customEdge" };
      setEdges((prev) => addEdge(edge, prev));
    },
    [setEdges]
  );

  const drop = (e) => {
    const locationX = Math.random() * 500;
    const locationY = Math.random() * 500;
    if (
      e.dataTransfer.getData("Text") !== "" &&
      e.dataTransfer.getData("Text") !== undefined &&
      e.dataTransfer.getData("Text") !== null
    ) {
      setNodes((prev) => [
        ...prev,
        {
          id: `${Date.now()}`,
          position: { x: locationX, y: locationY },
          data: { text: e.dataTransfer.getData("Text") },
          type: "sendMessage",
        },
      ]);
    }
  };

  useEffect(() => {
    sessionStorage.setItem("nodes", JSON.stringify(nodes));
  }, [nodes]);

  useEffect(() => {
    sessionStorage.setItem("edges", JSON.stringify(edges));
  }, [edges]);

  return (
    <div
      onDrop={(e) => drop(e)}
      onDragOver={(e) => e.preventDefault()}
      className="w-[calc(100%-300px)] h-full p-4"
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}

export default ChatbotFlow;
