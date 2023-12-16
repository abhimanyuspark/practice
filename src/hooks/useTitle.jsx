import { useEffect, useState } from "react";

export const useTitle = (title) => {
  const [state, setState] = useState(title);

  useEffect(() => {
    document.title = title || "Dashboard";
    setState(title);
  }, [title]);

  return [state];
};
