import { execSync } from "node:child_process";

import { valueToBoolean } from "../../../scripts/helper";
import { type BuildTarget, getDistPlatform } from "./platform/build-platforms";

(async () => {
	// Inputs
	const DISABLE_SIGNING = valueToBoolean(process.env.DISABLE_SIGNING);
	const TARGET_PLATFORM = process.env.TARGET_PLATFORM;
	const CSC_NAME = process.env.CSC_NAME;

	if (!TARGET_PLATFORM) throw new Error("TARGET_PLATFORM is falsy");

	// Variables
	const [platform, arch] = TARGET_PLATFORM.trim().split("-");
	// @ts-expect-error TODO: Add validation on the input.
	const target: BuildTarget = { platform, arch };

	// Debug Configuration
	console.log("@ -> packages/noodl-editor/scripts/build.ts");
	console.log("--- Configuration");
	console.log("> DISABLE_SIGNING: ", DISABLE_SIGNING);
	console.log("> TARGET_PLATFORM: ", TARGET_PLATFORM);
	console.log("---");

	// Build Renderer
	console.log("--- Run webpack 'webpack.renderer.production.js' ...");
	execSync(
		"npx webpack --config=webpackconfigs/webpack.renderer.production.js",
		{
			stdio: "inherit",
			env: process.env,
		},
	);
	console.log("--- done!");

	// Build Main
	console.log("--- Run webpack 'webpack.main.production.js' ...");
	execSync("npx webpack --config=webpackconfigs/webpack.main.production.js", {
		stdio: "inherit",
		env: process.env,
	});
	console.log("--- done!");

	const platformName = getDistPlatform(target.platform);
	const args = [`--${platformName}`, `--${target.arch}`].join(" ");

	const USE_SYSTEM_FPM = true;

	console.log(`--- Run: 'npx electron-builder ${args}' ...`);
	execSync(`npx electron-builder ${args}`, {
		stdio: [0, 1, 2],
		env: Object.assign(
			DISABLE_SIGNING
				? { USE_SYSTEM_FPM }
				: {
						CSC_NAME,
						USE_SYSTEM_FPM,
					},
			process.env,
		),
	});
})();
