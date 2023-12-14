import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Resiger() {
  return (
    <div className='py-2'>
        <div className='flex flex-col w-full'>
          <TextField id="outlined-basic" label="Họ và tên" variant="outlined" style={{margin:"10px",backgroundColor:"white", borderRadius:"5px"}}/>
          <TextField id="outlined-basic" label="Số điện thoại hoặc Email" variant="outlined" style={{margin:"10px",backgroundColor:"white", borderRadius:"5px"}}/>
          {/* <TextField id="outlined-basic" type='password' label="Mật khấu" variant="outlined" style={{margin:"10px",backgroundColor:"white", borderRadius:"5px"}}/> */}
        </div>
        
        <div className='flex justify-center p-3'>
          <Button variant="contained">Đăng Ký</Button>
        </div>
  </div>
  )
}
