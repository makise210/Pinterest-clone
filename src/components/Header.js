import React, {useState} from 'react'
import PinterestIcon from '@mui/icons-material/Pinterest';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TextsmsIcon from '@mui/icons-material/Textsms';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Icon, IconButton } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import styled from 'styled-components';

function Header(props) {
    const [input, setInput] = useState("");
    const onSearchSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        props.onSubmit(input);

    }
    return (
        <Wrapper>
            <LogoWrapper>
                <PinterestIcon /> {/* Use PinterestIcon*/}
            </LogoWrapper>
            <HomePageButton>
                <a href='/'>HomePage</a>
            </HomePageButton>
            <FollowingButton>
                <a href='/'>Following</a>
            </FollowingButton>
            <SearchWrapper>
                <SearchBarWrapper>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <form>
                        <input type="text" onChange={(e) => setInput(e.target.value)}/>
                        <button type="submit" onClick={onSearchSubmit}></button>
                    </form>
                </SearchBarWrapper>
            </SearchWrapper>
            <IconsWrapper>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <TextsmsIcon />
                </IconButton>
                <IconButton>
                    <FaceRetouchingNaturalIcon />
                </IconButton>
                <IconButton>
                    <KeyboardArrowDownIcon />
                </IconButton>
            </IconsWrapper>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 56px;
    padding: 12px 4px 4px 16px;
    background-color: white;
    color: black;

`
const LogoWrapper = styled.div`
    .MuiSvgIcon-root{
        color:#fc0339;
        font-size: 32px;
        cursor: pointer;
        /*Style for PinterestIcon*/
    }
`
const HomePageButton = styled.div`
    display: flex;
    height: 48px;
    min-width: 123px;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    cursor: pointer;
    background-color: black;
    a {
        text-decoration: none;
        color: white;
        font-weight: 700;
    }
`

const FollowingButton = styled.div`
    display: flex;
    height: 48px;
    min-width: 123px;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer;
    background-color: white;
    a {
        text-decoration: none;
        color: black;
        font-weight: 700;
    }
    &:hover {
        background-color: #d9d9d9;
    }
`

const SearchWrapper = styled.div`
    flex: 1;
`

const SearchBarWrapper = styled.div`
    background-color: #efefef;
    display: flex;
    height: 48px;
    width: 100%;
    border-radius: 50px;
    border: none;
    padding-left: 10px;

    form {
        display: flex;
        flex: 1;
    }

    form > input {
        background-color: transparent;
        border: none;
        width: 100%;
        margine-left: 5px;
        font-size: 16px;
    }

    form > button {
        display: none;
    }
    
    input:focus {
        outline: none;
    }/*remove outline*/

    
`

const IconsWrapper = styled.div`

`
