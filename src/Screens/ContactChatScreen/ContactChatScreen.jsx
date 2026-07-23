import React, { useContext } from 'react'
import { Link, useParams } from 'react-router'
import Barra_whatsapp from '../../Components/Barra_whatsapp/Barra_whatsapp'
import WhatsappSidebar from '../../Components/WhatsappSidebar/WhatsappSidebar'
import Messages from '../../Components/Messages/Messages'
import { ThemeContext } from '../../Context/ThemeContext'
import { ContactContext } from '../../Context/ContactContext'

const ContactChatScreen = () => {
    const {contact_selected} = useContext(ContactContext)
    if (!contact_selected) {
        return (
            <div className="app-layout">
                <Barra_whatsapp/>
                <WhatsappSidebar />
                <main className="welcome-screen">
                    <h2>Contacto no encontrado</h2>
                    <Link to="/">Volver a inicio</Link>
                </main>
            </div>
        )
    }
    return (
        <div className="app-layout">
            <Barra_whatsapp/>
            <WhatsappSidebar />
            <main className="chat-area">
                <header className="chat-header">
                    <div className={`sidebar__contact-avatar sidebar__contact-avatar--color-${contact_selected.id % 6}`}>
                        {(() => {
                            const parts = contact_selected.name.split(' ')
                            return parts.length >= 2 ? parts[0][0] + parts[1][0] : parts[0][0]
                        })()}
                    </div>
                    <div className="chat-header-info">
                        <h2 className="chat-header-name">{contact_selected.name}</h2>
                    </div>
                </header>
                <div className="chat-messages">
                    <Messages/>
                </div>
            </main>
        </div>
    )
}

export default ContactChatScreen