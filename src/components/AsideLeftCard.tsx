import threeDotsmenu from "../assets/icons/three-Dots-Icon.svg";
export interface Props {
  isLoged: boolean;
  title: string;
  anchorTitle: string;
  cardImage: string;
  content: string;
  contentAnchor: string;
  isContentAnchor: boolean;
}

export default function AsideLeftCard(props: Props) {
  const cardTilte = props.title;
  const anchorTitle = props.anchorTitle;
  const cardImage = props.cardImage;
  const isAnAnchorContent = props.isContentAnchor;
  const cardContent = props.content;

  return (
    <article className="w-full p-3 pb-4 rounded-md bg-[white] max-h-[1082px] mb-3 cursor-pointer">
      <header className="flex p-2 justify-between items-center">
        <p className="text-[14px]">DEV Community</p>
        <span className="rounded w-6 h-auto">
          <img className="w-4 h-auto" src={threeDotsmenu} alt="Card image" />
        </span>
      </header>
      <div className="mb-5">
        <img
          className="rounded-md max-h-[765px] max-w-full"
          src={cardImage}
          alt="Card content image"
        />
      </div>
      <div className="mb-[10px]">
        <h2 className="block text-2xl text-[#404040] font-bold">
          {cardTilte} {anchorTitle && <a className="text-[#3B49E9]" href="">{anchorTitle}</a>}
        </h2>
      </div>
      <div className="">
        {isAnAnchorContent ? (
          <a className="text-[#3B49E9]" href="">{cardContent}</a>
        ) : (
          <p>{cardContent}</p>
        )}
      </div>
    </article>
  );
}
