/** The page template owns H1; imported Markdown starts at H2. */
export default function articleHeadings() {
  return (tree) => {
    const visit = (node) => {
      if (node.type === 'heading' && node.depth === 1) node.depth = 2;
      for (const child of node.children ?? []) visit(child);
    };
    visit(tree);
  };
}
