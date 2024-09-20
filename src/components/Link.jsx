import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

const Link = ({ children, to, tab, setTab }) => {
  return (
    <RouterLink
      to={to}
      onClick={() => setTab(to)}
      className="relative ml-[25px] sm:ml-0"
    >
      {children}
      {tab === to && (
        <motion.div
          layoutId="underline"
          className="absolute -bottom-1 left-0 w-full h-[4px] rounded-lg bg-violet-300"
        />
      )}
    </RouterLink>
  );
};

export default Link;
