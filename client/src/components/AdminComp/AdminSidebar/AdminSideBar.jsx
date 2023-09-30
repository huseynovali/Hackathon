import React from 'react'
import './AdminSidebar.css'
import { HiOutlineSquares2X2 } from 'react-icons/hi2';

function AdminSideBar() {
  return (
    <div className='Admin__Sidebar__Container'>
        <h1 className='Admin__Sidebar__IconText'>StudyMosaic</h1>


        <ul>
          <li className='Admin__Sidebar__list__item'>
            <HiOutlineSquares2X2/>
            <span className='Admin__Sidebar__list__item__text'>Appeals</span>
          </li>
        </ul>
    </div>
  )
}

export default AdminSideBar