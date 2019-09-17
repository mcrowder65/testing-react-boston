import React from "react";
import Markdown from "../reusable/markdown";

const Wrong = () => {
  const markdown = `
  \`\`\`js
  import React from "react";
  
  class Button extends React.Component {
  
    render() {
    
      return (
        <button>A button</button>
      )
    }
  }
  \`\`\`
  `;
  return <Markdown markdownSrc={markdown} />;
};

export default Wrong;
