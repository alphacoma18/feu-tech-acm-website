import Image from "next/image";
interface Props {
	props: {
		src: string;
		alt: string;
		width: number;
		height: number;
		className?: string;
	};
}
const GenImage: React.FC<Props> = ({
	props: { src, alt, width, height, className },
}) => {
	return (
		<Image
			src={src}
			alt={alt}
			width={width}
			height={height}
			className={className}
		/>
	);
};
export default GenImage;
