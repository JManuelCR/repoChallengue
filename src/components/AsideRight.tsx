import { discussAndWhatercoller } from "../data/discussAndWatercoller";

export interface Props {
  discuss: Array<{ subject: string; comments: number }>;
  watercooler: Array<{ subject: string; comments: number }>;
}

export default function AsideRight() {
  return (
    <aside className="flex flex-col gap-4">
      <section className="bg-[#fff] rounded p ">
        <header className="flex justify-between px-4 py-3 items-center">
          <h3 className="text-[#242424] text-[20px] font-bold">Listings</h3>
          <span>
            <a href="" className="text-[#3B49E9] font-medium text-[14px]">
              See all
            </a>
          </span>
        </header>
        <div className="w-full">
          {discussAndWhatercoller[0].discuss.map((item, index) => {
            return (
              <a
                className="p-4 block border-b-[1px] border-b-[#F5F5F5]"
                key={`itemWaterDiscuss-${index}`}
                href=""
              >
                <p className="text-[#171717] text-[16px]">{item.subject}</p>
                <span className="text-[#171717] text-[16px]">{item.comments} comments</span>
              </a>
            );
          })}
        </div>
      </section>
      <section className="bg-[#fff] rounded p ">
        <header className="flex justify-between px-4 py-3 items-center">
          <h3 className="text-[#242424] text-[20px] font-bold">#discuss</h3>
        </header>
        <div className="">
          {discussAndWhatercoller[0].watercooler.map((item, index) => {
            return (
              <a
                className="p-4 block border-b-[1px] border-b-[#F5F5F5]"
                key={`itemWaterDiscuss-${index}`}
                href=""
              >
                <p className="text-[#171717] text-[16px]">{item.subject}</p>
                <span className="text-[#171717] text-[16px]">{item.comments} comments</span>
              </a>
            );
          })}
        </div>
      </section>
      <section className="bg-[#fff] rounded p ">
        <header className="flex justify-between px-4 py-3 items-center">
          <h3 className="text-[#242424] text-[20px] font-bold">#watercooler</h3>
        </header>
        <div className="">
          {discussAndWhatercoller[0].watercooler.map((item, index) => {
            return (
              <a
                className="p-4 block border-b-[1px] border-b-[#F5F5F5]"
                key={`itemWaterDiscuss-${index}`}
                href=""
              >
                <p className="text-[#171717] text-[16px]">{item.subject}</p>
                <span className="text-[#171717] text-[16px]">{item.comments} comments</span>
              </a>
            );
          })}
        </div>
      </section>
      <section className="border-b-[#d3d3d3] text-[16px] border-b-[2px] mt-2 mb-4">
        <header className="flex justify-between px-4 py-3 items-center">
          <h3 className="text-[#242424] text-[12px] font-light leading-2 specialFont">trending guides/resources</h3>
        </header>
        <div className="">
          {discussAndWhatercoller[0].watercooler.map((item, index) => {
            return (
              <a
                className="p-4 block text-[#171717] text-[16px]"
                key={`itemWaterDiscuss-${index}`}
                href=""
              >
                <p className="text-[#171717] text-[16px]">{item.subject}</p>
                <span className="text-[#171717] text-[16px]">{item.comments} comments</span>
              </a>
            );
          })}
        </div>
      </section>
      <section className="border-b-[#d3d3d3] text-[16px] border-b-[2px] mt-2 mb-4">
        <header className="flex justify-between px-4 py-3 items-center">
          <h3 className="text-[#242424] text-[12px] font-light leading-2 specialFont">recently queried</h3>
        </header>
        <div className="">
          {discussAndWhatercoller[0].watercooler.map((item, index) => {
            return (
              <a
                className="p-4 block text-[#171717] text-[16px]"
                key={`itemWaterDiscuss-${index}`}
                href=""
              >
                <p className="text-[#171717] text-[16px]">{item.subject}</p>
                <span className="text-[#171717] text-[16px]">{item.comments} comments</span>
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
}
