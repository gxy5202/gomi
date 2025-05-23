import React from "react";
import { Button } from "@heroui/react";
import { ChevronUpOutline } from "@ricons/ionicons5";

export default function ToTop() {
    const toTop = () => {
        scrollTo(0,0);
    };

    return (
        <Button className="fixed bottom-4 right-4 md:hidden" isIconOnly aria-label="Like" onClick={toTop}>
            <ChevronUpOutline />
        </Button>
    );
}
