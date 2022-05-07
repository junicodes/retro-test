import React from 'react';
import styles from './Style.module.scss';
import globalStyles from '../../styles/Global.module.scss';

const Search = () => {
  return (
    <div className="flex items-center justify-center drop-shadow-sm">
        <div className="flex border-2 rounded">
            <input type="text" className={`px-4 py-2 w-56 outline-none text-xs ${globalStyles.inputElement}`} placeholder="Search..." />
            <button className={`flex items-center justify-center px-3 ${styles.searchIcon}`}>
                <svg className="w-5 h-5 " fill="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
            </button>
        </div>
    </div>
  )
}

export default Search