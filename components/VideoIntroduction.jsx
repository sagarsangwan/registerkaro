import { Lightbulb } from "lucide-react";

export default function VideoIntroduction() {
  return (
    <div className="bg-[#1D3B63] text-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold">
          Our Video Introductions
        </h2>
        <p className="mt-2 text-gray-300">
          Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
          vulputate pellentesque a diam tincidunt.
        </p>

        <div className="flex items-start gap-4 mt-6 flex-col">
          <div className="flex items-start gap-4 mt-4">
            <div className="bg-yellow-500 p-3 rounded-full text-white flex flex-col">
              <Lightbulb size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Explore ideas together</h3>
              <p className="text-gray-300 text-sm">
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 mt-4">
            <div className="bg-yellow-500 p-3 rounded-full text-white flex flex-col">
              <Lightbulb size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Bring those ideas to life</h3>
              <p className="text-gray-300 text-sm">
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}

      <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube Video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
