import { useCallback } from "react";
import {
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  useReactFlow,
} from "@xyflow/react";

import { useSelector, useDispatch } from "react-redux";
import { addType } from "../Store/DnDSlice";

import Sidebar from "./Sidebar";
import BackgroundFlow from "./BackgroundFlow";

import "@xyflow/react/dist/style.css";
import "../styles/Flow.css";

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "input node" },
    position: { x: 250, y: 5 },
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();
  const dispatch = useDispatch();

  const type = useSelector((store) => {
    return store.dnd.type;
  });

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      if (!type) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, type]
  );

  const onDragStart = (event, nodeType) => {
    dispatch(addType(nodeType));
    event.dataTransfer.setData("text/plain", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="dndflow">
      <div className="reactflow-wrapper">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          fitView
          style={{ backgroundColor: "#F7F9FB" }}
        >
          <BackgroundFlow />
          <Controls />
        </ReactFlow>
      </div>
      <Sidebar />
    </div>
  );
}

export default Flow;
