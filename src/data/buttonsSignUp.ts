import { Props as ButtonProps } from "../components/LoginButtonNetwork"
import apple from "../assets/icons/apple-Icon.svg"
import forem from "../assets/icons/forem-Icon.svg"
import github from "../assets/icons/github-Icon -white.svg"
import twiter from "../assets/icons/tuwiter-Icon.svg"

export const buttonsSignUp: ButtonProps[] = [
    {
        svg: apple,
        title: "Sign Up with Apple",
        color: "#000000",
    },
    {
        svg: forem,
        title: "Sign Up with Forem",
        color: "#0b3e4a",
    },
    {
        svg: github,
        title: "Sign Up with GitHub",
        color: "#24292e",
    },
    {
        svg: twiter,
        title: "Sign Up with Twiter",
        color: "#1ca1f2",
    },
]