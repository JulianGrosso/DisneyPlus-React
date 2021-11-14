import React from "react";
import styled from "styled-components";

// ---- Component ----

const Header = () => {
	return (
		<Nav>
			<Logo src="/images/logo.svg" />
			<NavMenu>
				<a href="/">
					<img alt="" src="/images/home-icon.svg" />
					<span>HOME</span>
				</a>
				<a href="/">
					<img alt="" src="/images/search-icon.svg" />
					<span>SEARCH</span>
				</a>
				<a href="/">
					<img alt="" src="/images/watchlist-icon.svg" />
					<span>WATCHLIST</span>
				</a>
				<a href="/">
					<img alt="" src="/images/original-icon.svg" />
					<span>ORIGINAL</span>
				</a>
				<a href="/">
					<img alt="" src="/images/movie-icon.svg" />
					<span>MOVIES</span>
				</a>
				<a href="/">
					<img alt="" src="/images/series-icon.svg" />
					<span>SERIES</span>
				</a>
			</NavMenu>
			<UserImg src="https://lh3.googleusercontent.com/ogw/ADea4I7HKmofHc3qfwLeD5B47iQXrdpZTRfQ0LH_r_NUaw=s83-c-mo" />
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
`;

const Logo = styled.img`
	width: 80px;
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
