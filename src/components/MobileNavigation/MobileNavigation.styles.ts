import styled from 'styled-components'
import { NavigationItemProps } from './MobileNavigation.types';
import { ReactComponent as Homeicon } from '../../assets/icons/home.svg'
import { ReactComponent as HomeiconActive } from '../../assets/icons/homeActive.svg'
import { ReactComponent as Searchicon } from '../../assets/icons/search.svg'
import { ReactComponent as Allfilmsicon } from '../../assets/icons/AllFilmsIcon.svg'
import { Link } from 'react-router-dom';

export const NavigationItem = styled.div<NavigationItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => (props.active ? '#fff' : '#b3b3b3')};

  i {
    font-size: 24px;
  }

  span {
    font-size: 12px;
    font-weight: 600;
    color: ${(props) => (props.active ? '#fff' : '#b3b3b3')};
  }

  &:hover {
    cursor: pointer;
  }
`;

export const NavigationContainer = styled.div`
  display: none;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #181818;
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  background: rgb(21 21 21 / 83%);
  padding-bottom: 5px;
  z-index: 20;
  @media (max-width: 850px){
  display: flex;
  }
`;

export const HomeIcon = styled(Homeicon)<NavigationItemProps>`
  width: 25px;
  height: 25px;
  margin-bottom: 5px;
  stroke: ${(props) => (props.active ? '#fff' : '#b3b3b3')};
  fill: none;
`

export const SearchIcon = styled(Searchicon)`
  width: 25px;
  height: 25px;
  margin-bottom: 5px;
`
export const AllFilmsIcon = styled(Allfilmsicon)<NavigationItemProps>`
  width: 25px;
  height: 25px;
  margin-bottom: 5px;
  stroke: ${(props) => (props.active ? '#fff' : '#b3b3b3')};
  stroke-width: 0.5px;
`
export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-decoration: none;
`;

export const AllBlur = styled.div`
  position: fixed;
  z-index: 5;
  top: -100vh;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgb(0 0 0 / 80%);
`;