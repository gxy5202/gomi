import React from "react";
import { Card, NextUIProvider, Button, Input, CardBody } from "@nextui-org/react";
import {
    getAuth,
    inMemoryPersistence,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../firebase/client";

/**
 * Log in
 * @returns 
 */
export default function Login(props) {
    const [email, setEmail] = React.useState("");

    const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isInvalid = React.useMemo(() => {
        if (email === "") return false;
        return validateEmail(email) ? false : true;
    }, [email]);

    const submit = async (e) => {
        e.preventDefault();

        const form = document.querySelector("form") as HTMLFormElement;
        const formData = new FormData(form);
    
        const response = await fetch("/api/auth/signin", {
            method: "POST",
            body: formData
        });

        if (response.redirected) {
            window.location.assign(response.url);
        }
    }

    return (<NextUIProvider>
        <form onSubmit={submit}>
            <div className="justify-center">
                <Card className="py-4 max-w-xl">
                    <CardBody>
                        <Input
                            value={email}
                            type="email"
                            name="email"
                            label="Email"
                            id="email"
                            variant="bordered"
                            isInvalid={isInvalid}
                            labelPlacement="inside"
                            placeholder="Enter your email"
                            color={isInvalid ? "danger" : "success"}
                            errorMessage={isInvalid && "Please enter a valid email"}
                            onValueChange={setEmail}
                            className="mb-4 w-full"
                        />
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            label="Password"
                            variant="bordered"
                            defaultValue=""
                            labelPlacement="inside"
                            placeholder="Enter your password"
                            isInvalid={false}
                            errorMessage={false}
                            className="mb-4 w-full"
                        />
                        <Button type="submit">Login</Button>
                    </CardBody>
                </Card>
            </div>
        </form>
    </NextUIProvider>)
}