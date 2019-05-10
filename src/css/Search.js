import styled from "styled-components";
import { primaryColor } from "./utils/themecolors";

export const SearchContainer = styled.div`
	position: relative;
	margin: 5% 0;
	width: 300px;
	height: 100px;
`;
export const StyledSearch = styled.div`
	position: absolute;
	margin: auto;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 80px;
	height: 80px;
	background: ${primaryColor};
	border-radius: 50%;
	transition: all 1s;
	z-index: 4;
	box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);
	&:hover {
		cursor: pointer;
	}
	&::before {
		content: "";
		position: absolute;
		margin: auto;
		top: 22px;
		right: 0;
		bottom: 0;
		left: 22px;
		width: 12px;
		height: 2px;
		background: white;
		transform: rotate(45deg);
		transition: all 0.5s;
	}
	&::after {
		content: "";
		position: absolute;
		margin: auto;
		top: -5px;
		right: 0;
		bottom: 0;
		left: -5px;
		width: 25px;
		height: 25px;
		border-radius: 50%;
		border: 2px solid white;
		transition: all 0.5s;
	}
`;
export const SearchInput = styled.input`
	font-family: "Inconsolata", monospace;
	position: absolute;
	margin: auto;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 50px;
	height: 50px;
	outline: none;
	border: none;
	background: ${primaryColor};
	color: white;
	text-shadow: 0 0 10px ${primaryColor};
	padding: 0 80px 0 20px;
	border-radius: 30px;
	box-shadow: 0 0 25px 0 ${primaryColor}, 0 20px 10px 0 rgba(0, 0, 0, 0.2);
	transition: all 1s;
	opacity: 0;
	z-index: 5;
	font-weight: bolder;
	letter-spacing: 0.1em;
	&:hover {
		cursor: pointer;
	}
	&:focus {
		width: 300px;
		opacity: 1;
		cursor: text;
	}
	&:focus ~ ${StyledSearch} {
		right: -250px;
		background: white;
		z-index: 6;
	}
	&:focus ~ ${StyledSearch}::before {
		top: 0;
		left: 0;
		width: 25px;
		background: black;
	}
	&:focus ~ ${StyledSearch}::after {
		top: 0;
		left: 0;
		width: 25px;
		height: 2px;
		border: none;
		background: black;
		border-radius: 0%;
		transform: rotate(-45deg);
	}
	&::placeholder {
		color: white;
		opacity: 0.5;
		font-weight: bolder;
	}
`;
