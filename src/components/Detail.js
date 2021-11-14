import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../firabase";

// ---- Component ----

const Detail = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState();

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
						<PlayButton>
							<img src="/images/play-icon-black.png" alt="Play" />
							<span>PLAY</span>
						</PlayButton>
						<TrailerButton>
							<img src="/images/play-icon-white.png" alt="Trailer" />
							<span>Trailer</span>
						</TrailerButton>
						<AddButton>
							<span>+</span>
						</AddButton>
						<GroupWatchButton>
							<img src="/images/group-icon.png" alt="Group" />
						</GroupWatchButton>
					</Controls>
					<SubTitle>{movie.subTitle}</SubTitle>
					<Description>{movie.description}</Description>
				</>
			)}
		</Container>
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
	margin-top: 60px;
	margin-bottom: 20px;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

const Controls = styled.div`
	display: flex;
	align-items: center;
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
	cursor: pointer;
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
	font-size: 15px;
	min-height: 20px;
	margin-top: 26px;
`;

const Description = styled.div`
	line-height: 1.4;
	font-size: 20px;
	margin-top: 16px;
	color: rgb(249, 249, 249);
	max-width: 760px;
`;
