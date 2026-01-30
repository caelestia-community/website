import type { MDXComponents } from 'mdx/types';

const components = {} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
