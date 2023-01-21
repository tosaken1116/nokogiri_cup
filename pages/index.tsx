import { useAuthentication } from "./hooks";
export default function Test() {
    const { login, logout, idToken } = useAuthentication();
    return (
        <div>
            <button onClick={login}>login</button>
            <button onClick={logout}>logout</button>
        </div>
    );
}
