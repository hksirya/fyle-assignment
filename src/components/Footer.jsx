const Footer = () => {
  const socialLinks = [
    {
      text: "Resume",
      url: "https://drive.google.com/file/d/1f0K09bsqJv3XLtGACMkVqcnZrYUQTblc/view",
    },
    {
      text: "Portfolio",
      url: "https://hksirya.netlify.app/",
    },
    {
      text: "Linkedin",
      url: "https://www.linkedin.com/in/hksirya/",
    },
    {
      text: "Github",
      url: "https://github.com/hksirya",
    },
  ];

  return (
    <footer className="p-10">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between font-poppins border-t border-zinc-200/20 mt-20">
        <span className="text-sm text-gray-500 sm:text-center">
          You can reach me out at
        </span>
        <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mt-0">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a
                target="_blank"
                href={link.url}
                className={`mr-4 hover:underline md:mr-6 ${
                  index === socialLinks.length - 1 ? "" : ""
                }`}
                rel="noreferrer"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
