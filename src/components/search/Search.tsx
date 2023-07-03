import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFilmSearch, setMobileSearch } from "../../store/searchSlice";
import SearchIcon from "@mui/icons-material/Search";
import s from "./SearchInput.module.css";
import { useAppDispatch, useAppSelector } from "../../hook";
import { ButtonSearch, Cancel, Image, ImageWrapper, Name, RatingNumer, SearchInput, SearchList, SearchWrapper } from "./Search.styles";
import { Year } from "../Card";
import useSetBodyScroll from "../../hooks/useSetBodyScroll";


const Search: React.FC = () => {
  const [text, setText] = useState("");
  const [searchList, setSearchList] = useState(false);
  const dispatch = useAppDispatch();
  const resultSearch = useAppSelector((state) => state.search.resultSearch);
  const mobileSearch = useAppSelector((state) => state.search.mobileSearch);
  const widthDevice = useAppSelector((state) => state.widthDevice.width);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setSearchList(false)
  }, []);

  useEffect(() => {
    if (text.length >= 2) {
      dispatch(getFilmSearch(text));
    }
  }, [text]);

  useSetBodyScroll()
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

  useEffect(() => {
    if (text.length >= 2 && resultSearch.length > 0) {
      setSearchList(true);
    } else {
      setSearchList(false);
    }
  }, [resultSearch]);

  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        inputRef.current.blur();
      }
    };

    document.addEventListener('touchstart', handleTouchStart);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  const onFocusSearch = () => {
    if (text.length >= 2 && resultSearch.length > 0) setSearchList(true);
  };

  const submitForm = () => {
    navigate(`/search/${text}`);
  };

  const closeSearch = () => {
    dispatch(setMobileSearch(false))
  };

  const onBlur = () => {
    if(widthDevice > 850){
      setSearchList(false)
    }
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/search/${text}`);
      inputRef.current?.blur();
    }
  };

  const onMouseDownNavigate = (id: number) => {
    navigate("../film/" + id, { replace: true })
    inputRef.current?.blur();
    closeSearch()
  };

  useEffect(() => {
    if (mobileSearch) {
      inputRef.current?.focus();
    }
  }, [mobileSearch]);

  return (
    <SearchWrapper active={mobileSearch}>
      <SearchInput
        placeholder="Поиск"
        type="search"
        onChange={(e) => setText(e.target.value)}
        onFocus={onFocusSearch}
        onBlur={onBlur}
        onKeyPress={onKeyPressHandler}
        ref={inputRef}
      ></SearchInput>

      {searchList && (
        <SearchList>
          {resultSearch.map((i) => (
            <div key={i.id}>
              <div
                onMouseDown={() =>
                  onMouseDownNavigate(i.id)
                }
              >
                <ImageWrapper>
                  <Image
                    src={i.poster?.previewUrl}
                    alt="poster"
                  />

                  <div>
                    <Name>{i.name}</Name>
                    <Year className={s.year}>
                      {i.year}, {i.movieLength}мин
                    </Year>
                    <RatingNumer className={s.rating_num}>{i.rating.kp}</RatingNumer>
                  </div>
                </ImageWrapper>
              </div>
            </div>
          ))}
        </SearchList>
      )}
      <div>
        {/* <NavLink to={'/search'} > */}
        <ButtonSearch onClick={submitForm}>
          <SearchIcon sx={{ fontSize: 28 }} />
        </ButtonSearch>
        <Cancel onClick={closeSearch}>
          Отмена
        </Cancel>
        {/* </NavLink> */}
      </div>
    </SearchWrapper>
  );
};

export default Search;
