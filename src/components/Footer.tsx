const Footer = () => {
  return (
    <div className="fixed cursor-pointer bg-white bottom-0 z-auto w-full text-center items-center">
      <span
        onClick={() =>
          window.open("https://github.com/fernandobouchet", "_blank")
        }
      >
        © Fernando Bouchet - {new Date().getFullYear()}
      </span>
    </div>
  );
};

export default Footer;
