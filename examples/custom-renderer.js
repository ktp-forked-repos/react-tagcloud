import React from "react";
import { TagCloud } from "../src/index";

const data = [
  { value: "jQuery", count: 25 }, { value: "MongoDB", count: 18 },
  { value: "JavaScript", count: 38 }, { value: "React", count: 30 },
  { value: "Nodejs", count: 28 }, { value: "Express.js", count: 25 },
  { value: "HTML5", count: 33 }, { value: "CSS3", count: 20 }
];

// using custom renderer the default renderer will be overriden

// custom renderer is function which takes tag, computed font size and
// elemnt key as arguments, and returns react component
const customRenderer = (tag, size, handlers) => {
  return <span {...handlers} key={tag.value} className={`tag-${size}`}>{tag.value}</span>;
};

export default () => (
  <TagCloud tags={data}
            minSize={1}
            maxSize={5}
            renderer={customRenderer} />
);

