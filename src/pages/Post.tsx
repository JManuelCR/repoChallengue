import { Props as ObjectModel } from "../components/CardPost";
import { discussAndWhatercoller } from "../data/discussAndWatercoller";
import AsideLeftCard from "../components/AsideLeftCard";
import commentIcon from "../assets/icons/comments-count-aside.svg";
import Footter from "../components/Footter";
import heart from "../assets/icons/heart-like-aside.svg";
import mark from "../assets/icons/save-No-Background-Icon-aside.svg";
import Navbar from "../components/Navbar";
import heartPost from "../assets/icons/like-heart-reaction.svg";
import unicorn from "../assets/icons/unicorn-Icon.svg";
import crazy from "../assets/icons/crazy-Man-Icon.svg";
import hands from "../assets/icons/raise-.svg";
import fire from "../assets/icons/fire-Icon.svg";
import commentsIcon from "../assets/icons/comments-count.svg";
import markPost from "../assets/icons/save-No-Background-Icon.svg";
import { Icons } from "../components/CardPost";
import edit from "../assets/icons/three-Dots-Icon.svg"

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


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
    icon: heartPost,
    alternative: "Heart reactions count icon",
  },
];

export default function Post() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const [post, setPosts] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`http://localhost:8080/post/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

console.log(post);
  const image = post.image;
  const user = post.userCreatorId;
  const date = new Date(post.date)
  const creation = date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
  });
  const title = post.title;
  const tags = post.tags;
  const reactions = [post.fireReactions, post.handsReactions, post.crazyReactions, post.unicornReactions, post.heartReactions ];
  const comments = post.comments;
  const time = post.time;
  const content = post.content;
  const marks = post.marks;

  return (
    <>
      <Navbar />
      {loading
      ? <p>Loading ...</p>
      :  <main className="md:p-4 flex gap-4">
      <aside className="hidden md:block md:w-[70px] flex justify-center relative">
        <div className="max-w-[45px] flex flex-col justify-center items-center sticky top-[119px] ms-3">
          <div>
            <button className="max-w-[40px]">
              <span className="p-2 block">
                <img
                  className="h-[auto] w-[24px] max-w-[150%]"
                  src={heart}
                  alt="Heart reaction icon"
                />
              </span>
              <span className="justify-center text-[14px]">{reactions[4]}</span>
            </button>
            <div></div>
          </div>
          <button className="max-w-[50px] flex flex-col items-center">
            <span className="p-2 block flex justify-center">
              <img
                className="h-[auto] w-[30px] max-w-[150%]"
                src={commentIcon}
                alt="Comments icon reaction"
              />
            </span>
            <span className="justify-center text-[14px]">{comments.length}</span>
          </button>
          <button className="max-w-[50px] flex flex-col items-center">
            <span className="p-2 block flex justify-center">
              <img
                className="h-[auto] w-[30px] max-w-[150%]"
                src={mark}
                alt="Marks icon reacction"
              />
            </span>
            <span className="justify-center text-[14px]">{marks}</span>
          </button>
          <button className="max-w-[50px] flex flex-col items-center">
            <span className="p-2 block flex justify-center">
              <img
                className="h-[auto] w-[30px] max-w-[150%]"
                src={edit}
                alt="Marks icon reacction"
              />
            </span>
          </button>
        </div>
      </aside>
      <section className="w-full md:w-10/12 lg:w-8/12 min-h-screen">
        <article className="w-full bg-[#fff] h-auto mb-2 rounded-md">
          {image ? (
            <div className="w-full h-[273px] rounded-t-md">
              <img
                className="w-full h-full object-cover rounded-t-md"
                src={image}
                alt="Card image"
              />
            </div>
          ) : (
            <div className="w-full"></div>
          )}
          <div className="pt-8 px-16">
            <div className="mb-2 flex items-center gap-3">
              <span className="">
                <img
                  className="rounded-full w-[40px] h-[40px]"
                  src={user.profilePicture}
                  alt="User post creator image"
                />
              </span>
              <div className="flex flex-col gap-1">
                <h2 className="text-[#3D3D3D] text-[14px] font-medium cursor-pointer">
                  {user.name}
                </h2>
                <time className="text-[12px] text-[#525252] leading-[15px] cursor-pointer">
                  Post on {creation}
                </time>
              </div>
            </div>
            <div className="flex justify-between mt-8 mb-5">
                <div className="flex">
                  <div className="flex items-center">
                    <span className="py-1 px-2 cursor-pointer font-400 text-[14px] leading-6 flex flex-wrap relative gap-[60px] invertDirection">
                      {reactionsIcons.map((icon, index) => {
                        return (
                          <span
                            key={`reaction-icon-${index}`}
                            className="w-7 h-7 rounded-full bg-[#f5f5f5] flex justify-center items-center block me-[-10px] gap-2"
                          >
                            <span className="text-[#0d0d0d] text-[16px] font-normal]">{reactions[index]}</span>
                            <img
                              className="w-8 h-8 rounded-full"
                              src={icon.icon}
                              alt={icon.alternative}
                            />
                          </span>
                        );
                      })}
                    </span>

                  </div>
                </div>
              </div>
            <div className="">
              <h1 className="mb-1 font-[800] leading-[60px] text-[48px] leading-[37.5px] text-[#171717]">
                {title}
              </h1>
              <div className="mb-1 flex flex-wrap">
                {tags.map((tag, index) => {
                  return (
                    <a
                      href=""
                      key={`tag-${index}`}
                      className="cursor-pointer"
                    >
                      <span>
                        <p className="py-1 px-[7px] text-[16px] leading-[21px] text-[#404040]">
                          #{tag}
                        </p>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          <section className="pt-8">
                <p className="text-[#404040]">{content}</p>
          </section>
          </div>
        </article>
      </section>
      <aside className="hidden lg:block lg:w-[360px]">
        <article className="flex flex-col items-start w-full p-4 pb-2 rounded-md bg-[white] max-h-[1082px] mb-3 border-t-[31.6px] border-[#044977] relative">
          <header className="flex justify-start items-end absolute top-[-16px]">
            <span className="rounded-full w-auto h-auto block mr-[8px]">
              <img
                className="w-12 h-12 rounded-full  h-auto"
                src={user.profilePicture}
                alt="Card image"
              />
            </span>
            <p className="text-[20px] block font-bold text-[#030303] pt-2 block h-9">
              {user.name}
            </p>
          </header>
          <button className="flex justify-center items-center border text-[#d7d7d7d] w-full bg-[#3b49df] rounded-md h-[40px] mt-8 text-[#d4d4d4] font-bold text-[16px]">
            Follow
          </button>
          <div className="mt-4 flex flex-col gap-1">
            <span>
              <p className="text-[12px] font-bold text-[#030303]">JOINED</p>
            </span>
            <span>
              <p className="text-[16px] text-[#404040]">Jul 14, 2023</p>
            </span>
          </div>
          <div className="mb-[10px]">
            <h2 className="block text-2xl text-[#404040] font-bold"></h2>
          </div>
          <div className=""></div>
        </article>
        <article className="flex flex-col items-start w-full p-4 pb-2 rounded-md bg-[white] max-h-[1082px] mb-3 relative">
          <header>
            <h3>Treding on</h3>
            <a href="">DEV Community🔥</a>
          </header>
          <div className="w-full">
            {discussAndWhatercoller[0].watercooler.map((item, index) => {
              return (
                <a
                  className="p-4 block border-b-[1px] border-b-[#F5F5F5]"
                  key={`itemWaterDiscuss-${index}`}
                  href=""
                >
                  <p className="text-[#171717] text-[16px]">{item.subject}</p>
                  <span className="text-[#171717] text-[16px]">
                    {item.comments} comments
                  </span>
                </a>
              );
            })}
          </div>
        </article>
        <AsideLeftCard
          key={`leftCard-01`}
          isLoged={true}
          title={"🌚 Life is too short to browse without "}
          anchorTitle={`dark mode`}
          cardImage={`https://res.cloudinary.com/practicaldev/image/fetch/s--IxrGprDT--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fbsvcwqnj5mgkzuwy24r.png`}
          content={``}
          contentAnchor={``}
          isContentAnchor={false}
        />
      </aside>
    </main>
     }
      <Footter />
    </>
  );
}
