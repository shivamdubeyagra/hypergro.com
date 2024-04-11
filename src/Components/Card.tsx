import { Post } from "../Contex/DataContex";
import { MdVerified } from "react-icons/md";
interface CardProps {
    item: Post;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="w-[400px] h-[300px] rounded-lg transform transition-transform duration-300 hover:scale-105">
      <div className="w-full h-[200px]">
        <img
          src={item.submission.thumbnail}
          alt=""
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="flex p-2">
        <div className="mr-8 mt-3">
          <img
            src={item.creator.pic}
            alt=""
            className="object-cover rounded-full w-[40px] h-[40px]"
          />
        </div>
        <div className="text-lg">
          <p className="text-2xl">{item.submission.title}</p>
          <p className="flex items-center">{item.creator.handle}<MdVerified className="ml-2"/></p>
          <p>{item.creator.name}</p>  
        </div>
      </div>
    </div>
  );
};

export default Card;
