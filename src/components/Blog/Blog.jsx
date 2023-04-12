import React from "react";

const Blog = () => {
  return (
    <div className="my-container space-y-2 py-10 p-3">
      <h1 className="text-2xl font-semibold">
        When should we use Context API?
      </h1>
      <p className="text-gray-600">
        Ans: We should use Context API  when some data needs to be accessible by many components at different nesting levels..
      </p>
      <h1 className="text-2xl font-semibold">
        What is Custom Hook?
      </h1>
      <p className="text-gray-600">
        Ans:  Custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks.
      </p>
      <h1 className="text-2xl font-semibold">What is useRef?</h1>
      <p className="text-gray-600">
        Ans: useRef() is a built-in React hook that accepts one argument as the initial value and returns a reference.
      </p>
      <h1 className="text-2xl font-semibold">What is useMemo?</h1>
      <p className="text-gray-600">
        Ans: useMemo is a React Hook that lets you cache the result of a calculation between re-renders
      </p>
    </div>
  );
};

export default Blog;