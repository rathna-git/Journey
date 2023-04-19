import React, {useState} from "react";
import { Box, IconButton, Typography, Select, MenuItem, FormControl, useTheme, useMediaQuery } from '@mui/material';
import { Search, Message, DarkMode, LightMode, Notifications, Help, Menu, Close} from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FlexBetween from '../components/flexBetween.js'
//import { setMode, setLogout } from 'state';


const NavBar = () => {
    return (<div>NavBar</div>);
}

export default NavBar;