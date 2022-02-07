import { useState, useCallback, useEffect } from "react";

let logoutTimer;

export const useAuth = () => {
    const [token, setToken] = useState(false);
    const [userId, setUserId] = useState(false);
    const [timer, setTimer] = useState()

    const login = useCallback((id, token, expireTime) => {
        setToken(token);
        setUserId(id);
        const expires = expireTime || new Date(new Date().getTime() + 1000 * 60 * 60)
        setTimer(expires)
        localStorage.setItem('userData', JSON.stringify({
            userId: id,
            token: token,
            expires: expires.toISOString()
        }))
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
        setTimer(null)
        localStorage.removeItem('userData')
    }, []);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userData'))
        if (storedData && storedData.token && new Date(storedData.expires) > new Date()) {
            login(storedData.userId, storedData.token, new Date(storedData.expires))
        }
    }, [login])

    useEffect(() => {
        if (token && timer) {
            const rt = timer.getTime() - new Date()
            logoutTimer = setTimeout(logout, rt)
        } else {
            clearTimeout(logoutTimer)
        }
    }, [token, logout, timer]);

    return { login, logout, token, userId }

}