import { useContext } from "react"
import WhatsappSidebar from "../../Components/WhatsappSidebar/WhatsappSidebar"
import Barra_whatsapp from "../../Components/Barra_whatsapp/Barra_whatsapp"
import { ContactContext } from "../../Context/ContactContext"

function HomeScreen (){

    return (
        <div className="app-layout">
            <Barra_whatsapp/>
            <WhatsappSidebar/>
            <main className="welcome-screen">
                <div className="welcome-screen-content">
                    <svg viewBox="0 0 303 172" width="303" height="172" className="welcome-screen-lock">
                        <path d="M229.565 125.375C229.565 139.276 218.248 150.594 204.346 150.594H98.654C84.752 150.594 73.435 139.276 73.435 125.375V83.632C73.435 69.73 84.752 58.413 98.654 58.413H204.346C218.248 58.413 229.565 69.73 229.565 83.632V125.375Z" fill="none" stroke="#00a884" strokeWidth="4"/>
                        <path d="M151.5 58.4126V43.3406C151.5 30.505 141.022 20.0277 128.187 20.0277H96.25C80.75 20.0277 73.435 31.3459 73.435 43.3406V58.4126" fill="none" stroke="#00a884" strokeWidth="4" strokeLinecap="round"/>
                        <circle cx="151.5" cy="106" r="16" fill="none" stroke="#00a884" strokeWidth="4"/>
                        <path d="M151.5 120V126" stroke="#00a884" strokeWidth="4" strokeLinecap="round"/>
                    </svg>
                    <h1 className="welcome-screen-title">WhatsApp Web</h1>
                    <p className="welcome-screen-text">
                        Envía y recibe mensajes sin tener tu teléfono conectado.
                    </p>
                    <div className="welcome-screen-divider"></div>
                    <div className="welcome-screen-encryption">
                        <svg viewBox="0 0 16 16" width="16" height="16">
                            <path d="M8 1C5.79 1 4 2.79 4 5v2H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1V5c0-2.21-1.79-4-4-4zm3 6H5V5c0-1.66 1.34-3 3-3s3 1.34 3 3v2z" fill="currentColor"/>
                        </svg>
                        <span>Tus mensajes personales están protegidos con cifrado de extremo a extremo.</span>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default HomeScreen