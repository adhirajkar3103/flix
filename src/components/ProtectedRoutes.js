import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
const ProtectedRoutes = ({children}) => {
    const {user} = UserAuth();
    const navigate = useNavigate();

    if(user){
        return children
    }else{
        navigate('/')
    }
}

export default ProtectedRoutes