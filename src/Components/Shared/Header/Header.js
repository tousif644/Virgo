import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/img/favicon.svg"
import facebook from "../../../assets/img/social_media/facebook-logo.png"
import twitter from "../../../assets/img/social_media/twitter.png"
import youtube from "../../../assets/img/social_media/youtube.png"


const Header = () => {
    return (
        <div class="navbar bg-gradient-to-r from-transparent to-transparent px-12">
            <div class="navbar-start">
                <img src={logo} alt="" width={35} />
                <Link to=" " class="font-bold text-white text-xl">LOGO</Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li tabindex="0">
                        <Link to="">
                            Solutions
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul class="p-2">
                            <li><Link to="">Submenu 1</Link></li>
                            <li><Link to="">Submenu 2</Link></li>
                            <li><Link to="">Submenu 2</Link></li>
                        </ul>
                    </li>
                    <li><Link to="">Pricing</Link></li>

                    <li><Link to="">Blog</Link></li>
                    <li><Link to="">Article</Link></li>
                    <li><Link to="">Contact</Link></li>
                </ul>
            </div>
            <div class="navbar-end gap-5">
                <Link to=""> <img src={twitter} alt="" /></Link>
                <Link to=""><img src={facebook} alt="" /></Link>
                <Link to=""><img src={youtube} alt="" /></Link>
            </div>
        </div>
    );
};

export default Header;

{/* <div class="dropdown">
<label tabindex="0" class="btn btn-ghost lg:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
</label>
<ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
    <li><Link to="">Item 1</Link></li>
    <li tabindex="0">
        <Link to=" " class="justify-between">
            Parent
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
        </Link>
        <ul class="p-2">
            <li><Link to="">Submenu 1</Link></li>
            <li><Link to="">Submenu 2</Link></li>
        </ul>
    </li>
    <li><Link to="">Item 3</Link></li>
</ul>
</div> */}