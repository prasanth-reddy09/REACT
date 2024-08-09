import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import { MENU_URL2 } from "../utils/constants";

const useRestarantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId + MENU_URL2);
    const json = await data.json();
    setResInfo(json);
  };
  return resInfo;
};

export default useRestarantMenu;
