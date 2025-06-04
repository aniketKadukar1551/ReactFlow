import { Background, BackgroundVariant } from "@xyflow/react";

const BackgroundFlow = () => {
  return (
    <div>
      <Background
        id="1"
        gap={10}
        color="#f1f1f1"
        variant={BackgroundVariant.Lines}
      />
      <Background
        id="2"
        gap={100}
        color="#ccc"
        variant={BackgroundVariant.Lines}
      />
    </div>
  );
};

export default BackgroundFlow;
