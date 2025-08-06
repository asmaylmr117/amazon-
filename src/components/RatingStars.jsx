import { Star } from "lucide-react";
function RatingStars ({number})
    {
        return  (
            <span className="flex">
                <Star size={20} className="text-yellow-400 fill-yellow-400"/>
                <Star size={20}  className={`${number >= 2? "text-yellow-400 fill-yellow-400":"text-gray-400"}`}/>
                <Star size={20}  className={`${number >= 3? "text-yellow-400 fill-yellow-400":"text-gray-400"}`}/>
                <Star size={20}  className={`${number >= 4? "text-yellow-400 fill-yellow-400":"text-gray-400"}`}/>
                <Star size={20}  className={`${number >= 5? "text-yellow-400 fill-yellow-400":"text-gray-400"}`}/>
            </span>
        )
    }

export default RatingStars;
