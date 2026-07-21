import { createContext, useState } from "react";
import { Outlet, useParams } from "react-router";

const ContactContext = createContext()

const server_contacts = [
    {
        id: 1,
        name: "Maria Fernandez",
        ult_mensaje: "Dale, me encantaria",
        messages: [
            {
                id: 1,
                sendByMe: false,
                content: "Hola!, ¿Como estas?"
            },
            {
                id: 2,
                sendByMe: true,
                content: "Hola, todo bien!"
            },
            {
                id: 3,
                sendByMe: false,
                content: "Me alegro, ¿Te gustaria salir el sabado?"
            },
            {
                id: 4,
                sendByMe: true,
                content: "Dale, me encantaria"
            }
        ]
    },
    {
        id: 2,
        name: "Pepito",
        ult_mensaje: "Dale, gracias ",
        messages: [
            {
                id: 1,
                sendByMe: false,
                content: "Che ¿sabes si para mañana habia tarea?"
            },
            {
                id: 2,
                sendByMe: true,
                content: "La verdad, no tengo la menor idea, fiajte en la plataforma "
            },
            {
                id: 3,
                sendByMe: false,
                content: "Dale, gracias "
            }
        ]
    },
    {
        id: 3,
        name: "Juancito",
        ult_mensaje: "Dale, esperame un minuto",
        messages: [
            {
                id: 1,
                sendByMe: false,
                content: "Holaaaa"
            },
            {
                id: 2,
                sendByMe: true,
                content: "Hola Juan ¿como estas?"
            },
            {
                id: 3,
                sendByMe: false,
                content: "Todo bien, che me pasas las fotos de la juntada pasada"
            },
            {
                id: 4,
                sendByMe: true,
                content: "Dale, esperame un minuto"
            }
        ]
    },
    {
        id: 4,
        name: "Julieta Perez",
        ult_mensaje: "Ok, yo te aviso",
        messages: [
            {
                id: 1,
                sendByMe: false,
                content: "Estas ocupada? Te puedo llamar"
            },
            {
                id: 2,
                sendByMe: true,
                content: "Mira ahora estoy ocupada Juli, en otro momento"
            },
            {
                id: 3,
                sendByMe: false,
                content: "Ah okey,  cuando puedas"
            },
            {
                id: 4,
                sendByMe: true,
                content: "Ok, yo te aviso"
            }
        ]
    },
]

function ContactContextProvider() {
    const [contacts, setContacts] = useState(server_contacts)

    const { contact_id } = useParams()

    let contact_selected = null

    if (contact_id) {
        contact_selected = contacts.find(contact => contact.id === Number(contact_id))
    }

    function deleteMessageById(message_id) {
        const contacts_modified = contacts.map(
            (contact) => {
                if (contact.id === Number(contact_id)) {
                    const message_index = contact.messages.findIndex(message => message.id === Number(message_id))
                    contact.messages.splice(message_index, 1)
                }

                return contact
            }
        )
        setContacts(
            contacts_modified
        )
    }

    function createMessage(value, sendByMe) {
        const contacts_modified = contacts.map(
            (contact) => {
                if (contact.id === Number(contact_id)) {

                    const new_message = {
                        content: value,
                        sendByMe: sendByMe,
                        id: contact.messages.length + 1
                    }
                    contact.messages.push(new_message)
                }

                return contact
            }
        )
        setContacts(
            contacts_modified
        )
    }

    function deleteAllMessages() {
        const contacts_modified = contacts.map(
            (contact) => {
                if (contact.id === Number(contact_id)) {
                    contact.messages = []
                }

                return contact
            }
        )
        setContacts(
            contacts_modified
        )
    }

    /* 
    createContact
    deleteContactById
    updateContactById
    updateMessageById
    */



    const provider_values = {
        contacts: contacts,
        contact_selected,
        deleteMessageById,
        createMessage,
        deleteAllMessages
    }
    return (
        <ContactContext.Provider value={provider_values}>
            {/* 
            el outlet hace referencia a las subrutas
            */}
            <Outlet />
        </ContactContext.Provider>
    )
}


export { ContactContext, ContactContextProvider }