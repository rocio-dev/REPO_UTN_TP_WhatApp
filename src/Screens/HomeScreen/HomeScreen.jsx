import { useContext } from "react"
import WhatsappSidebar from "../../Components/WhatsappSidebar/WhatsappSidebar"
import { ContactContext } from "../../Context/ContactContext"
import BarraInteractiva from "../../Components/BarraInteractiva/BarraInteractiva"

function HomeScreen (){

    return (
        <div>
            <WhatsappSidebar/>
            <BarraInteractiva/>
        </div>
    )
}

export default HomeScreen