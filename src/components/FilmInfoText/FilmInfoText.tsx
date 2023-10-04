import React from "react";
import {
  Description,
  Flex,
  MarginTopTitle,
  MarginTopValue,
  Name,
  NameTitle,
  TextValue,
  TitleDescription,
  ValueTextSpan,
} from "../FilmPage/FilmPage.styles";
import { FilmInfoTextProps } from "./FilmInfoText.types";
import roundNumber from "../../helpers/rounding";

const FilmInfoText: React.FC<FilmInfoTextProps> = (props) => {
  const { filmInfoId, countries, genres, ratingKinopoisk, resolution } = props;

  const ratingKp = roundNumber(ratingKinopoisk, 1)

  return (
    <div>
      <Name>
        {filmInfoId?.name && (
          <>
            {filmInfoId.name} {filmInfoId.year ? `(${filmInfoId.year}\u00A0г.)` : ""}
          </>
        )}
      </Name>

      <Flex>
        <NameTitle>Страна:&nbsp;</NameTitle>
        {countries.map((i, index, arr) => (
          <>
            <TextValue>
              {i.name}
              {index === arr.length - 1 ? (
                <></>
              ) : (
                <ValueTextSpan>,&nbsp;</ValueTextSpan>
              )}
            </TextValue>
          </>
        ))}
      </Flex>

      <Flex>
        <MarginTopTitle>Жанр:&nbsp;</MarginTopTitle>
        {genres.map((i, index, arr) => (
          <>
            <MarginTopValue>
              {i.name}
              {index === arr.length - 1 ? (
                <></>
              ) : (
                <ValueTextSpan>,&nbsp;</ValueTextSpan>
              )}
            </MarginTopValue>
          </>
        ))}
      </Flex>

      <Flex>
        <MarginTopTitle>Рейтинг Кинопоиска:&nbsp;</MarginTopTitle>
        <>
          <MarginTopValue>{ratingKp}</MarginTopValue>
        </>
      </Flex>

      {resolution.width < 1150 && resolution.width > 850 ? (
        <>
          <TitleDescription>Описание:</TitleDescription>
          <Description>{filmInfoId?.description}</Description>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default FilmInfoText;
