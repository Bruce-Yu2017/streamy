import React from "react";
import { connect } from "react-redux";
import { fetchStreams, deleteStream } from "../../actions";
import { Link } from 'react-router-dom';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  delete(id) {
    this.props.deleteStream(id);
  }

  renderAdmin =(stream) => {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
          <button onClick={() => this.delete(stream.id)} className="ui button negative">Delete</button>
        </div>
      );
    }
  }

  renderLists = () => {
    return this.props.lists.map(list => {
      return (
        <div className="item" key={list.id}>
          {this.renderAdmin(list)}
          <i className="large aligned middle icon camera" />
          <div className="content">
            {list.title}
            <div className="description">{list.description}</div>
          </div>
        </div>
      );
    });
  };

  renderCreateBtn() {
      if(this.props.isSignedIn) {
        return (
            <div style={{textAlign: 'right'}}>
                <Link to='/streams/new' className='ui button primary'>Create</Link>
            </div>
        )
      }
  }
  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderLists()}</div>
        {this.renderCreateBtn()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    lists: Object.values(state.streamsReducer),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams, deleteStream }
)(StreamList);
