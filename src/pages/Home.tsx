/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Navbar from "../components/Navbar";
import Footter from "../components/Footter";
import AsideLeft from "../components/AsideLeft";
import CardPost from "../components/CardPost";
import AsideRight from "../components/AsideRight";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";


export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/post")
      .then((res) => res.json())
      .then((res) => {
        setPosts(res.data); 
      })
      .catch(() => {
        toast.error("Error en el servidor");
      });
  }, []);

  return (
    <>
      <Navbar />
      <ToastContainer 
      theme="dark"
      />
      <main className="min-h-screen max-w-[1280px] flex gap-4 p-4 mx-auto">
        <aside className="hidden md:block w-0 md:w-1/4">
          <AsideLeft />
        </aside>
        <section className="w-full md:w-3/4 lg:w-1/2">
          <nav className="flex justify-between">
            <ul className="flex flex-nowrap py-1">
              <a className="py-2 px-4 text-[18px] text-[#121212] font-bold cursor-pointer relative" href="">Relevant<span className="absolute inset-0 bg-black opacity-0 hover:opacity-10 rounded"></span></a>
              <a className="py-2 px-4 text-[18px] text-[#575757] cursor-pointer relative" href="">Latest<span className="absolute inset-0 bg-black opacity-0 hover:opacity-10 rounded"></span></a>
              <a className="py-2 px-4 text-[18px] text-[#575757] cursor-pointer relative" href="">Top<span className="absolute inset-0 bg-black opacity-0 hover:opacity-10 rounded"></span></a>
            </ul>
          </nav>
            {
                posts.map((card,index) => {
                    return (
                        <CardPost
                        key={`card-${index}`}
                        image={card.image}
                        date={card.date}
                        title={card.title}
                        comments={card.comments}
                        heartReactions={card.heartReactions}
                        unicornReactions={card.unicornReactions}
                        crazyReactions={card.crazyReactions}
                        handsReactions={card.handsReactions}
                        fireReactions={card.fireReactions}
                        marks={card.marks}
                        tags={card.tags}
                        time={card.time} 
                        content={card.content} 
                        userCreatorId={{
                          name: card.userCreatorId.name,
                          profilePicture: card.userCreatorId.profilePicture,
                          _id: card.userCreatorId._id, 
                        }} 
                        _id={card._id}                        />
                    )
                })
            }
        </section>
        <aside className="hidden lg:block w-0 lg:w-1/4">
         <AsideRight />
        </aside>
      </main>
      <Footter />
    </>
  );
}
