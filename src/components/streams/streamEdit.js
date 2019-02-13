import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from "./streamForm";


class streamEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.streamId)
    }

    onSubmit = (formValue) => {
        this.props.editStream(this.props.streamId, formValue)
    }

    render() {
        console.log(this.props)
        if(!this.props.stream) {
            return (
                <div>Loading....</div>
            )
        }
        return (
            <div>
                <h1>Edit a stream</h1>
                <StreamForm 
                    onSubmit={this.onSubmit}
                    initialValues={ {title: this.props.stream.title, description: this.props.stream.description} }
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streamsReducer[ownProps.match.params.id],
        streamId: ownProps.match.params.id
    }
}

export default connect(mapStateToProps, { fetchStream, editStream })(streamEdit);