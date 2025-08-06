import { useSelector } from 'react-redux';
import { Navigate} from 'react-router-dom';
export default function ProtectedRoute({children}) {
    const token = useSelector((store)=>store.userReducer.token)
    if(token){
        return children;
    }
    else{
        return <Navigate to="/login"/>
    }
}