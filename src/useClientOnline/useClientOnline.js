import { useState } from "react"

function useClientOnline() {
    const [online, setOnline] = useState(navigator.onLine)

    addEventListener(navigator, 'online', () => setOnline(navigator.onLine));
    addEventListener(navigator, 'offline', () => setOnline(navigator.onLine));

    return online
}

export default useClientOnline;