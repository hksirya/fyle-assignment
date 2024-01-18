const Navbar = () => {
  return (
    <div className="flex flex-row max-w-6xl justify-between items-center mx-auto p-10">
      <div className="flex flex-row gap-2 items-center">
        <img
          src="https://play-lh.googleusercontent.com/6b1OtR4-trPrG16IioeS2VMIeonOtDIMn1w2k5PTm3ORDxduYvF4MDLB_k2vZsSfTQk"
          className="h-10 w-10"
        />
        <h1 className="font-poppins text-2xl text-white font-semibold">Fyle</h1>
      </div>

      <button className="bg-gradient-to-r from-pink-400 via-pink-600 to-purple-800 p-2 px-8 rounded-lg  ">
        <a href="/" className="font-poppins font-normal md:font-lg text-white">
          Get Started
        </a>
      </button>
    </div>
  );
};

export default Navbar;
