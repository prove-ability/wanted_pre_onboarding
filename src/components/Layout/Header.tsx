import styled from "styled-components";

import Bell from "../../assets/images/Bell";
import Search from "../../assets/images/Search";
import Avatar from "../common/Avatar";

const SHeader = styled.header`
	width: 100%;
	height: 50px;
	box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
	.wrapper {
		@media (min-width: 992px) and (max-width: 1199px) {
			width: 90%;
		}
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
		height: 100%;
		max-width: 1060px;
		.logo-wrapper {
			> img {
				width: 17px;
				height: 14px;
			}
			.logo {
				font-size: 17px;
				&::before {
					content: "wanted";
				}
			}
		}
		.list-menu {
			display: flex;
			@media (min-width: 992px) and (max-width: 1199px) {
				flex: 1;
				justify-content: space-evenly;
			}
			.menu {
				@media (min-width: 992px) and (max-width: 1199px) {
					font-size: 13px;
					padding: 15px 0;
				}
				font-size: 14px;
				padding: 15px;
				line-height: 20px;
				font-weight: 600;
			}
		}
		.my-menu {
			display: flex;
			align-items: center;
			> li {
				height: 100%;
			}
		}
	}
`;

function Header() {
	return (
		<SHeader>
			<nav className="wrapper">
				<div className="logo-wrapper">
					<img
						src="https://static.wanted.co.kr/images/icon-menu.png"
						alt="hamberger menu"
					/>
					<i className="logo"></i>
				</div>
				<ul className="list-menu">
					<li className="menu">채용</li>
					<li className="menu">이벤트</li>
					<li className="menu">직군별 연봉</li>
					<li className="menu">이력서</li>
					<li className="menu">커뮤니티</li>
					<li className="menu">프리랜서</li>
					<li className="menu">AI 합격예측</li>
				</ul>
				<ul className="my-menu">
					<li>
						<Search />
					</li>
					<li>
						<Bell />
					</li>

					<li>
						<Avatar src="https://static.wanted.co.kr/images/avatars/2131522/a94e4356.jpg" />
					</li>
				</ul>
			</nav>
		</SHeader>
	);
}

export default Header;
