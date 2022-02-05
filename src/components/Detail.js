import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../firabase";
import Header from "./Header";

// const youtubeCode = "VK2QbXssjJ0";

// ---- Component ----

const Detail = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState();

	const [vPlayer, setVPlayer] = useState(false);

	const OpenCloseVPlayer = () => {
		setVPlayer(!vPlayer);
	};

	useEffect(() => {
		const obtainFirebaseData = async (movieId) => {
			const data = await getDocs(collection(db, "movies"));
			if (movieId <= data.docs.length - 1) {
				let movie = data.docs[movieId].data();
				setMovie(movie);
			} else {
			}
		};
		obtainFirebaseData(id - 1);
	}, [id]);

	return (
		<>
			<Header />
			<Container>
				{movie && (
					<>
						<Background>
							<img src={movie.backgroundImg} alt={movie.title} />
						</Background>
						<ImageTitle>
							<img src={movie.titleImg} alt={movie.title} />
						</ImageTitle>
						<Controls>
							<ButtonWrap01>
								<PlayButton onClick={OpenCloseVPlayer}>
									<img src="/images/play-icon-black.png" alt="Play" />
									<span>PLAY</span>
								</PlayButton>
								<TrailerButton onClick={OpenCloseVPlayer}>
									<img src="/images/play-icon-white.png" alt="Trailer" />
									<span>Trailer</span>
								</TrailerButton>
							</ButtonWrap01>
							<ButtonWrap02>
								<AddButton>
									<span>+</span>
								</AddButton>
								<GroupWatchButton>
									<img src="/images/group-icon.png" alt="Group" />
								</GroupWatchButton>
							</ButtonWrap02>
						</Controls>
						<SubTitle>{movie.subTitle}</SubTitle>
						<Description>{movie.description}</Description>
						{vPlayer && (
							<TrailerVPlayer>
								<YotubeVideo>
									<CloseButtom onClick={OpenCloseVPlayer}>x</CloseButtom>
									<iframe
										width="100%"
										height="100%"
										src={`https://www.youtube.com/embed/${movie.trailer}?autoplay=1`}
										title="YouTube video player"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									></iframe>
								</YotubeVideo>
							</TrailerVPlayer>
						)}
					</>
				)}
			</Container>
		</>
	);
};

export default Detail;

// ---- Style ----

const Container = styled.div`
	min-height: calc(100vh - 70px);
	padding: 0 calc(3.5vw + 5px);
	position: relative;
	overflow: hidden;
`;

const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: -1;
	opacity: 0.8;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

const ImageTitle = styled.div`
	height: 30vh;
	min-height: 170px;
	width: 35vw;
	min-width: 200px;
	max-width: 550px;
	margin-top: 60px;
	margin-bottom: 40px;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	@media (max-width: 768px) {
		width: 80vw;
	}
`;

const Controls = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

const ButtonWrap01 = styled.div`
	display: flex;
	flex-direction: row;

	@media (max-width: 768px) {
		margin-bottom: 1rem;
	}
`;

const PlayButton = styled.button`
	border-radius: 4px;
	font-size: 15px;
	padding: 0px 24px;
	margin-right: 22px;
	display: flex;
	align-items: center;
	height: 56px;
	background-color: rgb(249, 249, 249);
	border: none;
	letter-spacing: 1.8px;
	transition: all 250ms;
	font-weight: bold;

	&:hover {
		background-color: rgb(160, 160, 160);
	}
`;

const TrailerButton = styled(PlayButton)`
	background-color: rgba(0, 0, 0, 0.3);
	border: 1px solid rgb(249, 249, 249);
	color: rgb(249, 249, 249);
	text-transform: uppercase;
	cursor: pointer;
`;

const ButtonWrap02 = styled.div`
	display: flex;
	flex-direction: row;
`;

const AddButton = styled.button`
	margin-right: 16px;
	width: 44px;
	height: 44px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	border: 2px solid rgb(249, 249, 249);
	background-color: rgba(0, 0, 0, 0.6);

	span {
		font-size: 30px;
		color: white;
	}
`;

const GroupWatchButton = styled(AddButton)`
	background-color: rgba(0, 0, 0);
`;

const SubTitle = styled.div`
	color: rgb(249, 249, 249);
	font-size: 1rem;
	min-height: 20px;
	margin-top: 26px;

	@media (max-width: 768px) {
		font-size: 0.9rem;
	}
`;

const Description = styled.div`
	line-height: 1.4;
	font-size: 1.15rem;
	margin-top: 16px;
	color: rgb(249, 249, 249);
	max-width: 550px;
	margin-bottom: 2rem;

	@media (max-width: 768px) {
		font-size: 1.1rem;
	}
`;

const TrailerVPlayer = styled.div`
	// padding: 40px;

	background-color: rgba(0, 0, 0, 0.2);
	backdrop-filter: blur(8px);

	width: 100%;
	height: calc(100vh + 70px);
	margin-left: -50vw;
	margin-top: calc(-50vh - 70px);
	position: absolute;
	top: 50%;
	bottom: 50%;
	left: 50%;
	right: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CloseButtom = styled.button`
	width: 40px;
	height: 40px;
	margin-left: -20px;
	background-color: #fff;
	border-radius: 50%;
	border: none;
	font-size: 25px;
	padding-bottom: 5px;
	color: #000;
	position: relative;
	top: -20px;
	left: 50%;

	cursor: pointer;
`;

const YotubeVideo = styled.div`
	height: 60%;
	width: 60%;

	min-width: 750px;
	min-height: 422px;
	max-width: 1120px;
	max-height: 630px;
`;
