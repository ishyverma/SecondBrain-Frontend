import { useRef } from "react"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const SignIn = ()  => {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate()

    async function signin() {
        const username = usernameRef.current?.value
        const password = passwordRef.current?.value

        const request = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
            username,
            password
        })
        const data = await request.data
        localStorage.setItem("token", data.token)
        alert("You are signed in")
        navigate("/dashboard")
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8">
            <Input reference={usernameRef} placeholder="Username"/>
            <Input reference={passwordRef} placeholder="Password"/>
            <div className="flex justify-center">
                <Button onClick={signin} text="Sign In" variant="primary" fullWidth={true} loading={false}/>
            </div>
        </div>
    </div>
}