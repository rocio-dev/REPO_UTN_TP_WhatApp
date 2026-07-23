import React, { useContext } from 'react'
import { Link } from 'react-router'
import { ContactContext } from '../../Context/ContactContext'
import './WhatsappSidebar.css'

const WhatsappSidebar = () => {
    const { contacts } = useContext(ContactContext)

    // Get initials from contact name
    const getInitials = (name) => {
        const parts = name.split(' ')
        if (parts.length >= 2) {
            return parts[0][0] + parts[1][0]
        }
        return parts[0][0]
    }



    return (
        <aside className="sidebar">
            {/* Header */}
            <header className="sidebar__header">
                <div className="sidebar__header-actions">
                    <button className="sidebar__header-btn" title="Nuevo chat">
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path d="M19.005 3.175H4.674C3.642 3.175 2.8 4.017 2.8 5.049V20.58c0 .444.197.859.54 1.142a1.474 1.474 0 0 0 1.227.273l3.076-.769a.4.4 0 0 1 .283.042l3.603 2.002a1.474 1.474 0 0 0 1.424.01l3.546-1.97a.4.4 0 0 1 .283-.038l3.088.772c.421.105.864.016 1.22-.245a1.474 1.474 0 0 0 .588-1.177V5.049c0-1.032-.842-1.874-1.874-1.874zM13.5 14.15h-3a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 0 1.5zm2.5-3.5h-8a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 0 1.5z" fill="currentColor"/>
                        </svg>
                    </button>
                    <button className="sidebar__header-btn" title="Menú">
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z" fill="currentColor"/>
                        </svg>
                    </button>
                </div>
            </header>

            {/* Search Bar */}
            <div className="sidebar__search">
                <div className="sidebar__search-container">
                    <span className="sidebar__search-icon">
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2z" fill="currentColor"/>
                        </svg>
                    </span>
                    <input 
                        type="text" 
                        className="sidebar__search-input" 
                        placeholder="Buscar o empezar un chat nuevo" 
                    />
                </div>
                <button className="sidebar__filter-btn" title="Filtro de chats no leidos">
                    <svg viewBox="0 0 24 24" width="20" height="20">
                        <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" fill="currentColor"/>
                    </svg>
                </button>
            </div>

            {/* Contact List */}
            <div className="sidebar__contacts">
                {
                    contacts.map(
                        (contact) => {
                            const colorIndex = contact.id % 6
                            return (
                                <Link 
                                    to={`/contact/${contact.id}`} 
                                    key={contact.id}
                                    className="sidebar__contact-link"
                                >
                                    <div className="sidebar__contact">
                                        {/* Avatar */}
                                        <div className={`sidebar__contact-avatar sidebar__contact-avatar--color-${colorIndex}`}>
                                            {getInitials(contact.name)}
                                        </div>
                                        {/* Contact Info */}
                                        <div className="sidebar__contact-info">
                                            <div className="sidebar__contact-top-row">
                                                <h3 className="sidebar__contact-name">{contact.name}</h3>
                                            </div>
                                            <div className="sidebar__contact-bottom-row">
                                                <p className="sidebar__contact-message">
                                                    <span className="sidebar__contact-message-icon">
                                                        <svg viewBox="0 0 18 18" width="18" height="18">
                                                            <path d="M17.394 5.035l-4.444-4.445c-.197-.196-.513-.196-.71 0l-.36.36a.5.5 0 0 0 0 .708l3.737 3.736-3.737 3.737a.5.5 0 0 0 0 .707l.36.36c.197.197.513.197.71 0l4.444-4.444a.51.51 0 0 0 0-.72zM5.32 13.164l-3.737-3.737 3.737-3.737a.5.5 0 0 0 0-.707l-.36-.36a.504.504 0 0 0-.71 0L.806 9.068a.51.51 0 0 0 0 .719l4.444 4.445c.197.196.513.196.71 0l.36-.36a.5.5 0 0 0 0-.708z" fill="currentColor"/>
                                                        </svg>
                                                    </span>
                                                    {contact.ult_mensaje}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    )
                }
            </div>
        </aside>
    )
}

export default WhatsappSidebar