"use client";

import { useRouter } from "next/navigation";

export default function CloseButton() {
    const router = useRouter();

    const handleClose = () => {
        if (document.referrer && document.referrer.includes(window.location.hostname)) {
            router.back();
        } else {
            router.push("/work"); // Replace with your desired fallback URL
        }
    };

    return (
        <button onClick={handleClose} className="closebutton px-2.5 text-2xl ">
            Close
        </button>
    );
}
