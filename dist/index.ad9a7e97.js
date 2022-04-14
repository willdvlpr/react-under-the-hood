// implementation of a simple 'React' to see how the virtual DOM works
const React = {
    createElement: (tag, props, ...children)=>{
        if (typeof tag === "function") return tag(props);
        var element = {
            tag,
            props: {
                ...props,
                children
            }
        };
        console.log(element);
        return element;
    }
};
const App = ()=>/*#__PURE__*/ React.createElement("div", {
        className: "react-under-the-hood",
        __source: {
            fileName: "index.tsx",
            lineNumber: 14,
            columnNumber: 3
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("h1", {
        __source: {
            fileName: "index.tsx",
            lineNumber: 15,
            columnNumber: 5
        },
        __self: this
    }, "Hello World"), /*#__PURE__*/ React.createElement("p", {
        __source: {
            fileName: "index.tsx",
            lineNumber: 16,
            columnNumber: 5
        },
        __self: this
    }, "lorem ipsum d"), /*#__PURE__*/ React.createElement("input", {
        type: "text",
        placeholder: "Enter text",
        __source: {
            fileName: "index.tsx",
            lineNumber: 17,
            columnNumber: 5
        },
        __self: this
    }))
;
/*#__PURE__*/ React.createElement(App, {
    __source: {
        fileName: "index.tsx",
        lineNumber: 21,
        columnNumber: 1
    },
    __self: this
});
const render = (reactElementOrStringOrNumber, container)=>{
    if ([
        "string",
        "number"
    ].includes(typeof reactElementOrStringOrNumber)) {
        container.appendChild(document.createTextNode(String(reactElementOrStringOrNumber)));
        return;
    }
    const actualDomElement = document.createElement(reactElementOrStringOrNumber.tag);
    if (reactElementOrStringOrNumber.props) Object.keys(reactElementOrStringOrNumber.props).filter((p)=>p != "children"
    ).forEach((p)=>actualDomElement[p] = reactElementOrStringOrNumber.props[p]
    );
    if (reactElementOrStringOrNumber.props.children) reactElementOrStringOrNumber.props.children.forEach((child)=>render(child, actualDomElement)
    );
    container.appendChild(actualDomElement);
};
render(/*#__PURE__*/ React.createElement(App, {
    __source: {
        fileName: "index.tsx",
        lineNumber: 49,
        columnNumber: 8
    },
    __self: this
}), document.querySelector("#app"));

//# sourceMappingURL=index.ad9a7e97.js.map
