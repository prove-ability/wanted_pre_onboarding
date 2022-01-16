// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

import Slide, { Item } from "./components/common/Slide";
import Layout from "./components/Layout";

const GlobalStyle = createGlobalStyle`
  ${reset}
 
`;

function App() {
	const itemList: Item[] = [
		{
			title: "UX 디자이너의 커리어 설계",
			description: "브랜드 가치를 더하는 디자인",
			link: "https://www.wanted.co.kr/events/21_12_s08_b01",
			image: "https://static.wanted.co.kr/images/banners/1488/baa54448.jpg",
		},
		{
			title: "마케팅 주니어를 찾습니다",
			description: "1월 17일(월) 설명회 신청하기",
			link: "https://www.wanted.co.kr/events/pre_onboarding_course_7",
			image: "https://static.wanted.co.kr/images/banners/1490/0b775035.jpg",
		},
		{
			title: "2022년 달라지는 노동법령",
			description: "노무관리 쟁점 한 눈에 파악하기",
			link: "https://www.wanted.co.kr/events/hrclass220106",
			image: "https://static.wanted.co.kr/images/banners/1489/312a0c29.jpg",
		},
		{
			title: "성과를 내는 마케팅",
			description: "실제 사례를 공개합니다!",
			link: "https://www.wanted.co.kr/events/wantedcon24",
			image: "https://static.wanted.co.kr/images/banners/1486/fba2df30.jpg",
		},
		{
			title: "포트폴리오를 부탁해!",
			description: "디자이너의 포폴 살펴보기",
			link: "https://www.wanted.co.kr/events/portfolio_contents_29cm",
			image: "https://static.wanted.co.kr/images/banners/1487/0d36f0b5.jpg",
		},
		{
			title: "개발자 되고싶은 분들!?",
			description: "프론트엔드 무료 교육과정 참여하기",
			link: "https://www.wanted.co.kr/events/pre_onboarding_course_6",
			image: "https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg",
		},
		{
			title: "해, 커리어 EP 02 공개",
			description: "마지막 관문 2라운드의 승자는?",
			link: "https://www.wanted.co.kr/events/VLiACiB2lXw",
			image: "https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg",
		},
		{
			title: "개발자 성장 비결 공개!",
			description: "Velog, 글 쓰는 개발자들의 이야기",
			link: "https://www.wanted.co.kr/velog01",
			image: "https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg",
		},
	];
	return (
		<>
			<GlobalStyle />
			<Layout>
				<Slide itemList={itemList} interval={5000} />
			</Layout>
		</>
	);
}

export default App;
