import React from 'react'
import { Button } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

const WriteFixedBtn = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Button
        style={{
          display: 'scroll',
          position: 'fixed',
          bottom: '15px',
          right: '15px',
          borderRadius: '10px',
          backgroundColor:'#ca7df9',
          border: 'none'
        }}
        onClick={()=>{navigate('/postWrite')}}
      >
       <span className='material-icons'>add_circle</span>
      </Button>
    </div>
  );
}

export default WriteFixedBtn