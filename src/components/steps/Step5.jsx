import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Step5.css';

const Step5 = () => {
  const [activeTab, setActiveTab] = useState('addSingle');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleAddItems = () => {
    console.log('Add item logic here');
    navigate('/');
  };

  // Handle photo uploads
  const handlePhotoUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles(prevFiles => [...prevFiles, ...files]);
  };

  return (
    <div className="container container-order">
      <div className="store-header order">
        <h3 className="add-item-title">Add item</h3>
        <div className="store-menu add-item-menu">
          <div
            className={`store-menu_item ${activeTab === 'addSingle' ? 'activ' : ''}`}
            onClick={() => handleTabChange('addSingle')}
          >
            Add single Item
          </div>
          <div
            className={`store-menu_item ${activeTab === 'upload' ? 'activ' : ''}`}
            onClick={() => handleTabChange('upload')}
          >
            Upload items
          </div>
        </div>
      </div>

      <div className="order-contents item-menu-order">
        {activeTab === 'addSingle' ? (
          <div className="container add-item-cont">
            {/* Add Single Item Form */}
            <div className="input-group">
              <label htmlFor="Item_name">Item name</label>
              <input
                type="text"
                id="Item_name"
                placeholder="Toy Seller"
              />
            </div>
            <div className="input-group">
              <label htmlFor="category">Category</label>
              <div className="custom-select" id="category">
                <div className="select-selected">Cars</div>
                <div className="select-items select-hide">
                  <div>Cars1</div>
                  <div>Cars2</div>
                </div>
              </div>
              <i className="arrow-down"></i>
            </div>
            <div className="input-group">
              <label htmlFor="Quantity">Quantity</label>
              <input
                type="number"
                id="Quantity"
                placeholder="36"
              />
            </div>
            <div className="input-group">
              <label htmlFor="Price">Price</label>
              <input
                type="number"
                id="Price"
                placeholder="280"
              />
            </div>
            <div className="input-group">
              <label htmlFor="SKU">SKU</label>
              <input
                type="text"
                id="SKU"
                placeholder="SKU"
                disabled
              />
            </div>
            <div className="input-group">
              <label htmlFor="store-description">Description</label>
              <textarea
                id="store-description"
                placeholder="Description"
              />
            </div>
            <div className="input-group">
              <label htmlFor="item-photos">Item photos</label>
              <div className="photo-upload-group">
                {[0, 1, 2, 3].map((index) => (
                  <div key={index} className="photo-upload">
                    <input
                      type="file"
                      accept="image/*"
                      style={{ display: 'none' }}
                      id={`photo${index}`}
                    />
                    <label htmlFor={`photo${index}`} className="upload-button">
                      <div className="image-placeholder">+</div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="item-thumbnail">Item thumbnail</label>
              <input
                type="file"
                id="item-thumbnail"
                accept="image/*"
                style={{ display: 'none' }}
              />
              <label htmlFor="item-thumbnail" className="upload-button">
                <div className="image-placeholder">+</div>
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="YouTube">YouTube link</label>
              <input
                type="text"
                id="YouTube"
                placeholder="https://t.me/toyseller"
              />
            </div>
            <div className="input-group check_box-cpa">
              <div className="cpa">CPA</div>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
            <div className="footer add-item_btn" style={{ padding: '10px 0' }}>
              <div className="contents">
                <button
                  className="btn btn-catalog"
                  onClick={handleAddItems}
                >
                  Add items
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="upload-items-content">
             <div className="input-group">
              <label htmlFor="item-thumbnail">Item thumbnail</label>
              <input
                type="file"
                id="item-thumbnail"
                accept="image/*"
                style={{ display: 'none' }}
              />
              <label htmlFor="item-thumbnail" className="upload-button">
                <div className="image-placeholder">+</div>
              </label>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Step5;
