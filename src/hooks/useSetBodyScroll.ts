import { useEffect } from "react";
import { useAppSelector } from "../hook";

export default function useSetBodyScroll() {
const mobileSearch = useAppSelector((state) => state.search.mobileSearch);

useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      if (mobileSearch) {
        html.style.overflow = "hidden";
        html.style.position = "fixed";
      } else {
        html.style.overflow = "auto";
        html.style.position = "static";
      }
    }
  }, [mobileSearch]);
}