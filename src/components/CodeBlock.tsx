/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = ({
  language,
  value,
}: {
  language: string;
  value: string;
}) => {
  return (
    <div suppressHydrationWarning>
      <SyntaxHighlighter language={language} style={coy}>
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
