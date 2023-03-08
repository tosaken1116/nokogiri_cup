import Image from "next/image";
type IconProps = {
    iconPath: string;
    size: string;
};
export default function Icon({ iconPath, size }: IconProps) {
    const iconSize =
        size == "s"
            ? 24
            : size == "m"
            ? 32
            : size == "l"
            ? 64
            : size == "xl"
            ? 120
            : 0;
    return (
        <Image
            src={iconPath}
            alt={iconPath}
            width={iconSize}
            height={iconSize}
            style={{ borderRadius: "50%", height: iconSize, width: iconSize }}
        ></Image>
    );
}
