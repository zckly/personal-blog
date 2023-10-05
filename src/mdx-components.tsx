import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <h1
        style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          marginBottom: "1rem",
        }}
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: 600,
          marginTop: ".5rem",
          marginBottom: "1rem",
        }}
        {...props}
      />
    ),
    p: (props) => (
      <p
        style={{
          fontSize: "1rem",
          fontWeight: 400,
          marginBottom: "1rem",
        }}
        {...props}
      />
    ),
    li: (props) => (
      <li
        style={{
          fontSize: "1rem",
          fontWeight: 400,
          marginBottom: ".5rem",
          listStyleType: "disc",
        }}
        {...props}
      />
    ),
    ...components,
  };
}
