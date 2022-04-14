// implementation of a simple 'React' to see how the virtual DOM works
const React = {
  createElement: (tag, props, ...children) => {
    if (typeof tag === "function") {
      return tag(props);
    }
    var element = { tag, props: { ...props, children } };
    console.log(element);
    return element;
  },
};

const App = () => (
  <div className="react-under-the-hood">
    <h1>Hello World</h1>
    <p>lorem ipsum d</p>
    <input type="text" placeholder="Enter text" />
  </div>
);

<App />;

const render = (reactElementOrStringOrNumber, container) => {
  if (["string", "number"].includes(typeof reactElementOrStringOrNumber)) {
    container.appendChild(
      document.createTextNode(String(reactElementOrStringOrNumber))
    );
    return;
  }
  const actualDomElement = document.createElement(
    reactElementOrStringOrNumber.tag
  );
  if (reactElementOrStringOrNumber.props) {
    Object.keys(reactElementOrStringOrNumber.props)
      .filter((p) => p != "children")
      .forEach(
        (p) => (actualDomElement[p] = reactElementOrStringOrNumber.props[p])
      );
  }

  if (reactElementOrStringOrNumber.props.children) {
    reactElementOrStringOrNumber.props.children.forEach((child) =>
      render(child, actualDomElement)
    );
  }

  container.appendChild(actualDomElement);
};
render(<App />, document.querySelector("#app"));
