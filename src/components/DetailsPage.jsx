import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import ErrorPage from "./Error";
import Loader from "../components/Loader";
import { Component, Landmark, Twitter, MapPin } from "lucide-react";
import RepoCard from "./RepoCard";
import Navbar from "./Navbar";

const DetailsPage = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const reposPerPage = 9;
  const pagesVisited = currentPage * reposPerPage;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch(`https://api.github.com/users/${id}`);
        const reposResponse = await fetch(
          `https://api.github.com/users/${id}/repos`
        );

        if (userResponse.ok && reposResponse.ok) {
          const userData = await userResponse.json();
          const reposData = await reposResponse.json();

          console.log(reposData);
          setUserData(userData);
          setRepos(reposData);
        } else {
          setError("Error fetching user data or repositories");
        }
      } catch (error) {
        setError("An error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const displayRepos = repos
    .slice(pagesVisited, pagesVisited + reposPerPage)
    .map((repo) => <RepoCard key={repo.id} {...repo} />);

  const pageCount = Math.ceil(repos.length / reposPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  if (error) {
    return <ErrorPage />;
  }

  // Define an array of objects representing different sections in your user data
  const userSections = [
    { icon: <Component />, text: userData?.bio },
    { icon: <Landmark />, text: userData?.company },
    { icon: <Twitter />, text: userData?.twitter_username },
  ];

  return (
    <div className="bg-[#00040f] min-h-screen p-10">
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-4xl flex flex-col md:flex-row h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-2 border-dashed border-gray-700 p-6 mx-auto ">
          <div className="flex flex-col md:flex-row ">
            <div className="h-40 w-40 mx-auto md:mx-0 my-auto">
              <img
                src={userData?.avatar_url}
                alt="User Avatar"
                className="rounded-full border-white border-4"
              />
            </div>

            <div className="flex flex-col space-y-4 p-4 ml-0 md:ml-10 font-poppins ">
              <h1 className="text-white text-4xl font-semibold">
                {userData?.name}
                <h1 className="text-gray-400 text-sm font-normal flex flex-row mb-1">
                  <MapPin size={20} />
                  {userData?.location}
                </h1>
                {userSections.map((section, index) => (
                  <div
                    key={index}
                    className="flex flex-row gap-2 text-gray-600 hover:text-slate-100 cursor-pointer"
                  >
                    {section.icon}
                    <h1 className="text-gray-600 font-normal text-lg max-w-xl hover:text-slate-100 cursor-pointer">
                      {section.text}
                    </h1>
                  </div>
                ))}
              </h1>
            </div>
          </div>
        </div>
      )}

      <h1 className="font-poppins text-white text-5xl mt-12 mb-12 font-semibold">
        Repositories
      </h1>
      {repos.length > 0 ? (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-16">
            {displayRepos}
          </div>
          <div className="flex font-poppins m-4 items-center justify-center">
            <ReactPaginate
              nextLabel="Next"
              onPageChange={handlePageChange}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={pageCount}
              previousLabel="Previous"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
            />
          </div>
        </>
      ) : (
        <div className="text-slate-200/30 text-xl text-center mt-20 mb-20 font-poppins">
          No repositories have been created.
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
