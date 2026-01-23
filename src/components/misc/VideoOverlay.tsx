import { Car, CheckCircle } from "lucide-react";

export function VideoHero({
  source,
  isCeramic,
}: {
  source: string;
  isCeramic: boolean;
}): React.ReactElement {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={source}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark gradient */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/30 to-transparent" />

      {/* Heading + features */}
      {
        !isCeramic ? (
          <div className="relative z-10 w-full px-4 pt-16 sm:pt-24 md:pt-32 flex flex-col items-center">
            <h1
              className="
                max-w-3xl text-center text-white font-bold
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                font-michroma leading-normal
              "
            >
              Protect Your Ride with Premium PPF
            </h1>

            {/* Features block */}
            <div className="mt-8 max-w-2xl mx-auto flex flex-col items-center space-y-4">
              {/* Centered car icon */}
              <div className="w-full flex justify-center mb-10">
                <Car className="w-20 h-20 text-gray-400" />
              </div>

              <div className="space-y-3 text-white text-lg w-full text-wrap">
                <div className="flex items-center gap-4">
                  <CheckCircle className="min-w-6 min-h-6 max-h-6 max-w-6 text-white" />
                  <p className="text-base">
                    Scratch & chip resistance keeps paint flawless
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="min-w-6 min-h-6 max-h-6 max-w-6 text-white" />
                  <p className="text-base">
                    Self-healing topcoat for easy minor-scratch removal
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="min-w-6 min-h-6 max-h-6 max-w-6 text-white" />
                  <p className="text-base">
                    UV protection prevents fading & maintains gloss
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="min-w-6 min-h-6 max-h-6 max-w-6 text-white" />
                  <p className="text-base">
                    Backed by 10 year warranty
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : null
      }
    </div>
  );
}
