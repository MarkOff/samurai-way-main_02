import React, {ChangeEvent, LegacyRef, RefObject} from 'react';
import {UsersProfilePropsType} from '../ProfileContainer';

export class ProfileStatus extends React.Component <UsersProfilePropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditeMode = () => {
        this.setState({
            editMode: true
        });
    }
    deactivateEditeMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
            this.setState({
                status: e.currentTarget.value
            })
    }

    componentDidUpdate(prevProps: Readonly<UsersProfilePropsType>, prevState: Readonly<{}>) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditeMode}> {`status: ${this.props.status}` || 'No status'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange}  autoFocus={true} onBlur={this.deactivateEditeMode}
                               value={this.state.status} placeholder={'change you status'}/>
                    </div>
                }
            </div>
        );
    }
};

