import React from "react";
import { CrossIconFilm, Iframe, Wrapper } from "./TrailerMobileWatch.styles";
import { MobileWatchFilmProps } from "./TrailerMobileWatch.types";
import { Line1, Line2 } from "../allFilmsPage/AllFilmsPage.styles";

const TrailerMobileWatch: React.FC<MobileWatchFilmProps> = ({id, setWatchTrailer, src}) => {

  const toggleWatchFilm = () => setWatchTrailer(false)


  return (
    <Wrapper>
    <CrossIconFilm sidebar={true} onClick={toggleWatchFilm}>
          <Line1 />
          <Line2 />
        </CrossIconFilm>
      <div key={id.toString()}>
              {src && <Iframe 
                src={src}
                frameBorder="0"
                scrolling="no"
                allowFullScreen
                referrerPolicy="origin"></Iframe>}
            </div>
    </Wrapper>
  )
};

export default TrailerMobileWatch;
