import {
  BezierEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
} from "reactflow";
import PropTypes from "prop-types";

import cross from "../assets/cross.svg";

function CustomEdge(data) {
  const { setEdges } = useReactFlow();
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  } = data;

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  return (
    <>
      <BezierEdge {...data} path={edgePath} />
      <EdgeLabelRenderer>
        <div
          onClick={() => setEdges((es) => es.filter((e) => e.id !== id))}
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: "all",
          }}
          className="size-6 font-semibold leading-4 text-[1.1rem] text-red-500 p-0 bg-white rounded-full border border-solid border-gray-400 flex justify-center items-center hover:cursor-pointer"
        >
          <img
            src={cross}
            alt="X"
            height={16}
            width={16}
            className="size-full"
          />
        </div>
      </EdgeLabelRenderer>
    </>
  );
}

CustomEdge.propTypes = {
  data: PropTypes.object,
};

export default CustomEdge;
