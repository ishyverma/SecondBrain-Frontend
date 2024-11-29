import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../config";

export function useShare(shareId) {
    const [content, setContent] = useState([])
    axios.get(`${BACKEND_URL}/api/v1/brain/${shareId}`)
    .then(response => {
        setContent(response.data.content)
    })
    return content
}