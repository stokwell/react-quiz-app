import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class CoverUploader extends Component {
  constructor() {
    super()
    this.state = {
       imagePreviewUrl: '',
       file: ''
    }
  }

  onDrop = (files) => {
    const file = files[0]
    let reader = new FileReader();

    reader.onloadend = () => {
        this.setState({
          file: reader.result,
          imagePreviewUrl: reader.result
        });
        const data = { test: { cover: reader.result } }
        console.log(this.state)
        this.props.updateTest(this.props.test.id, data)

    }
  

    reader.readAsDataURL(file)

  }



  render() {
    console.log(this.props)
    const overlayStyle = {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      padding: '2.5em 0',
      background: 'rgba(0,0,0,0.5)',
      textAlign: 'center',
      color: '#fff'
    };
    let dropzoneRef;
    return (
      <div className="box">
        <div className="title-with-button">
          <h3 className="undertitle">Test Cover</h3>
          <button type="button" onClick={() => { dropzoneRef.open() }} className="btn btn-warning">
            Upload file
          </button>
        </div>
        <div className="dropzone">
          <Dropzone onDrop={this.onDrop} multiple={false} style={{}} ref={(node) => { dropzoneRef = node; }} >
            <img src={this.state.imagePreviewUrl} />
            <img src={this.props.test.cover}/>
          </Dropzone>
        </div>
      </div>
    );
  }

}

export default CoverUploader;
