import styled from "styled-components";

import Bell from "../../assets/images/Bell";
import New from "../../assets/images/New";
import Search from "../../assets/images/Search";
import Avatar from "../common/Avatar";
import Beta from "../../assets/images/Beta";

const SHeader = styled.header`
	width: 100%;
	height: 50px;
	@media (max-width: 991px) {
		height: 110px;
	}
	box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
	.wrapper {
		@media (max-width: 991px) {
			width: 100%;
			flex-wrap: wrap;
			justify-content: space-between;
		}
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
		height: 100%;
		max-width: 1060px;
		.logo-wrapper {
			@media (max-width: 991px) {
				justify-content: space-between;
				width: 100%;
				padding: 15px 20px;
			}
			> img {
				width: 17px;
				height: 14px;
				margin-right: 15px;
			}
			.logo {
				&::before {
					content: "wanted";
					font-size: 20px;
					font-weight: 700;
				}
			}
		}
		.list-menu {
			@media (max-width: 991px) {
				flex: 1;
				font-size: 13px;
				font-weight: 600;
				line-height: 20px;
				color: rgb(51, 51, 51);
			}
			display: flex;

			.menu {
				@media (max-width: 991px) {
					padding: 11px 10px 19px;
				}

				font-size: 14px;
				padding: 15px;
				line-height: 20px;
				font-weight: 600;
				position: relative;
			}
			.community,
			.ai {
				> em {
					position: absolute;
					top: 10px;
					right: -5px;
					pointer-events: none;
					font-style: normal;
				}
			}
			> li {
				@media (max-width: 991px) {
					&:nth-child(n + 3):nth-child(-n + 7) {
						display: none;
					}
				}
			}
		}
		.my-menu {
			@media (max-width: 991px) {
				height: auto;
			}
			display: flex;
			align-items: center;
			height: 100%;
			> li {
				display: flex;
				align-items: center;
				height: 100%;
				height: 100%;
				margin-right: 15px;
			}
			.avatar {
				@media (max-width: 991px) {
					display: none;
				}
			}
			.division {
				@media (max-width: 991px) {
					display: none;
				}
				display: block;
				content: "";
				width: 1px;
				height: 10px;
				background-color: #e1e2e3;
				margin: auto 10px;
			}
			.company-service {
				@media (max-width: 991px) {
					display: none;
				}
				height: 30px;
				font-size: 13px;
				color: #666;
				line-height: 30px;
				border: 1px solid #e1e2e3;
				border-radius: 15px;
				padding: 0 10px;
				font-weight: 400;
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
					<li className="menu community">
						커뮤니티
						<em>
							<New />
						</em>
					</li>
					<li className="menu">프리랜서</li>
					<li className="menu ai">
						AI 합격예측
						<em>
							<Beta />
						</em>
					</li>
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
					<li>
						<br className="division" />
					</li>
					<li>
						<span className="company-service">기업서비스</span>
					</li>
				</ul>
			</nav>
		</SHeader>
	);
}

export default Header;
