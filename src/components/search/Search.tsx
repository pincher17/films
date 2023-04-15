import React, { KeyboardEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFilmSearch } from "../../store/searchSlice";
import SearchIcon from "@mui/icons-material/Search";
import s from "./SearchInput.module.css";
import { useAppDispatch, useAppSelector } from "../../hook";

const Search: React.FC = () => {
  const [text, setText] = useState("");
  const [searchList, setSearchList] = useState(false);
  const dispatch = useAppDispatch();
  const resultSearch = useAppSelector((state) => state.search.resultSearch);
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

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/search/${text}`);
      inputRef.current?.blur();
    }
  };

  return (
    <div className={s.search}>
      <input
        className={s.search_input}
        placeholder="Поиск"
        type="search"
        onChange={(e) => setText(e.target.value)}
        onFocus={onFocusSearch}
        onBlur={() => setSearchList(false)}
        onKeyPress={onKeyPressHandler}
        ref={inputRef}
      ></input>

      {searchList && (
        <div className={s.search_list}>
          {resultSearch.map((i) => (
            <div key={i.id} className={s.card}>
              <div
                onMouseDown={() =>
                  navigate("../film/" + i.id, { replace: true })
                }
              >
                <div className={s.img_wrapper}>
                  <img
                    className={s.img}
                    src={i.poster?.previewUrl}
                    alt="poster"
                  />

                  <div className={s.rating}>
                    <div className={s.name}>{i.name}</div>
                    <div className={s.year}>
                      {i.year}, {i.movieLength}мин
                    </div>
                    <div className={s.rating_num}>{i.rating.kp}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className={s.wrapper_btn_search}>
        {/* <NavLink to={'/search'} > */}
        <div onClick={submitForm} className={s.btn_search}>
          <SearchIcon sx={{ fontSize: 28 }} />
        </div>
        {/* </NavLink> */}
      </div>
    </div>
  );
};

export default Search;
