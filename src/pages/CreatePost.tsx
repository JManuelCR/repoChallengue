import { Link } from "react-router-dom";
import devtoIcon from "../assets/img/devto-icon.png";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Props as ContentInfo } from "../components/CardPost";
interface Tags {
  tag: string;
}

export default function CeratePost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContentInfo>();
  const [clipboardText, setClipboardText] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [heartReactions, setHeartReactions] = useState(0);
  const [unicornReactions, setUnicornReactions] = useState(0);
  const [crazyReactions, setCrazyReactions] = useState(0);
  const [handsReactions, setHandsReactions] = useState(0);
  const [fireReactions, setFireReactions] = useState(0);
  const [tagsCount, setTagsCount] = useState();
  const [tagsTo, setTags] = useState<Tags[]>([]);
  const [tag, setTag] = useState("");
  const currentDate = new Date();
  console.log(getRamdomInt(30));

  const userToken = localStorage.getItem("token");
  const payload = userToken.split(".")[1];
  const idUser = JSON.parse(atob(payload)).id;

  function onAddItem() {
    if (tag) {
      const tagInput: Tags = {
        tag: tag,
      };
      setTags([tagInput, ...tagsTo]);
      console.log("tags", tagsTo);
      setTag("");
    } else {
      alert("Falta llenar un campo");
    }
  }

  function onEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      onAddItem();
    }
  }

  function onDelete(indexToDelete: number) {
    tagsTo.splice(indexToDelete, 1);
    setTags([...tagsTo]);
  }

  function empty() {
    setTags([]);
  }

  function getRamdomInt (max) { 
   return Math.floor(Math.random() * max);
  }
  
  function onSubmit(data: ContentInfo) {
    const myTags = tagsTo.map((item) => item.tag);
    const heart = getRamdomInt(40);
    const unicorn = getRamdomInt(50);
    const crazy = getRamdomInt(40);
    const hands = getRamdomInt(30);
    const fire = getRamdomInt(45);
    const marks = getRamdomInt(70);

    fetch("http://localhost:8080/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify({
        userCreatorId: idUser,
        title: data.title,
        content: data.content,
        image: data.image,
        time: data.time,
        tags: myTags,
        date: currentDate,
        heartReactions: heart,
        unicornReactions: unicorn,
        crazyReactions: crazy,
        handsReactions: hands,
        fireReactions: fire,
        marks: marks
      }),
    })
      .then((response) => {
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
      })
      .catch((error) => {
        alert(error);
      });
    empty();
  }

  return (
    <div className="px-4">
      <nav className="h-[56px] w-full flex items-center p-2">
        <span className="me-3">
          <Link to={"/"}>
            <a href="">
              <img
                className="h-[40px] w-[50px] max-w-[100%]"
                src={devtoIcon}
                alt="Devto icon"
              />
            </a>
          </Link>
        </span>
        <div className="flex items-center w-[75%] justify-between">
          <div className="flex items-center">
            <div className="">
              <span className="font-normal text-base text-[#171717]">
                Create Post
              </span>
            </div>
          </div>
          <nav>
            <ul className="flex items-center gap-4">
              <li className="font-bold text-base text-[#171717]">Edit</li>
              <li className="font-normal text-base text-[#171717]">Preview</li>
            </ul>
          </nav>
        </div>
        <div className="w-[15%] flex justify-end items-center">
          <Link to="/">
            <button className="flex justify-center items-center w-6 h-6 text-[#171717] font-normal text-xl">
              X
            </button>
          </Link>
        </div>
      </nav>
      <main className="min-h-screen flex w-full">
        <div className="hidden md:block md:w-[75px]"></div>
        <div className="w-full md:w-[80%] lg:w-[70%] relative">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 md:p-16 bg-[#fff]"
          >
            <div className="w-full max-h-[240px] md:max-h-[240px] mb-4">
              <img
                className="w-full max-h-[240px]  object-cover rounded-t-md"
                src={clipboardText}
                alt=""
              />
            </div>
            <div className="flex flex-col  md:flex-row items-start md:items-center justify-start gap-3 mb-4 w-full">
              <label
                className="text-sm md:text-md lg:text-lg md:block md:w-[30%] text-[#151515]"
                htmlFor=""
              >
                Add a cover image:
              </label>
              <input
                type="text"
                className="rounded-md w-[100%] md:w-[70%]"
                placeholder="Paste an url image"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onPaste={(e) =>{
                  setClipboardText(e.clipboardData.getData("text/plain"));
                  setInputValue(clipboardText)
                }
                }
                {...register("image")}
              />
            </div>
            <input
              type="text"
              className="placeholder-[#525252] text-[#171717] border-none text-[80%] font-extrabold px-4 py-2 rounded-md w-full mb-3"
              placeholder="New post title here..."
              {...register("title")}
            />
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              className="mb-4 border-none w-full text-[14px] font-normal text-[#151515] placeholder-[#525252] rounded-md"
              placeholder="Write your content here..."
              {...register("content")}
            ></textarea>
            <div className="flex flex-col  md:flex-row items-start md:items-center justify-start gap-3 mb-4 w-full">
              <label
                className="text-sm md:text-md lg:text-lg md:block md:w-[30%] text-[#151515]"
                htmlFor=""
              >
                Estimeated time to read!:
              </label>
              <input
                type="text"
                className="rounded-md w-[100%] md:w-[70%]"
                placeholder="Estimated time to read..."
                {...register("time")}
              />
            </div>
            <div className="rounded-md w-full p-3 md:p-24 mt-[260px] md:mt-[150px]">
              <button
                className="rounded-md text-[#fff] text-lg font-normal bg-[#3B49E9] w-full md:w-36 py-2 mt-14 lg:ms-28 md:ms-14"
                type="submit"
              >
                Create
              </button>
            </div>
          </form>
          <div className="absolute flex flex-col  items-start md:items-center justify-start gap-3 mb-4 w-full ms-4 top-[64%] md:top-[62%] md:w-[80%] md:ms-[60px]">
            <div className="w-full flex flex-col justify-start items-start md:flex-row md:items-center md:justify-center">
              <label
                className="text-sm md:text-md lg:text-lg md:block md:w-[30%] text-[#151515]"
                htmlFor=""
              >
                Add tags:
              </label>
              <input
                id="tag"
                type="text"
                className="rounded-md w-[70%] md:w-[65%] block"
                placeholder="Tags..."
                onKeyUp={onEnter}
                onChange={(event) => setTag(event.target.value)}
                value={tag}
              />
              <button
                onClick={onAddItem}
                className="md:ms-4 bg-blue-800 w-[120px] h-[34px] mt-2 px-6 flex justify-center items-center text-[12px] text-[#ffff]"
              >
                Add tag
              </button>
            </div>
            <div className="border-2 w-[90%] h-[180px] border-[#9a9a9a] rounded-md overflow-y-scroll flex flex-wrap gap-4 px-6 py-4">
              {tagsTo.map((tagToShow, index) => {
                return (
                  <div
                    key={`tag-${index}`}
                    className="flex justify-center items-center gap-2 px-2 py-2 max-w-[150px] max-h-[40px] bg-blue-800 text-[#fff] border-2 border-[#4d3701]"
                  >
                    <p className="block h-[18px] text-[14px] flex justify-center items-center">
                      # {tagToShow.tag}
                    </p>
                    <button
                      onClick={() => onDelete(index)}
                      className="block text-[2a2a2a] text-[20px] font-bold flex justify-center items-start cursor-pointer"
                    >
                      x
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-[25%]">
          <div className="px-4 mt-32">
            <h2 className="text-[#131313] font-bold text-xl">
              Writing a Great Post Title
            </h2>
            <p className="text-[#838383] text-md p-2">
              Think of your post title as a super short (but compelling!)
              description — like an overview of the actual post in one short
              sentence. Use keywords where appropriate to help ensure people can
              find your post by search.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
