import React, {FC} from 'react';
import s from 'components/Profile/ProfileInfo/ProfileBlock/Contacts/Contacts.module.css';

type ContactKeys = 'facebook' | 'website' | 'vk' | 'twitter' | 'instagram' | 'youtube' | 'github' | 'mainLink'

type ContactsType = {
    contacts: {
        facebook: null | string,
        website: null | string,
        vk: null | string,
        twitter: null | string,
        instagram: null | string,
        youtube: null | string,
        github: null | string,
        mainLink: null | string
    },
}

export const Contacts: FC<ContactsType> = ({contacts}) => {

    const hasContacts = Object.values(contacts).some(contact => contact !== null && contact !== '')

    return (
        <>
            {hasContacts && <div className={s.contacts}>
                <b>Contacts:</b> {Object.keys(contacts)
                .filter((key) => {
                    const contactKey = key as unknown as ContactKeys
                    return contacts[contactKey] !== undefined && contacts[contactKey] !== null &&  contacts[contactKey] !== ''
                })
                .map(key => {
                    const contactKey = key as unknown as ContactKeys
                    return <Contact key={key} contactKey={key} contactValue={contacts[contactKey]!}/>
                })}

            </div>}
        </>
    )
}



type ContactType = {
    contactValue: string
    contactKey: string

}

const Contact: FC<ContactType> = ({contactValue, contactKey}) => {
    return (
        <a href={contactValue}>{contactKey}</a>
    )
}