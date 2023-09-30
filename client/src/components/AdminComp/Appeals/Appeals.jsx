import { Button } from '@mui/material'
import React from 'react'
import ShowDetail from '../ShowDetail/ShowDetail'
import './Appeals.css'
import { useDispatch, useSelector } from "react-redux";
import { setShowTrue} from "../../../Store/detailSlice";
function Appeals() {
  const dispatch = useDispatch();
  const { show } = useSelector(state => state.detailSlice);
  console.log(show)

  const handleOpen = ()=>{
    dispatch(setShowTrue())
 }
  return (
    <div className='appeals__container'>
      <h1 className='appeals__header__word'>Appeals</h1>

      <Button onClick={()=>handleOpen()}>show</Button>
      {show ? <ShowDetail /> : <></>}
    </div >
  )
}

export default Appeals