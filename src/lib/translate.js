'use server'

import { mastra } from "../mastra";

const langAgent = mastra.getAgent("LangAgent");

export async function Translate(sourceText, selectedLanguage) {
    try {
        const response = await langAgent.generate([
            {
                role: "user",
                content: `You will be provided with a sentence. This sentence: 
        ${sourceText}. Your tasks are to:
        - Detect what language the sentence is in
        - Translate the sentence into ${selectedLanguage}
        Do not return anything other than the translated sentence.`,
            },
        ]);

        return response.text;
    } catch (error) {
        console.error("Error translating text:", error);
        throw new Error("Translation failed");
    }
}