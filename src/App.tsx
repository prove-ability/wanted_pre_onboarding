// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

import Slide from "./components/common/Slide";
import Layout from "./components/Layout";

const GlobalStyle = createGlobalStyle`
  ${reset}
 
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<Layout>
				<Slide />
			</Layout>
		</>
	);
}

export default App;
