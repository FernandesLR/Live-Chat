

export function Chat(){
    return(
        //div pai
        <div className="rightside" style={
            {
                width: '100%', 
                height: '100vh'
            }
            }>
            
            <div className="panel" style={
                {
                    height: '96vh'
                }
            }>
                <p>msg</p>
            </div>

            <div className="chatInput">
                <input type="text" placeholder="Mensagem" style={{ height: 30, width:'70%' }}/>
            </div>
        </div>
    );
}