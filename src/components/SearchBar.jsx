import { useState } from "react";
import { Search, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(""); // Clear previous error messages
    setLoading(true); // Set loading state while making the API call

    try {
      const githubResponse = await fetch(
        `https://api.github.com/users/${username}`
      );

      if (githubResponse.ok) {
        navigate(`/${username}`);
        console.log("Username exists on GitHub");
      } else {
        // Username does not exist on GitHub
        setError(
          "Username not found on GitHub. Please enter a valid username."
        );
        console.error("Username not found on GitHub");
      }
    } catch (error) {
      console.error("Error checking GitHub:", error);
      setError(
        "An error occurred while checking the username. Please try again."
      );
    } finally {
      setLoading(false); // Reset loading state when API call is completed
    }
  };

  return (
    <div className="max-w-xs xl:max-w-xl md:max-w-4xl mx-auto">
      <form
        className={`flex items-center ${error ? "border-red-500" : ""}`}
        onSubmit={handleSubmit}
      >
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Github className="text-gray-700" />
          </div>
          <input
            type="text"
            id="simple-search"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`bg-gray-50 border-3 ${
              error ? "border-red-500" : "border-gray-300"
            } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 placeholder:font-poppins `}
            placeholder="Enter GitHub username like johnpapa"
            required
          />
        </div>
        <button
          type="submit"
          className={`p-2.5 ms-2 text-sm font-medium text-white bg-pink-600 rounded-lg border border-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 items-center justify-center`}
          disabled={loading}
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            <>
              <Search />
              <span className="sr-only">Search</span>
            </>
          )}
        </button>
      </form>
      {error && <p className="text-red-500 mt-3 font-poppins">{error}</p>}
    </div>
  );
};

export default SearchBar;
