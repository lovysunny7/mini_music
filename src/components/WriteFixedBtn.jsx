import React from 'react'
import { Button } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

const WriteFixedBtn = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Button
        style={{
          display: '',
          position: 'fixed',
          bottom: '75px',
          right: '75px',
          borderRadius: '15px',
          backgroundColor:'#ca7df9',
          border: 'none',
          padding: '15px 20px',
          cursor:PointerEvent,
        }}
        onClick={()=>{navigate('/postWrite')}}
      >
       <span style={{fontSize:'36px'}}className='material-icons'>add_circle</span>
      </Button>
    </div>
  );
}

export default WriteFixedBtn