import axios from 'axios'

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID gnITd_as19J-8akX36iY6Dii-QB8QoyuJrdqpOxf_V4",
    }
})