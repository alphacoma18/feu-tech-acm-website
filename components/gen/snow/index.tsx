import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

const GenSnow: React.FC = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadFull(engine);
	}, []);
	return (
		<div>
			<Particles
				id="tsparticles"
				init={particlesInit}
				options={{
					background: {
						color: {
							value: "#080808",
						},
					},
					fpsLimit: 60,
					particles: {
						color: {
							value: "#5f24a4",
						},
						collisions: {
							enable: false,
						},
						move: {
							direction: "none",
							enable: true,
							outModes: {
								default: "bounce",
							},
							random: true,
							speed: 1.5,
							straight: true,
						},
						number: {
							density: {
								enable: true,
								area: 500,
							},
							value: 60,
						},
						opacity: {
							value: 0.5,
						},
						shape: {
							type: "circle",
						},
						size: {
							value: { min: 2, max: 8 },
						},
					},
				}}
			/>
		</div>
	);
};
export default GenSnow;
