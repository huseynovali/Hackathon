import { Box, Button, FormControl, TextField } from '@mui/material'
import React from 'react'
import './showDetail.css'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { setShowFalse} from "../../../Store/detailSlice";

const ShowDetail = () => {
  const dispatch = useDispatch();
  const { show  } = useSelector(state => state.detailSlice);

  const handleClose = ()=>{
     dispatch(setShowFalse())
  }
  return (
    <Box className='showDetail'>
      <Box className='showDetail_box'>
        <CloseIcon onClick={()=>handleClose()} />
        <Box component="form" className="form" flexDirection='column' display='flex' gap='26px' width='100%'>
          <h1>Petitioner</h1>
          <FormControl>
            <TextField
              id="username" name="username"
              label="Full Name" variant="outlined" type='text'
              disabled
              value={'ss'}
            />

          </FormControl>
          <FormControl>
            <TextField
              id="type" name="type"
              label="Edu type" variant="outlined" type='text'
              disabled
              value={'ss'}
            />

          </FormControl>

          <Button
            variant="contained"
            className="btn-submit"
          >
            Accept
         </Button>
          <Button
            variant="contained"
            className="btn-reject"
          >
            Reject
         </Button>
        </Box>
      </Box>

    </Box>
  )
}

export default ShowDetail
