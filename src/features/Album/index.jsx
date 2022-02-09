import React from 'react';
import AlbumList from './components/AlbumList';

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: 'Lofi một chút thôi',
      thumbnail: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/d/3/c/c/d3cc82d81f4493d998fc7bf8451c9f14.jpg',
    },
    {
      id: 2,
      name: 'Từ trái tim',
      thumbnail:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/covers/c/5/c5be28c4af64dd580d8ec702af6b4eb3_1468035239.jpg',
    },
    {
      id: 3,
      name: 'Cơn mưa tuổi thanh xuân',
      thumbnail:
        'https://photo-resize-zmp3.zadn.vn/w320_r1x1_png/covers/2/9/29b2e301d4a9435b97353c9812c34d5a_1487924377.png',
    },
    {
      id: 4,
      name: 'Playlist này chill phết',
      thumbnail: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/d/a/c/6/dac69cd1300a635c193c0f03e8d6d617.jpg',
    },
  ];
  return (
    <>
      <h2>Có thể bạn thích</h2>
      <AlbumList albumList={albumList} />
    </>
  );
}

export default AlbumFeature;
