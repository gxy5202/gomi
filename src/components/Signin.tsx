import React from "react";
import { Card, NextUIProvider, Button, Input, CardBody } from "@nextui-org/react";

/**
 * Home page
 * @returns 
 */
export default function Signin() {
    const [email, setEmail] = React.useState("");

    const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

    const isInvalid = React.useMemo(() => {
        if (email === "") return false;
        return validateEmail(email) ? false : true;
    }, [email]);

    return (<NextUIProvider>
        <form action="/api/auth/signin" method="post">
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