import { useEffect, useState } from "react";

const Post = ({width}) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [expanded]);
  return (
    <div
      className={
        expanded
          ? " bg-white/50 border border-white/10 rounded-3xl overflow-hidden w-full  h-screen mb-4 "
          : ` bg-white/50 border border-white/10 rounded-3xl overflow-hidden ${width} aspect-square min-h-[250px] mb-4`
      }
      onClick={() => setExpanded(!expanded)}
    >
      <div className="bg-white p-9">
        <p>Post...</p>
      </div>
    </div>
  );
};

export default Post;
