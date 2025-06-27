import React, { useState, useEffect } from "react";

const API_KEY = "f5f81f443a9ef3ea3e538aa002058d7d";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);

  // Load recent searches on component mount
  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("recentWeatherSearches") || "[]"
    );
    setRecentSearches(saved.slice(0, 5));
  }, []);

  const saveToRecentSearches = (cityName) => {
    const updated = [
      cityName,
      ...recentSearches.filter((c) => c !== cityName),
    ].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem("recentWeatherSearches", JSON.stringify(updated));
  };

  const fetchWeather = async (searchCity = city) => {
    if (!searchCity.trim()) {
      setError("Please enter a city name.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          searchCity
        )}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setWeather(data);
      saveToRecentSearches(data.name);
      setCity("");
    } catch (err) {
      setError("City not found. Please enter a valid city name.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const getWeatherBackground = () => {
    if (!weather) return "from-blue-400 to-blue-600";

    const condition = weather.weather[0].main.toLowerCase();
    const isDay =
      weather.dt > weather.sys.sunrise && weather.dt < weather.sys.sunset;

    if (condition.includes("clear")) {
      return isDay
        ? "from-yellow-400 to-orange-500"
        : "from-purple-800 to-blue-900";
    } else if (condition.includes("cloud")) {
      return "from-gray-400 to-gray-600";
    } else if (condition.includes("rain") || condition.includes("drizzle")) {
      return "from-blue-600 to-gray-700";
    } else if (condition.includes("snow")) {
      return "from-blue-200 to-white";
    } else if (condition.includes("thunder")) {
      return "from-gray-800 to-purple-900";
    }
    return "from-blue-400 to-blue-600";
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${getWeatherBackground()} transition-all duration-1000 p-4`}
    >
      <div className="max-w-md mx-auto pt-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
            ☀️ Weather Now
          </h1>
          <p className="text-white/80">Get real-time weather updates</p>
        </div>

        {/* Search Section */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 mb-6 shadow-xl">
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
              placeholder="Enter city name..."
              className="flex-1 px-4 py-3 rounded-xl border-0 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-800 placeholder-gray-500"
            />
            <button
              onClick={() => fetchWeather()}
              disabled={loading}
              className="bg-white/30 hover:bg-white/40 text-white px-6 py-3 rounded-xl transition-all duration-200 disabled:opacity-50 backdrop-blur-sm font-medium"
            >
              {loading ? "..." : "🔍"}
            </button>
          </div>

          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <div>
              <p className="text-white/80 text-sm mb-2">Recent searches:</p>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((recent, index) => (
                  <button
                    key={index}
                    onClick={() => fetchWeather(recent)}
                    className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-full text-sm transition-all duration-200"
                  >
                    {recent}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500/20 backdrop-blur-md border border-red-300/30 rounded-xl p-4 mb-6">
            <p className="text-white text-center">⚠️ {error}</p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 text-center">
            <div className="animate-spin w-8 h-8 border-3 border-white/30 border-t-white rounded-full mx-auto mb-4"></div>
            <p className="text-white">Loading weather data...</p>
          </div>
        )}

        {/* Weather Display */}
        {weather && !loading && (
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-xl">
            {/* Location */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-1">
                📍 {weather.name}, {weather.sys.country}
              </h2>
              <p className="text-white/80 text-sm">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* Main Weather */}
            <div className="text-center mb-6">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                alt="weather icon"
                className="w-24 h-24 mx-auto mb-2"
              />
              <div className="text-6xl font-bold text-white mb-2">
                {Math.round(weather.main.temp)}°
              </div>
              <p className="text-xl text-white/90 capitalize mb-2">
                {weather.weather[0].description}
              </p>
              <p className="text-white/70 text-sm">
                Feels like {Math.round(weather.main.feels_like)}°C
              </p>
            </div>

            {/* Weather Details Grid */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white/10 rounded-xl p-3 text-center">
                <div className="text-2xl mb-1">💧</div>
                <div className="text-white/80 text-xs">Humidity</div>
                <div className="text-white font-semibold">
                  {weather.main.humidity}%
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 text-center">
                <div className="text-2xl mb-1">💨</div>
                <div className="text-white/80 text-xs">Wind Speed</div>
                <div className="text-white font-semibold">
                  {weather.wind.speed} m/s
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 text-center">
                <div className="text-2xl mb-1">👁️</div>
                <div className="text-white/80 text-xs">Visibility</div>
                <div className="text-white font-semibold">
                  {(weather.visibility / 1000).toFixed(1)} km
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 text-center">
                <div className="text-2xl mb-1">🌡️</div>
                <div className="text-white/80 text-xs">Pressure</div>
                <div className="text-white font-semibold">
                  {weather.main.pressure} hPa
                </div>
              </div>
            </div>

            {/* Sun Times */}
            <div className="flex justify-between bg-white/10 rounded-xl p-3">
              <div className="text-center">
                <div className="text-lg mb-1">🌅</div>
                <div className="text-white/80 text-xs">Sunrise</div>
                <div className="text-white text-sm font-medium">
                  {formatTime(weather.sys.sunrise)}
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg mb-1">🌇</div>
                <div className="text-white/80 text-xs">Sunset</div>
                <div className="text-white text-sm font-medium">
                  {formatTime(weather.sys.sunset)}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
