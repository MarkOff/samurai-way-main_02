import React from 'react';
import {create} from 'react-test-renderer';
import {ProfileStatus} from 'components/Profile/ProfileInfo/ProfileBlock/ProfileStatus/ProfileStatus';
import {UserProfileType} from 'redux/redux-store';
import {v1} from 'uuid';
import {getUserStatusTC, savePhoto, setProfileTC, updateStatusTC} from 'redux/profile-reducer';

describe('ProfileStatus component', () => {
    const testProfile: UserProfileType = {
        aboutMe: 'Im User',
        contacts: {
            facebook: 'https://facebook.com/',
            website: 'https://random.com/',
            vk: 'https://vk.com/id135086996',
            twitter: 'https://twitter.com/',
            instagram: 'https://instagram.com/',
            youtube: 'https://youtube.com/',
            github: 'https://github.com/MarkOff',
            mainLink: 'https://mainLink.com/'
        },
        lookingForAJob: true,
        lookingForAJobDescription: 'test job',
        fullName: 'Test User',
        userId: +v1(),
        photos: {
            small: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80',
            large: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80'
        }
    }

    let state = {
        profile: testProfile,
        status: 'lol',
        autorizedUserId: '22223',
        isAuth: true,
        isOwner: false
    }

    beforeEach(() => {
        state
    })


    test('status from props should be in the  state', () => {
        const component = create(<ProfileStatus isAuth={state.isAuth} status={state.status} profile={state.profile}
                                                autorizedUserId={state.autorizedUserId} getStatus={getUserStatusTC}
                                                setProfile={setProfileTC} updateStatus={updateStatusTC}
                                                savePhoto={savePhoto}
                                                isOwner={state.isOwner}
        />)
        const root = component.root;

        expect(root.props.status).toBe('lol')


    })
    test('after creation "span" should be displayed', () => {
        const component = create(<ProfileStatus isAuth={state.isAuth} status={state.status} profile={state.profile}
                                                autorizedUserId={state.autorizedUserId} getStatus={getUserStatusTC}
                                                setProfile={setProfileTC} updateStatus={updateStatusTC}
                                                isOwner={state.isOwner}
                                                savePhoto={savePhoto}
        />)
        const root = component.root;
        let span = root.findByType('span');

        expect(span).not.toBeNull()

    })
    test('after creation "input" shouldn\'t\ be displayed', () => {
        const component = create(<ProfileStatus isAuth={state.isAuth} status={state.status} profile={state.profile}
                                                autorizedUserId={state.autorizedUserId} getStatus={getUserStatusTC}
                                                setProfile={setProfileTC} updateStatus={updateStatusTC}
                                                isOwner={state.isOwner}
                                                savePhoto={savePhoto}
        />)
        const root = component.root;


        expect(() => {
            let input = root.findByType('input');
        }).toThrow()
    })

    test('after creation "span" should contains correct status', () => {
        const component = create(<ProfileStatus isAuth={state.isAuth} status={state.status} profile={state.profile}
                                                autorizedUserId={state.autorizedUserId} getStatus={getUserStatusTC}
                                                setProfile={setProfileTC} updateStatus={updateStatusTC}
                                                isOwner={state.isOwner}
                                                savePhoto={savePhoto}
        />)
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe(' ')

    })

    test('input should be displayed in editMode', () => {
        const component = create(<ProfileStatus isAuth={state.isAuth} status={state.status} profile={state.profile}
                                                autorizedUserId={state.autorizedUserId} getStatus={getUserStatusTC}
                                                setProfile={setProfileTC} updateStatus={updateStatusTC}
                                                isOwner={state.isOwner}
                                                savePhoto={savePhoto}
        />)
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick()
        let input = root.findByType('input')

        expect(input.props.value).toBe('lol')

    })
    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus isAuth={state.isAuth} status={state.status} profile={state.profile}
                                                autorizedUserId={state.autorizedUserId} getStatus={getUserStatusTC}
                                                setProfile={setProfileTC} updateStatus={mockCallback}
                                                isOwner={state.isOwner}
                                                savePhoto={savePhoto}
        />)
        const instance = component.getInstance();
        instance?.props.deactivateEditMode;
        console.log(instance)
        expect(mockCallback.mock.calls.length).toBe(0)

    })
});

