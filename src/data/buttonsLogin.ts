import { Props as ButtonProps } from "../components/LoginButtonNetwork"
import apple from "../assets/icons/apple-Icon.svg"
import forem from "../assets/icons/forem-Icon.svg"
import github from "../assets/icons/github-Icon -white.svg"
import twiter from "../assets/icons/tuwiter-Icon.svg"

export const buttonsLogin: ButtonProps[] = [
    {
        svg: apple,
        title: "Cotinue with Apple",
        color: "#000000",
    },
    {
        svg: forem,
        title: "Cotinue with Forem",
        color: "#0b3e4a",
    },
    {
        svg: github,
        title: "Cotinue with GitHub",
        color: "#24292e",
    },
    {
        svg: twiter,
        title: "Cotinue with Twiter",
        color: "#1ca1f2",
    },
]