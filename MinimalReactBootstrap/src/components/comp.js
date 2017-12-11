import React from "react"
import ReactDom from "react-dom"

class Hello extends React.Component {
	render() {
		return <h3>Hello, component world!</h3>
	}
}

ReactDom.render(
	<Hello />,
	document.getElementById("target")
)
