"use client";
import { useEffect, useMemo, useState } from "react";
export default function Contact() {
    const [email, setEmail] = useState("");
    const error = useMemo(() => {
        return !email.includes("@")
    }, [email]);

    //  const [error, setError] = useState(false);



    /* useEffect(()=>{
         if(email.includes("@")){
             setError(false);
         }else{
             setError(true)
         }
     },[email]);*/

    function getEmail() {
        if(!email.includes("@gmail.com")){
                console.log("Email inválido") 
                return
        }else{
              console.log("Email válido")
        }
    window.open(`https://wa.me/5541987779137?text=Envie seu email a este contato! assunto: ${email}`)

    }

    return (
        <main className="W-screen h-screen flex flex-col gap-16 items-center justify-center">
            <h1 className="text-6xl">Contato</h1>

            <div>
                <p>Digite seu email para eu entrar em contato</p>
                <input
                    type="email"
                    placeholder="Digite seu email"
                    className="border border-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {error && <p>Email inválido</p>}
            </div>



            <button
                className="cursor-pointer border border-white py-2 px-10 rounded-full"
                onClick={() => getEmail()}
                disabled={error}
            >Enviar</button>
        </main>
    )
}  
