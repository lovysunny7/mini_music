const MusicCard = () => {
  return (
    <div className='col'>
      <div className='card'>
        <img
          src='https://w.namu.la/s/a5cb942717e4f4fe8c00b62622d9694398a2ce19b7ca7bba7f51dab7651a6ff060352acd01bdc704952fd8aeaf07a53b91728595c1ec8f002ae57a66180786fd731069c278995fa168663fa45df495231c343763be48aebd9748141f074c697b'
          className='card-img-top'
          alt='앨범 이미지 설명글'
        />
        <div className='card-body'>
          <h5 className='card-title'>Card title</h5>
          <p className='card-text'>This is a longer card with supporting text...</p>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
