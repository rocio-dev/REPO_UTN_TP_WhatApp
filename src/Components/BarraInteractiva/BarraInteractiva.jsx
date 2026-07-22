import './BarraInteractiva.css'

return(
    <header className="barra__interac">
        <div className="barra__interac-avatar">
                    <svg viewBox="0 0 212 212" width="24" height="24">
                        <path d="M106.251 0.5C164.653 0.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 0.5 164.654 0.5 106.25S47.846 0.5 106.251 0.5ZM106.251 18.5C57.746 18.5 18.5 57.746 18.5 106.25C18.5 130.867 28.493 153.165 44.533 169.403C48.263 152.839 71.28 140.148 106.251 140.148C141.222 140.148 164.238 152.839 167.969 169.403C184.009 153.165 194.001 130.867 194.001 106.25C194.001 57.746 154.756 18.5 106.251 18.5ZM106.251 36.5C133.336 36.5 155.501 58.665 155.501 85.75S133.336 135 106.251 135S57.001 112.835 57.001 85.75S79.166 36.5 106.251 36.5Z" fill="currentColor"/>
                    </svg>
                </div>
                <div className="barra__interac-actions">
                    {/* Comunidades icon */}
                    <button className="sbarra__interac-btn" title="Comunidades">
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2A1.01 1.01 0 0 0 3.8 21.454l3.032-.892A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 2a8 8 0 1 1 0 16 7.96 7.96 0 0 1-3.936-1.04l-.288-.16-2.86.84.84-2.86-.16-.288A7.96 7.96 0 0 1 4 12a8 8 0 0 1 8-8z" fill="currentColor"/>
                        </svg>
                    </button>
                    {/* Estado icon */}
                    <button className="barra__interac-btn" title="Estados">
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
                            <circle cx="12" cy="12" r="3.5" fill="currentColor"/>
                        </svg>
                    </button>
    </div>

    </header>
)
export default BarraInteractiva