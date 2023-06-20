import axios from "axios";
import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

const TokenContext = createContext(); // 创建上下文

const TokenProvider = ({ children }) => {// 创建TokenProvider组件

    const [token, setToken_] = useState(localStorage.getItem("token"));// 从localStorage中获取token

    const setToken = (newToken) => {// 设置token
        setToken_(newToken);
    };

    useEffect(() => {   // 设置axios的请求头
        if (token) {
            axios.defaults.headers.common["token"] = token;
            localStorage.setItem('token', token);
        } else {
            delete axios.defaults.headers.common["token"];
            localStorage.removeItem('token')
        }
    }, [token]);    // token改变时触发

    const contextValue = useMemo(// 创建上下文值
        () => ({
            token,
            setToken,
        }),
        [token]
    );  // 传递给子组件的值

    return (
        <TokenContext.Provider value={contextValue}>
            {children}
        </TokenContext.Provider>
    );

};

export const useToken = () => {
    return useContext(TokenContext);    // 返回上下文值
};

export default TokenProvider;
