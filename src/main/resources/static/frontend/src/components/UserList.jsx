import { User } from './User'

export function LeftSide() {
    return(
    <div className="lefside" style={
        {
            height: '100vh',
            width: '32%',
            paddingLeft: 50,
            border: ['2px', 'solid', 'black']
        }
    }>
        <h1 style={
            {
                marginTop: 30,
                marginBottom: 30,
                fontSize: '1.5rem',
            }
    }>Participantes:</h1>
            
            <div className="UserList" style={{width: '80%', cursor: 'pointer'}}>
                <User/>
                <User/>
                
                <User/>
                <User/>
            </div>
        
    </div>
    );

};


