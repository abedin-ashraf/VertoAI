import { useEffect, useState } from "react";
import { Translate } from "../lib/translate";

const useTranslate = (sourceText, selectedLanguage) => {
    const [targetText, setTargetText] = useState("");

    useEffect(() => {
        const handleTranslate = async () => {
            try {
                const translatedText = await Translate(sourceText, selectedLanguage);
                setTargetText(translatedText);
            } catch (error) {
                console.error("Error translating text:", error);
            }
        };

        if (sourceText.trim()) {
            const timeoutId = setTimeout(() => {
                handleTranslate();
            }, 500);

            return () => clearTimeout(timeoutId);
        }
    }, [sourceText, selectedLanguage]);

    return targetText;
};

export default useTranslate;