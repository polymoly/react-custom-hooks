# react-custom-hooks

Read intro instructions

## If you want showing up your react custom hooks, please follow up the instructions:

## Instructions

1. Before publishing your work into this repo, please create a branch from main branch and commit it into the new created branch.

2. Your hooks must be write in typescript and please clearly define the needed types or interfaces.

3. Before you start writing your custom hook, make sure it is not duplicated, even in logic or functionality.

4. After writing your custom hook, you should write a clear usecase example of your hook in the README.md file.

5. Please pay attention to the first example to understand how to write your hooks usecase examples.

## Hooks

1. ### useWindowSize

## Usage

```js
const { width } = useWindowSize();

// return

<div
  style={{
    width: 300,
    height: 300,
    backgroundColor: width < 500 ? "red" : "blue",
  }}
></div>;
```
