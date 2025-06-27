import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" bottom-0 left-0 right-0 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 text-white shadow-2xl border-t border-blue-500/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          {/* Copyright Section */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl">☀️</div>
            <p className="text-sm font-medium select-none">
              &copy; {currentYear}
              <span className="mx-2 font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Subhadaya Bhatta
              </span>
              <span className="text-blue-200">WeatherApp</span>
            </p>
          </div>

          {/* Links Section */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/SubhaBhatta/WeatherApp"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <span class="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 496 512"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </span>
              <span className="text-sm font-medium">GitHub</span>
            </a>

            {/* Weather Info */}
            <div className="hidden md:flex items-center space-x-1 text-xs text-blue-200">
              <span>🌤️</span>
              <span>Real-time weather data</span>
            </div>
          </div>
        </div>

        {/* Mobile Additional Info */}
        <div className="md:hidden flex justify-center items-center mt-2 pt-2 border-t border-blue-500/20">
          <div className="flex items-center space-x-1 text-xs text-blue-200">
            <span>🌤️</span>
            <span>Real-time weather updates</span>
          </div>
        </div>
      </div>

      {/* Subtle Animation Bar */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-50"></div>
    </footer>
  );
}
