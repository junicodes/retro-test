import React from 'react'
import { FaHome, FaUserFriends, FaFlag } from 'react-icons/fa';
import { ImMakeGroup } from 'react-icons/im';
import { BsCart, BsWalletFill } from 'react-icons/bs';
import { BiWallet } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';
import { GoGraph } from "react-icons/go";
import NavTab from './NavTab';

const Nav = () => {
  return (
    <ul className='h-full w-full flex flex-col py-4'>
        <NavTab icon={<FaHome />} title="Dashboard" />
        <NavTab icon={<ImMakeGroup />} title="Products" />
        <NavTab icon={<BsCart />} title="Blog" />
        <NavTab icon={<BiWallet />} title="Transaction" />
        <NavTab icon={<FaUserFriends />} title="Users" />
        <NavTab icon={<GoGraph />} title="Analysis" />
        <NavTab icon={<FaFlag />} title="Reports" />
        <NavTab icon={<BsWalletFill />} title="Investment" />
        <NavTab icon={<FiSettings />} title="Settings" />
    </ul>
  )
}

export default Nav;