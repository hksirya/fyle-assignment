const RepoCard = ({ name, language, description, html_url }) => {
  // Truncate name if it's longer than 13 characters
  const truncatedName = name.length > 13 ? name.substring(0, 13) + ".." : name;

  return (
    <div className="flex flex-col bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-dashed border-gray-700 p-10 font-poppins space-y-4">
      <h1 className="font-poppins text-slate-100 text-3xl font-extrabold text-center text-gray-800 mb-5">
        {truncatedName}
      </h1>
      <div className="flex-1 text-gray-400">{description}</div>

      <div>
        {language && (
          <div className="bg-gray-300/20 rounded-lg p-2 inline-block text-sm text-white border border-gray-100">
            {language}
          </div>
        )}
      </div>
      <button className="bg-gradient-to-r from-pink-400 via-pink-600 to-purple-800 p-2 px-8 rounded-lg my-auto mt-2">
        <a
          target="_blank"
          href={html_url}
          className="font-poppins font-normal md:font-lg text-white"
          rel="noreferrer"
        >
          Project Link
        </a>
      </button>
    </div>
  );
};

export default RepoCard;
