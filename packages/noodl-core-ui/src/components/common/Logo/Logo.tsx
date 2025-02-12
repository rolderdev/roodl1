import classNames from "classnames";
import React from "react";

import type { UnsafeStyleProps } from "@noodl-core-ui/types/global";

import { DefaultIcon } from "./DefaultIcon";
import css from "./Logo.module.scss";

export enum LogoVariant {
	Default = "default",
	Inverted = "inverted",
	Grayscale = "grayscale",
}

export enum LogoSize {
	Small = "small",
	Medium = "medium",
	Large = "large",
}

export interface LogoProps extends UnsafeStyleProps {
	variant?: LogoVariant;
	size?: LogoSize;

	onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function Logo({
	variant = LogoVariant.Default,
	size = LogoSize.Medium,
	onClick,
	UNSAFE_className,
	UNSAFE_style,
}: LogoProps) {
	const VariantIcon: React.FC = () => {
		switch (variant) {
			case LogoVariant.Inverted:
				return <InvertedIcon />;
			case LogoVariant.Grayscale:
				return <GrayscaleIcon />;
			default:
				return <DefaultIcon />;
		}
	};

	return (
		<div
			className={classNames([
				css["Root"],
				css[`is-variant-${variant}`],
				css[`is-size-${size}`],
				UNSAFE_className,
			])}
			onClick={onClick}
			style={UNSAFE_style}
		>
			<VariantIcon />
		</div>
	);
}

const InvertedIcon = React.memo(() => (
	<svg
		width="60"
		height="60"
		viewBox="0 0 60 60"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M0 13.3981C0 5.99852 5.99852 0 13.3981 0H46.6019C54.0015 0 60 5.99852 60 13.3981V46.6019C60 54.0015 54.0015 60 46.6019 60H13.3981C5.99852 60 0 54.0015 0 46.6019V13.3981Z"
			fill="url(#paint0_linear_569_5866)"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M29.5856 25.4583L36.212 25.4583C38.5885 25.4583 40.515 27.3848 40.515 29.7613C40.515 32.1378 38.5885 34.0643 36.212 34.0643L29.5856 34.0643C28.1361 34.0643 26.9611 35.2394 26.9611 36.6889C26.9611 38.1383 28.1362 39.3134 29.5856 39.3134C33.9555 39.3134 37.4985 42.8535 37.5031 47.2222V47.2393C37.4985 51.608 33.9555 55.1482 29.5856 55.1482H27.1761C26.463 55.1482 25.885 54.5701 25.885 53.8571C25.885 53.1441 26.463 52.566 27.1761 52.566H29.5856C31.0351 52.566 32.2102 51.3911 32.2102 49.9416C32.2102 48.4921 31.0351 47.317 29.5856 47.317C23.5529 47.317 18.6617 42.4292 18.6562 36.3978V36.3775C18.6617 30.3461 23.5529 25.4583 29.5856 25.4583Z"
			fill="black"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M29.5868 8.67749L45.5503 8.67749C48.7109 8.67749 51.2731 11.2397 51.2731 14.4002C51.2731 17.5608 48.7109 20.123 45.5503 20.123L31.9874 20.123C30.6594 20.1323 29.5857 21.2117 29.5857 22.5419V22.5419H29.5856V23.2213C22.3185 23.222 16.4268 29.1103 16.4206 36.3762V36.3993C16.4241 40.5418 18.3408 44.2365 21.3346 46.6476C14.4743 43.5135 9.70703 36.5918 9.70703 28.5567C9.70703 17.5779 18.6069 8.67784 29.5856 8.6776L29.5856 20.123H29.5868L29.5868 8.67749ZM29.5856 39.3135V47.3171C23.5535 47.3164 18.6631 42.4289 18.6576 36.3978V36.3776C18.6631 30.3466 23.5535 25.4591 29.5856 25.4583V34.0644C28.1368 34.0652 26.9625 35.2399 26.9625 36.6889C26.9625 38.138 28.1368 39.3127 29.5856 39.3135ZM29.5856 37.0764V36.3015C29.5852 36.3015 29.5847 36.3015 29.5842 36.3015V37.0764C29.5847 37.0764 29.5852 37.0764 29.5856 37.0764Z"
			fill="black"
		/>
		<defs>
			<linearGradient
				id="paint0_linear_569_5866"
				x1="9.6215e-06"
				y1="-4.68362e-06"
				x2="60"
				y2="60"
				gradientUnits="userSpaceOnUse"
			>
				<stop stop-color="#EFBB07" />
				<stop offset="0.0001" stop-color="#682BD8" />
				<stop offset="0.505" stop-color="#FF0000" />
				<stop offset="0.88" stop-color="#EFBB07" />
			</linearGradient>
		</defs>
	</svg>
));

const GrayscaleIcon = React.memo(() => (
	<svg
		width="60"
		height="60"
		viewBox="0 0 60 60"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M29.5856 25.4583L36.212 25.4583C38.5885 25.4583 40.515 27.3848 40.515 29.7613C40.515 32.1378 38.5885 34.0643 36.212 34.0643L29.5856 34.0643C28.1361 34.0643 26.9611 35.2394 26.9611 36.6889C26.9611 38.1383 28.1362 39.3134 29.5856 39.3134C33.9555 39.3134 37.4985 42.8535 37.5031 47.2222V47.2393C37.4985 51.608 33.9555 55.1482 29.5856 55.1482H27.1761C26.463 55.1482 25.885 54.5701 25.885 53.8571C25.885 53.1441 26.463 52.566 27.1761 52.566H29.5856C31.0351 52.566 32.2102 51.3911 32.2102 49.9416C32.2102 48.4921 31.0351 47.317 29.5856 47.317C23.5529 47.317 18.6617 42.4292 18.6562 36.3978V36.3775C18.6617 30.3461 23.5529 25.4583 29.5856 25.4583Z"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M29.5868 8.67749L45.5503 8.67749C48.7109 8.67749 51.2731 11.2397 51.2731 14.4002C51.2731 17.5608 48.7109 20.123 45.5503 20.123L31.9874 20.123C30.6594 20.1323 29.5857 21.2117 29.5857 22.5419V22.5419H29.5856V23.2213C22.3185 23.222 16.4268 29.1103 16.4206 36.3762V36.3993C16.4241 40.5418 18.3408 44.2365 21.3346 46.6476C14.4743 43.5135 9.70703 36.5918 9.70703 28.5567C9.70703 17.5779 18.6069 8.67784 29.5856 8.6776L29.5856 20.123H29.5868L29.5868 8.67749ZM29.5856 39.3135V47.3171C23.5535 47.3164 18.6631 42.4289 18.6576 36.3978V36.3776C18.6631 30.3466 23.5535 25.4591 29.5856 25.4583V34.0644C28.1368 34.0652 26.9625 35.2399 26.9625 36.6889C26.9625 38.138 28.1368 39.3127 29.5856 39.3135ZM29.5856 37.0764V36.3015C29.5852 36.3015 29.5847 36.3015 29.5842 36.3015V37.0764C29.5847 37.0764 29.5852 37.0764 29.5856 37.0764Z"
			fill="white"
		/>
	</svg>
));
