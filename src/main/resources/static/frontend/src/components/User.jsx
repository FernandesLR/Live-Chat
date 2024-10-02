import avatar from '../assets/avatar.png'

export function User(){
    return(
        <div className="User" style={
            {
                display: 'flex', 
                textAlign: 'center', 
                marginBottom: '1rem',
                border: ['2px', 'solid', 'gray'],
                padding: '0.3rem'
            }
        }>
            <img src={avatar} alt="" style={{width: '2rem', height: '2.4rem'}}/>
            <span style={{padding: 6}}>Usuário (Você)</span>
        </div>
    );
}