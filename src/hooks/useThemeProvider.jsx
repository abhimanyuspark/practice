import { toggleTheme } from "../Redux/Redux-Layout/ReduxLayout";
import { useDispatch, useSelector } from "react-redux";

export const useThemeProvider = () => {
  const { theme } = useSelector((state) => state.layout);
  const dispatch = useDispatch();

  const toogler = () => {
    dispatch(toggleTheme());
  };
  return [theme, toogler];
};
