import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFilmSearch, setMobileSearch } from "../../store/searchSlice";
import SearchIcon from "@mui/icons-material/Search";
import s from "./SearchInput.module.css";
import { useAppDispatch, useAppSelector } from "../../hook";
import { AllBlur, ButtonSearch, CrossIcon, Image, ImageWrapper, Line1, Line2, Name, RatingNumer, SearchInput, SearchList, SearchWrapper } from "./Search.styles";
import { Year } from "../Card";

const Search: React.FC = () => {
  const [text, setText] = useState("");
  const [searchList, setSearchList] = useState(false);
  const dispatch = useAppDispatch();
  const resultSearch = useAppSelector((state) => state.search.resultSearch);
  const mobileSearch = useAppSelector((state) => state.search.mobileSearch);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (text.length >= 2) {
      dispatch(getFilmSearch(text));
    }
  }, [text]);

  useEffect(() => {
    if (text.length >= 2 && resultSearch.length > 0) {
      setSearchList(true);
    } else {
      setSearchList(false);
    }
  }, [resultSearch]);

  const onFocusSearch = () => {
    if (text.length >= 2 && resultSearch.length > 0) setSearchList(true);
  };

  const submitForm = () => {
    navigate(`/search/${text}`);
  };

  const closeSearch = () => {
    dispatch(setMobileSearch(false))
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/search/${text}`);
      inputRef.current?.blur();
    }
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
        onBlur={() => setSearchList(false)}
        onKeyPress={onKeyPressHandler}
        ref={inputRef}
      ></SearchInput>

      {searchList && (
        <SearchList>
          {resultSearch.map((i) => (
            <div key={i.id}>
              <div
                onMouseDown={() =>
                  navigate("../film/" + i.id, { replace: true })
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
        <CrossIcon onClick={closeSearch}>
          <Line1 />
          <Line2 />
        </CrossIcon>
        {/* </NavLink> */}
      </div>
    </SearchWrapper>
  );
};

export default Search;
