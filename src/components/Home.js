import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import { collection, getDocs } from "firebase/firestore";
import db from "../firabase";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import Header from "./Header";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";

// ---- Component ----

const Home = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		let storedMovies = localStorage.getItem("localMovies");

		if (storedMovies == null) {
			const obtainFirebaseData = async () => {
				const data = await getDocs(collection(db, "movies"));
				let tempMovies = data.docs.map((doc) => {
					return { id: doc.id, ...doc.data() };
				});

				dispatch(setMovies(tempMovies));
				localStorage.setItem("localMovies", JSON.stringify(tempMovies));
			};
			obtainFirebaseData();
		} else {
			dispatch(setMovies(JSON.parse(storedMovies)));
		}
	}, [dispatch]);

	return (
		<>
			<Header />
			<Container>
				<ImgSlider />
				<Viewers />
				<Recommends />
				<NewDisney />
				<Originals />
				<Trending />
			</Container>
		</>
	);
};

export default Home;

// ---- Style ----

const Container = styled.main`
	min-height: calc(100vh - 70px);
	padding: 0 calc(3.5vw + 5px);
	position: relative;
	overflow-x: hidden;

	&:before {
		background: url("/images/home-background.png") center center / cover
			no-repeat fixed;
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
	}
`;
