import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const WriteFixedBtn = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        style={{
          display: 'flex',
          position: 'fixed',
          bottom: '8%',
          right: '8%',
          borderRadius: '15px',
          backgroundColor: '#ca7df9',
          border: 'none',
          padding: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: PointerEvent,
        }}
        onClick={() => {
          navigate('/postwrite');
        }}
      >
        <span style={{ fontSize: '36px' }} className='material-icons'>
          add_circle
        </span>
      </Button>
    </div>
  );
};

export default WriteFixedBtn;
