import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const getToken = () => {
    const token = sessionStorage.getItem('token');
    return token;
}

export const getValidToken = () => {
    const token = sessionStorage.getItem('token');

    if (token) {
        const decoded = jwtDecode(token);
        return decoded
    }
    return false;
}

export const AlreadyLoggedIn = ({ children }) => {
    return getValidToken()
        ? <Navigate to={'/directory'} />
        : <Navigate to={"/sign-in"} />
}

export const PublicRoute = ({ children }) => {
    return !getValidToken()
        ? children
        : <Navigate to={'/directory'} />;
}

export const ProtectedRoute = ({ children }) => {
    return getValidToken() ? children : <Navigate to={'/sign-in'} />
}