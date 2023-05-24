import React from 'react';
import {create} from 'react-test-renderer';
import {ProfileStatus} from 'components/Profile/ProfileInfo/ProfileBlock/ProfileStatus/ProfileStatus';
import {updateStatus} from 'redux/profile-reducer';

describe('ProfileStatus component', () => {
    type StateType = {
        status: string
    }

    let state: StateType = {
        status: 'lol',
    }

    test('status from props should be in the  state', () => {
        const component  = create(<ProfileStatus status={state.status} updateStatus={updateStatus}/>)
        const root = component.root;

        expect(root.props.status).toBe('lol')


    })
    test('after creation "span" should be displayed', () => {
        const component = create(<ProfileStatus status={state.status} updateStatus={updateStatus}/>)
        const root = component.root;
        let span = root.findByType('span');

        expect(span).not.toBeNull()

    })
    test('after creation "input" shouldn\'t\ be displayed', () => {
        const component = create(<ProfileStatus status={state.status} updateStatus={updateStatus}/>)
        const root = component.root;


        expect(() => {root.findByType('input')}).toThrow()
    })

    test('after creation "span" should contains correct status', () => {
        const component = create(<ProfileStatus  status={state.status} updateStatus={updateStatus}/>)
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe(' ')

    })

    test('input should be displayed in editMode', () => {
        const component = create(<ProfileStatus status={state.status} updateStatus={updateStatus}/>)
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick()
        let input = root.findByType('input')

        expect(input.props.value).toBe('lol')

    })
    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={state.status} updateStatus={mockCallback}/>)
        const instance = component.getInstance();
        instance?.props.deactivateEditMode;
        expect(mockCallback.mock.calls.length).toBe(0)

    })
});

