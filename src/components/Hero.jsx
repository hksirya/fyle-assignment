import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mx-auto space-y-10 mt-20  pb-10 ">
        <div className="flex max-w-4xl">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-poppins text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-600 to-purple-800 font-poppins  font-bold text-center ">
              Hey People @ Fyle.
            </h1>
            <h1 className="text-3xl md:text-4xl font-poppins text-transparent bg-clip-text bg-gradient-to-r from-gray-600 via-white to-gray-600 font-poppins  font-bold text-center">
              I am Harsh ! Here is the completed project
            </h1>
          </div>
        </div>
        <p className="font-poppins text-gray-400 text-normal md:text-xl text-center">
          Enter the GitHub username to view their repositories.
        </p>
      </div>
      <SearchBar />
    </div>
  );
};

export default Hero;
