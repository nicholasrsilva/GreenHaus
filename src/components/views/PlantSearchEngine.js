import { Card, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import React, { useState } from 'react';

const PlantSearchEngine = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (info) => {
    if (info.file.status === 'done') {
      // Process the uploaded file
      console.log('File uploaded:', info.file.originFileObj);
      setFile(info.file.originFileObj);
      message.success('File uploaded successfully!');
    } else if (info.file.status === 'error') {
      message.error('File upload failed.');
    }
  };

  return (
    <div className="container">
      <Card>
        <Upload
          name="file"
          accept=".pdf"
          showUploadList={false}
          beforeUpload={() => false}
          onChange={handleFileUpload}
        >
          <div className="upload-container">
            {file ? (
              <>
                <div className="upload-label">Successful upload</div>
                <div>{file.name}</div>
              </>
            ) : (
              <div className="upload-text">
                <UploadOutlined />
                <div>Click or drag a PDF file to upload</div>
              </div>
            )}
          </div>
        </Upload>
      </Card>
    </div>
  );
};

export default PlantSearchEngine;
