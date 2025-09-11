import { Heart } from "lucide-react";

const HeroImageContainer = () => {
  return (
    <div className="relative ">
      <img
        src="https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="Papağan"
        className="rounded-2xl shadow-2xl"
      />
      <div className="absolute -bottom-6 -left-6 bg-white p-4 shadow-xl rounded-xl ">
        <div className="flex items-center gap-3">
          <Heart className="text-orange-600" />
          <div>
            <p className="font-semibold text-gray-900">Uzaman Bakım</p>
            <p className="text-sm text-gray-600">7+ Yıl Deneyim</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImageContainer;
