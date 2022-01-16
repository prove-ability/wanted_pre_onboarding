import styled from "styled-components";
import Header from "./Header";

const SLayout = styled.div`
	.main {
		padding-top: 30px;
	}
`;

const Layout: React.FC = ({ children }) => {
	return (
		<SLayout>
			<Header />
			<main className="main">{children}</main>
		</SLayout>
	);
};

export default Layout;
