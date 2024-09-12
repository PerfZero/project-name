import React from 'react';
import './Faq.css'; // Убедитесь, что путь к стилям корректен
import bucketImg from './online-shopping.png'; // Убедитесь, что путь к изображению корректен

const Faq = () => {
  return (
    <div className="read-faq">
      <div className="bucket-img">
        <img
          src={bucketImg}
          alt=""
          width="100"
          height="100"
          className="bucket"
        />
      </div>
      <div className="learn">
        <h3>Learn how to create and set up your first store</h3>
        <a href="">
          <p>Read FAQ &gt;</p>
        </a>
      </div>
    </div>
  );
};

export default Faq;
