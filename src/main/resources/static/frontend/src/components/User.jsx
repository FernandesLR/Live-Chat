import { avatar } from '../assets/avatar.png'

export function User(){
    return(
        <div className="User">
            <img src={ avatar } alt="" />
            <span>Usuário (Você)</span>
        </div>
    );
}