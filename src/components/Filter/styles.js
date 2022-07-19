import styled from "styled-components";
import { ReactComponent as HomeIcon } from "../../assets/icons/home-icon.svg"
import { ReactComponent as AdvensedIcon } from "../../assets/icons/advensed-icon.svg"
import { ReactComponent as SearchIcon } from "../../assets/icons/loupe-icon.svg"

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
padding: var(--padding);
`;

export const Container = styled.div`
display: flex;
gap: 20px;
width: 100%;
max-width: 1440px;
height: 44px;
margin: 10px 0;
border-radius: 2px;
align-items: center;
`;

export const Icons = styled.div``;

Icons.HomeIcon = styled(HomeIcon)`
display: flex;
margin: auto;
`;

Icons.AdvensedIcon = styled(AdvensedIcon)`
display: flex;
align-items: center;
margin-right: 8px;
`;

Icons.SearchIcon = styled(SearchIcon)`
display: flex;
align-items: center;
margin-right: 8px;
`;

export const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
max-width: 920px;
padding: 30px;
border-radius: 5px;
`;

ContentWrapper.Fragment1 = styled.div`
display: flex;
width: 100%;
max-width: 860px;
margin-bottom: 20px;
gap:20px;
`;

ContentWrapper.Fragment2 = styled.div`
display: flex;
width: 100%;
max-width:640px;
margin-bottom: 20px;
gap:20px;
`;

ContentWrapper.Fragment3 = styled.div`
display: flex;
width: 100%;
max-width: 420px;
margin-bottom: 20px;
gap:20px;
`;

ContentWrapper.Title = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #0D263B;
margin-bottom: 10px;
`;