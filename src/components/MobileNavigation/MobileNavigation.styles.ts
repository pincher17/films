import styled from 'styled-components'
import { NavigationItemProps } from './MobileNavigation.types';
import { ReactComponent as Homeicon } from '../../assets/icons/home.svg'
import { ReactComponent as Searchicon } from '../../assets/icons/search.svg'
import { ReactComponent as Allfilmsicon } from '../../assets/icons/AllFilmsIcon.svg'

export const NavigationItem = styled.div<NavigationItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => (props.active ? '#fff' : '#b3b3b3')};

  i {
    font-size: 24px;
  }

  span {
    font-size: 14px;
    font-weight: 600;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #181818;
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  background: rgb(21 21 21 / 83%);
`;

export const HomeIcon = styled(Homeicon)`
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
`

export const SearchIcon = styled(Searchicon)`
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
`
export const AllFilmsIcon = styled(Allfilmsicon)`
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
`