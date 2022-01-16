import styled from "styled-components";

const AAvatar = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	width: 32px;
	height: 32px;
	border-radius: 50%;
	border: 1px solid #e1e2e3;
	background-color: #fff;
	.image {
		align-self: center;
		width: 28px;
		height: 28px;
		border-radius: 50%;
		background-position: 50%;
		background-size: cover;
		background-repeat: no-repeat;
	}
`;

interface AvatarProps {
	src: string;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
	return (
		<AAvatar>
			<img className="image" src={src} />
		</AAvatar>
	);
};

export default Avatar;
