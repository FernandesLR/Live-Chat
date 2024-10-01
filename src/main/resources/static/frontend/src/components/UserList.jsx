import { User } from './User'

export function LeftSide() {
    return(
    <div className="lefside" style={
        {
            height: '100%',
            width: '25%',
            paddingLeft: 50
        }
    }>
        <h1 style={{marginTop: 30,marginBottom: 30}}>Participantes:</h1>
            
            <div className="UserList">
                <User/>
                <User/>
                
                <User/>
                <User/>
            </div>
        
    </div>
    );

};


