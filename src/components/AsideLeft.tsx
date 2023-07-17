import AsideLeftCard from "./AsideLeftCard";
import { leftCards } from "../data/leftcards";
import { Link } from "react-router-dom";
import CanvaAsideLeft from "./CanvaAsideLeft";
export interface Props {
  icon: string;
  option: string;
}
export interface NetworkLogos {
  icon: string;
}
export interface Tags {
  name: string;
}

const tagslist: Tags[] = [
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
  { name: "devto" },
];

export default function AsideLeft() {
  const token:string | null = localStorage.getItem('token')

  return (
    <>
    { token
    ? <div></div>
    : (
      <article className="w-full p-3 pb-4 rounded-md bg-[white] max-h-[1082px] mb-3">
      <div className="mb-[10px]">
        <h2 className="block text-2xl text-[#404040] font-bold">
          DEV Community is a community of 1,097,995 amazing developers
        </h2>
      </div>
      <div className="">
        <p>
          We're a place where coders share, stay up-to-date and grow their
          careers.
        </p>
      </div>
      <div className="flex flex-col">
        <span className="block leading-6 px-4 py-2 me-2 relative text-[#404040] text-8 font-normal hidden md:block">
          <Link to={"/signup"}>
            <a
              className="text-[#3B49E9] flex justify-center mb-1 relative py-[7px] px-[15px] text-8 md:text-[12px] font-normal border-[#3B49E9] border-[1px] hover:bg-[#3B49E9] hover:text-[#fff] rounded-md"
              href=""
            >
              Create account
            </a>
          </Link>
          <Link to={"/login"}>
            <a
              className="flex justify-center relative py-[7px] px-[15px] text-8 md:text-[12px] font-normal hover:decoration-1 hover:text-blue-800 hover:underline"
              href=""
            >
              Log in
              <span className="absolute inset-0 bg-[#3B49DF] opacity-0 hover:opacity-10 rounded-md"></span>
            </a>
          </Link>
        </span>
      </div>
    </article>)
    }
    <CanvaAsideLeft />
      <nav className="mb-6">
        <h3 className="p-2 text-4 font-bold text-[#404040]">Popular Tags</h3>
        <div className="flex flex-col  overflow-y-scroll max-h-[328px] scrollableContent">
          {tagslist.map((tag, index) => {
            return (
              <span key={`tag-${index}`} className="w-full relative">
                      <span className="absolute inset-0 bg-black opacity-0 hover:opacity-10 rounded"></span>
                <a
                  className="py-2 px-4 text-4 text-[#404040] font-normal max-w-full block"
                  href=""
                >
                  #{tag.name}
                </a>
              </span>
            );
          })}
        </div>
      </nav>
      {leftCards.map((card, index) => {
        return (
          <AsideLeftCard
            key={`leftCard-${index}`}
            isLoged={card.isLoged}
            title={card.title}
            anchorTitle={card.anchorTitle}
            cardImage={card.cardImage}
            content={card.content}
            contentAnchor={card.contentAnchor}
            isContentAnchor={card.isContentAnchor}
          />
        );
      })}
    </>
  );
}
