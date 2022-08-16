import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../shared/Cookie';

const WriteFixedBtn = () => {
  const cookie = getCookie('accessToken');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (cookie !== undefined) {
      return setIsLoggedIn(true);
    }
  }, []);

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
          isLoggedIn
            ? navigate('/postwrite')
            : alert('로그인 사용자만 접근이 가능합니다!');
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
