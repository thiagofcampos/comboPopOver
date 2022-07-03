export interface TextContent {
  type: "text";
  value: string;
  callback: () => void;
}

export interface LinkContent {
  type: "link";
  text: string;
  url: string;
}

export interface ActionButtonProps {
  list?: (TextContent | LinkContent)[];
}
