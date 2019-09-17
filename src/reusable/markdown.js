import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/cjs/styles/hljs";

function CodeBlock(props) {
  const { language, value } = props;
  return (
    <SyntaxHighlighter language={language} style={coy}>
      {value}
    </SyntaxHighlighter>
  );
}

CodeBlock.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string
};

CodeBlock.defaultProps = {
  language: null
};

function Markdown(props) {
  return (
    <ReactMarkdown
      source={props.markdownSrc}
      skipHtml={props.htmlMode === "skip"}
      escapeHtml={props.htmlMode === "escape"}
      renderers={{ code: CodeBlock }}
    />
  );
}

export default Markdown;
