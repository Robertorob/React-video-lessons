import React from 'react';
import { connect } from 'react-redux';
import { createPost, showAlert, hideAlert } from '../redux/actions';

class PostForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: '',
    };
  }

  submitHandler = event => {
    event.preventDefault();

    const {title, body} = this.state;

    if (!title.trim()) {
      this.props.showAlert('Please fill the title');
      return;
    }

    const newPost = {
      id: Date.now().toString(),
      title, 
      body,
    }

    this.props.createPost(newPost);

    this.setState(prev => ({...prev, title: '', body: ''}));
  }

  changeInputHandler = event => {
    event.persist();
    this.setState(prev => (
      {
        ...prev, 
        ...{ [event.target.id]: event.target.value }
      }
    ))
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input 
            type='text' 
            className='form-control' 
            id='title'
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
        </div>
        <div className='form-group mt-2'>
          <label htmlFor='body'>Body</label>
          <textarea 
            className='form-control' 
            id='body'
            value={this.state.body}
            onChange={this.changeInputHandler}
          />
        </div>
        <button className='btn btn-success mt-3' type='submit'>Create</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost,
  showAlert,
  hideAlert,
}

export default connect(null, mapDispatchToProps)(PostForm);