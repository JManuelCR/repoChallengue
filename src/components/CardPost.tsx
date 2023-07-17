import heart from "../assets/icons/like-heart-reaction.svg";
import unicorn from "../assets/icons/unicorn-Icon.svg";
import crazy from "../assets/icons/crazy-Man-Icon.svg";
import hands from "../assets/icons/raise-.svg";
import fire from "../assets/icons/fire-Icon.svg";
import commentsIcon from "../assets/icons/comments-count.svg";
import mark from "../assets/icons/save-No-Background-Icon.svg";
import { Link } from "react-router-dom";

export interface Icons {
  icon: string;
  alternative: string;
}
const reactionsIcons: Icons[] = [
  {
    icon: fire,
    alternative: "Fire reactions count icon",
  },
  {
    icon: hands,
    alternative: "Rise reactions hands count icon",
  },
  {
    icon: crazy,
    alternative: "Crazy reactions count icon",
  },
  {
    icon: unicorn,
    alternative: "Unicorn reactions count icon",
  },
  {
    icon: heart,
    alternative: "Heart reactions count icon",
  },
];

export interface Props {
  image: string;
  date: Date;
  title: string;
  tags: [string];
  heartReactions: number;
  unicornReactions : number;
  crazyReactions: number;
  handsReactions: number;
  fireReactions: number;
  marks: number;
  comments: number;
  time: number;
  content: string;
  userCreatorId: {
    name: string;
    profilePicture: string;
    _id: string;
  };
  _id: string;
}
export default function CardPost(props: Props) {
  const image = props.image;
  const user = props.userCreatorId.name;
  const userImg = props.userCreatorId.profilePicture;
  const date = new Date(props.date)
  const creation = date.toLocaleDateString('en-US',{month: 'short', day: '2-digit'});
  const title = props.title;
  const tags = props.tags;
  const reactions = props.heartReactions + props.unicornReactions + props.crazyReactions + props.handsReactions + props.fireReactions;
  const comments = props.comments.length;
  const time = props.time;
  return (
    <article className="bg-[#fff] mb-2 rounded-md w-full">
      <Link to={`/post?id=${props._id}`}>
      <a className="w-full h-[208px]" href="">
        { image 
        ? (<div className="w-full h-[208px] rounded-t-md">
        <img
          className="w-full h-full object-cover rounded-t-md"
          src={image}
          alt="Card image"
        />
      </div>) : (<div className="w-full">

        </div>) 
      }
  
        <div className="w-full p-[20px]">
          <div className="mb-2 flex items-center gap-3">
            <span className="">
              <img
                className="rounded-full w-8 h-8"
                src={userImg}
                alt="User post creator image"
              />
            </span>
            <div className="flex flex-col">
              <h2 className="text-[#3D3D3D] text-[14px] font-medium cursor-pointer">
                {user}
              </h2>
              <time className="text-[12px] text-[#525252] leading-[15px] cursor-pointer">
                { creation }
              </time>
            </div>
          </div>
          <div className="md:ps-[40px]">
            <h1 className="mb-1 font-bold text-[30px] leading-[37.5px] text-[#171717]">
              {title}
            </h1>
            <div className="mb-1 flex flex-wrap">
              {tags.map((tag, index) => {
                return (
                  <a href="" key={`tag-${index}`} className="cursor-pointer">
                    <span>
                      <p className="py-1 px-[7px] text-[14px] leading-[21px] text-[#404040]">
                        #{tag}
                      </p>
                    </span>
                  </a>
                );
              })}
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <div className="flex items-center">
                  <span className="py-1 px-2 cursor-pointer font-400 text-[14px] leading-6 flex relative invertDirection">
                    {reactionsIcons.map((icon, index) => {
                      return (
                        <span
                          key={`reaction-icon-${index}`}
                          className="w-6 h-6 rounded-full bg-[#f5f5f5] flex justify-center items-center block me-[-10px]"
                        >
                          <img
                            className="w-[18px] h-[18px] rounded-full"
                            src={icon.icon}
                            alt={icon.alternative}
                          />
                        </span>
                      );
                    })}
                  </span>
                  <span className="flex text-[14px] font-normal gap-1">
                    <span className="">{reactions}</span>
                    <p className="hidden md:block">reactions</p>
                  </span>
                  <span className="flex items-center ms-[14px]">
                    <span className="">
                      <img
                        className=""
                        src={commentsIcon}
                        alt="Comments count icon"
                      />
                    </span>
                    <span className="hidden md:flex items-center gap-1 text-md text-[14px]">
                        <span className="text-md text-[14px]">{comments}</span>
                      <p className="text-md text-[14px]">comments</p>
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <small className="text-md me-2 text-[12px]">{time} min read</small>
                <button className="">
                  <span className="">
                    <img className="w-6 h-6" src={mark} alt="Save port mark icon" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </a>
      </Link>
    </article>
  );
}
