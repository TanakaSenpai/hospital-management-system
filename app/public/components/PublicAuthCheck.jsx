"use client"
import { useAuthState } from "react-firebase-hooks/auth"
import {auth} from "@/app/config/firebase"
import { useRouter } from "next/navigation"
const PublicAuthCheck = () => {
    const router = useRouter()
    const [user] = useAuthState(auth)
    if (user)
        router.push("/public")
}

export default PublicAuthCheck
