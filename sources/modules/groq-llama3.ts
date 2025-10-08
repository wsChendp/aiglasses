import axios from "axios";
import { keys } from "../keys";

const headers = {
    'Authorization': `Bearer ${keys.groq}`
};

export async function groqRequest(systemPrompt: string, userPrompt: string) {
    try {
        const base = (keys.openaiBase ?? '').replace(/\/+$/, '');
        const response = await axios.post(`${base}/v1/chat/completions`, {
            model: "gpt-4o",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt },
            ],
        }, {
            headers: {
                'Authorization': `Bearer ${keys.openai}`,  // Replace YOUR_API_KEY with your actual OpenAI API key
                'Content-Type': 'application/json'
            },
        });
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error("Error in groqRequest:", error);
        return null; // or handle error differently
    }
}


