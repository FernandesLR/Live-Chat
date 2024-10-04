

export function Chat(){
    return(
        //div pai
        <div className="rightside" style={
            {
                width: '100%', 
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
                
                
            }
            }>
            
            
            <div className="panel" style={// painel onde as mensagens serão renderizadas
                {
                    flex: 1, // Faz com que o painel ocupe o restante do espaço
                    overflowY: 'auto', // Apenas o painel tem rolagem
                    padding: '10px'
                }
                }>
            </div>

            <div className="chatInput">
                <input type="text" placeholder="Mensagem" style={{ height: 30, width:'100%', bottom: '0%', position: 'fixed' }}/>
            </div>
        </div>
    );
}