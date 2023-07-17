export interface Props {
    color: string;
    svg: string;
    title: string;
}

export default function LoginButtonNetwork (props: Props) {
    const color = props.color;
    const icon = props.svg;
    const title = props.title;
    return (
        <button className={`w-full h-12 flex justify-center items-center rounded-md text-[#fff] font-bold text-base gap-3`} style={{ backgroundColor: color }}>
            <img className="w-8 h-auto" src={icon} alt="Network-icon" />
            {title}
        </button>
    )
}