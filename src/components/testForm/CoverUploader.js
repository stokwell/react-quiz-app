import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty'
import { updateTest } from '../../actions/testActions';

class CoverUploader extends Component {
  constructor(props) {
    super(props)
    this.state = {
       imagePreviewUrl:  '',
       file: '',
       image: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ file: `http://localhost:3000/${nextProps.quiz.cover.url}` });

  }

  updateTest = (id, data) => {
    this.props.updateTest(id, data)
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
        this.updateTest(this.props.test.id, data)
    }
    reader.readAsDataURL(file)
  }

  render() {
    console.log(this.state)
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

          <Dropzone onDrop={this.onDrop} multiple={false} style={{}} ref={(node) => { dropzoneRef = node; }}></Dropzone>
  
        { this.props.quiz.cover
          ? <img src={`http://localhost:3000/${this.props.quiz.cover.url}`}/>
          : <p>loading...</p>
        }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    quiz: state.tests.currentTest
  }
}

export default connect(mapStateToProps, { updateTest })(CoverUploader);
