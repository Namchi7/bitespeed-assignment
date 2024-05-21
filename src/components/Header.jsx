import { showSaveAlert } from "./SaveAlert";

function Header() {
  const checkUnconnectedNodes = (nodes, edges) => {
    const nodeIds = nodes.map((nds) => nds.id);
    const edgeSources = edges.map((eds) => eds.source);
    const edgeTargets = edges.map((eds) => eds.target);
    const nodeIdsInEdges = [...new Set([...edgeSources, ...edgeTargets])];

    let allConnected = true;

    nodeIds.forEach((id) => {
      if (nodeIdsInEdges.includes(id)) {
        allConnected = allConnected && true;
      } else {
        allConnected = allConnected && false;
      }
    });

    return allConnected;
  };

  const saveChanges = () => {
    const nodes = sessionStorage.getItem("nodes");
    const edges = sessionStorage.getItem("edges");

    const connected = checkUnconnectedNodes(
      JSON.parse(nodes),
      JSON.parse(edges)
    );

    if (connected) {
      localStorage.setItem("nodes", nodes);
      localStorage.setItem("edges", edges);
      showSaveAlert(true, "Saved");
    } else {
      showSaveAlert(false, "Cannot save Flow");
    }
  };

  return (
    <div className="w-full flex justify-end items-center py-2 px-10 bg-[#f3f3f3]">
      <button
        onClick={() => saveChanges()}
        data-save-changes
        className="text-[#5555de] font-medium border-[2px] border-solid border-[#8189c5] rounded-[5px] px-2 py-1"
      >
        Save Changes
      </button>
    </div>
  );
}

export default Header;
