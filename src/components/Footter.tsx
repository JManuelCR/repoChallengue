export default function Footter() {
  const firstAnchorList = [
    "Home",
    "Listings",
    "Podcasts",
    "Videos",
    "Tags",
    "FAQ",
    "Forem Shop",
    "Sponsors",
    "About",
    "Contact",
    "Guides",
    "Software comparisons",
  ];
  const secondList = ["Code of Conduct", "Privacy Policy", "Terms of use"];

  return (
    <footer className="p-[48px] bg-[#e5e5e5] w-full">
      <div className="flex flex-col justify-center text-center gap-2">
        <p className="text-[black] font-thin">
          <a className="text-[#3B49DF] font-normal" href="">DEV Community</a>— A constructive and inclusive social
          network for software developers. With you every step of your journey.
        </p>
        <ul className="flex gap-4 justify-center flex-wrap">
          {firstAnchorList.map((item, index, arr) => {
            return (
              <li 
              key={`item-first-list-${index}`}
              className="relative"
              >
                <a className="text-6 text-[#3B49DF] font-light ps-1" href="">{item}</a>
                { index === arr.length-1
                        ? ""
                        : <span className="text-5xl absolute text-[#575757] translate-y-[-50%] top-[-10%] ps-1 opacity-50%">.</span>
                } 
              </li>
            );
          })}
        </ul>
        <ul className="flex gap-4 justify-center flex-wrap">
        {secondList.map((item, index, arr) => {
            return (
              <li 
              key={`item-first-list-${index}`}
              className="relative"
              >
                <a className="text-6 text-[#3B49DF] font-light ps-1" href="">{item}</a>
                {  index === arr.length-1
                        ? ""
                        : <span className="text-5xl absolute text-[#575757] translate-y-[-50%] top-[-10%] ps-1 opacity-50%">.</span>
                } 
              </li>
            );
          })}
        </ul>
        <div>
          <p className="text-[black] font-thin">
            Built on <a className="text-[#3B49DF] font-extralight" href="">Forem</a>— the <a className="text-[#3B49DF] font-extralight" href="">open source</a>{" "}
            software that powers <a className="text-[#3B49DF] font-extralight" href="">DEV</a> and other inclusive
            communities.
          </p>
          <p className="text-[black] font-thin">
            Made with love and <a className="text-[#3B49DF] font-extralight" href="">Ruby on Rails</a>. DEV Community ©
            2016 - 2023.
          </p>
        </div>
      </div>
    </footer>
  );
}
