import { Phone } from "lucide-react";

const CTA = () => {
  return (
    <div className="bg-orange-600 py-16">
      <div className="space-y-6 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white">
          Kuşunuzun Sağlığı İçin Hemen İletişime Geçin
        </h2>
        <p className="text-xl text-orange-100">
          Deneyimli veteriner hekimimizden randevu alın
        </p>

        {/* Button Container */}
        <div className="flex flex-col sm:flex-col gap-4 justify-center">
          <a
            className="flex items-center bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold justify-center gap-4 hover:bg-orange-100 transition-colors"
            href="tel:17625371231"
          >
            <Phone className="h-5 w-5" />
            <span>+17625371231</span>
          </a>
          <a
            className=" bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold  hover:bg-orange-800 transition-colors"
            href="/contact"
          >
            <span>İletişim Blgileri</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
