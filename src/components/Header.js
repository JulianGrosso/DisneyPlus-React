import React from "react";
import styled from "styled-components";

// ---- Component ----

const Header = () => {
	return (
		<Nav>
			<Logo src="/images/logo.svg" />
			<NavMenu>
				<a href="#/home">
					<img src="/images/home-icon.svg" alt="Home" />
					<span>HOME</span>
				</a>
				<NavMenuDesktop>
					<a href="#/home">
						<img src="/images/search-icon.svg" alt="Search" />
						<span>SEARCH</span>
					</a>
					<a href="#/home">
						<img src="/images/watchlist-icon.svg" alt="Watchlist" />
						<span>WATCHLIST</span>
					</a>
					<a href="#/home">
						<img src="/images/original-icon.svg" alt="Original" />
						<span>ORIGINAL</span>
					</a>
					<a href="#/home">
						<img src="/images/movie-icon.svg" alt="Movies" />
						<span>MOVIES</span>
					</a>
					<a href="#/home">
						<img src="/images/series-icon.svg" alt="Series" />
						<span>SERIES</span>
					</a>
				</NavMenuDesktop>
			</NavMenu>
			<UserImg src="/images/user-default-img.png" />
		</Nav>
	);
};

export default Header;

// ---- Style ----

const Nav = styled.nav`
	height: 70px;
	background-color: #090b13;
	display: flex;
	align-items: center;
	padding: 0 36px;
	overflow-x: hidden;

	@media (max-width: 768px) {
		justify-content: space-between;
	}
`;

const Logo = styled.img`
	width: 80px;
`;

const NavMenuDesktop = styled.div`
	display: flex;
	flex-direction: row;

	@media (max-width: 768px) {
		display: none;
	}
`;

const NavMenu = styled.div`
	display: flex;
	flex: 1;
	margin-left: 25px;
	align-items: center;

	a {
		display: flex;
		align-items: center;
		padding: 0 12px;
		cursor: pointer;

		img {
			height: 20px;
		}

		span {
			font-size: 13px;
			letter-spacing: 1.42px;
			position: relative;
			color: white;

			&:after {
				content: "";
				height: 2px;
				background: white;
				position: absolute;
				left: 0;
				right: 0;
				bottom: -6px;
				opacity: 0;
				transform-origin: left center;
				transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
				transform: scaleX(0);
			}
		}

		&:hover {
			span:after {
				transform: scaleX(1);
				opacity: 1;
			}
		}
	}

	a:link,
	a:visited,
	a:active {
		text-decoration: none;
	}
`;

const UserImg = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 50%;
	cursor: pointer;
`;
