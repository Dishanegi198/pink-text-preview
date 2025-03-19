
export interface FontOption {
  id: string;
  name: string;
  class: string;
  fallback: string;
}

export const fonts: FontOption[] = [
  {
    id: "pacifico",
    name: "Glamour",
    class: "font-pacifico",
    fallback: "cursive",
  },
  {
    id: "satisfy",
    name: "Dreamy",
    class: "font-satisfy",
    fallback: "cursive",
  },
  {
    id: "dancing",
    name: "Playful",
    class: "font-dancing",
    fallback: "cursive",
  },
  {
    id: "lobster",
    name: "Bold",
    class: "font-lobster",
    fallback: "cursive",
  },
  {
    id: "sacramento",
    name: "Elegant",
    class: "font-sacramento",
    fallback: "cursive",
  },
];

export const defaultFont = fonts[0];

export interface ColorOption {
  id: string;
  name: string;
  value: string;
}

export const colors: ColorOption[] = [
  {
    id: "pink",
    name: "Barbie Pink",
    value: "#FF69B4",
  },
  {
    id: "hot-pink",
    name: "Hot Pink",
    value: "#FF1493",
  },
  {
    id: "light-pink",
    name: "Light Pink",
    value: "#FFB6C1",
  },
  {
    id: "purple",
    name: "Purple",
    value: "#9370DB",
  },
  {
    id: "blush",
    name: "Blush",
    value: "#FFD1DC",
  },
  {
    id: "peach",
    name: "Peach",
    value: "#FFDAB9",
  },
  {
    id: "black",
    name: "Black",
    value: "#000000",
  },
  {
    id: "white",
    name: "White",
    value: "#FFFFFF",
  },
];

export const defaultColor = colors[0];
