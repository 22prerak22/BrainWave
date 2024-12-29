import brackets from "../../assets/svg/Brackets";

const TagLine = ({ className = "", children }) => {
  return (
    <span className={`tagline flex items-center ${className} tag`}>
      {brackets("left")}
      <span className="mx-3 text-n-3">{children}</span>
      {brackets("right")}
    </span>
  );
};
export default TagLine;
