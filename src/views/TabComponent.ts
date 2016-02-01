import * as React from "react";

interface Props {
    isActive: boolean;
    key: number;
}

const activenessClass: Map<boolean, string> = new Map([[false, "inactive"], [true, "active"]]);

export default class TabComponent extends React.Component<Props, {}> {
    render() {
        return React.createElement(
            "li",
            { className: `tab ${activenessClass.get(this.props.isActive)}` },
            React.createElement("span", { className: "command-sign" }, "⌘"),
            React.createElement("span", { className: "position" }, this.props.key)
        );
    }
}