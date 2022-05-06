import React from 'react'
import styles from './Style.module.scss';

const NavTab = ({icon, title}) => {
  return (
    <li className={`rounded-sm ${styles.navTab}`}>
        <a href="#" className="flex flex-row items-center h-10 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
        <span className="inline-flex items-center justify-center h-10 w-12 text-lg text-gray-400">
            {icon}
        </span>
        <span className="text-sm font-medium">
            {title}
        </span>
        </a>
    </li>
  )
}

export default NavTab