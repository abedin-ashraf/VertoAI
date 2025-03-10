"use client";
import "regenerator-runtime/runtime";
import React, { useState, ChangeEvent } from "react";
import {
  IconCopy,
  IconStar,
  IconThumbDown,
  IconThumbUp,
  IconVolume,
} from "@tabler/icons-react";
import SpeechRecognitionComponent from "@/components/SpeechRecognition"
import TextArea from "@/components/Inputs/TextArea";
import FileUpload from "@/components/Inputs/FileUpload";
import LinkPaste from "@/components/Inputs/LinkPaste";
import LanguageSelector from "@/components/Inputs/LanguageSelector";
import useTranslate from "@/hooks/useTranslate";
import { rtfToText } from "@/utils/rtfToText";

import SvgDecorations from "@/components/SvgDecoration";
import CategoryLinks from "@/components/CategoryLink";

const Home: React.FC = () => {
  const [sourceText, setSourceText] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<boolean>(false);
  const [languages] = useState<string[]>([
    "English", "Mandarin Chinese", "Hindi", "Spanish", "French",
    "Arabic", "Bengali", "Portuguese", "Russian", "Urdu",
    "Japanese", "German", "Swahili", "Marathi", "Telugu",
    "Turkish", "Tamil", "Vietnamese", "Italian", "Korean",
    "Hausa", "Thai", "Polish", "Persian (Farsi)", "Dutch",
    "Ukrainian", "Yoruba", "Malay", "Igbo", "Gujarati",
    "Kannada", "Amharic", "Oromo", "Burmese", "Tagalog",
    "Pashto", "Sindhi", "Romanian", "Cebuano", "Azerbaijani",
    "Hungarian", "Greek", "Serbo-Croatian", "Czech", "Belarusian",
    "Bulgarian", "Zulu", "Malayalam", "Haitian Creole", "Khmer",
    "Sinhala", "Quechua", "Hebrew", "Lao", "Mongolian",
    "Armenian", "Tigrinya", "Maithili", "Slovak", "Lithuanian",
    "Albanian", "Bashkir", "Kazakh", "Bosnian", "Georgian",
    "Luxembourgish", "Macedonian", "Tajik", "Uzbek", "Kurdish"
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("German");

  const targetText = useTranslate(sourceText, selectedLanguage);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const rtfContent = reader.result as string;
        const text = rtfToText(rtfContent);
        setSourceText(text);
      };
      reader.readAsText(file);
    }
  };

  const handleLinkPaste = async (e: ChangeEvent<HTMLInputElement>) => {
    const link = e.target.value;
    try {
      const response = await fetch(link);
      const data = await response.text();
      setSourceText(data);
    } catch (error) {
      console.error("Error fetching link content:", error);
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(targetText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLike = () => {
    // Implement like logic
  };

  const handleDislike = () => {
    // Implement dislike logic
  };

  const handleAudioPlayback = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="w-full bg-black bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="relative overflow-hidden h-screen">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl font-extrabold text-center text-neutral-100 tracking-tight">
              <span className="bg-gradient-to-r from-[#f87315] via-yellow-500 to-[#f87315] text-transparent bg-clip-text">
                Verto
              </span>
              <span className="text-white">AI</span>
            </h1>

            <p className="mt-3 text-neutral-400">
              VertoAI: Translating Voices, Uniting Worlds.
            </p>

            <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
              <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <div className="relative z-10 flex flex-col space-x-3 p-3  border rounded-lg shadow-lg  bg-neutral-900 border-neutral-700 shadow-gray-900/20">
                  <TextArea
                    id="source-language"
                    value={sourceText}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                      setSourceText(e.target.value)
                    }
                    placeholder="Source Language"
                  />
                  <div className="flex flex-row justify-between w-full mt-3">
                    <span className="cursor-pointer flex space-x-2 flex-row">
                      <SpeechRecognitionComponent
                        setSourceText={setSourceText}
                      />
                      <IconVolume
                        className="text-white"
                        size={22}
                        onClick={() => handleAudioPlayback(sourceText)}
                      />
                      <FileUpload handleFileUpload={handleFileUpload} />
                      <LinkPaste handleLinkPaste={handleLinkPaste} />
                    </span>
                    <span className="text-sm pr-4">
                      {sourceText.length} / 2000
                    </span>
                  </div>
                </div>

                <div className="relative z-10 flex flex-col space-x-3 p-3  border rounded-lg shadow-lg  bg-neutral-900 border-neutral-700 shadow-gray-900/20">
                  <TextArea
                    id="target-language"
                    value={targetText}
                    onChange={() => { }}
                    placeholder="Target Language"
                  />
                  <div className="flex flex-row justify-between w-full mt-3">
                    <span className="cursor-pointer flex items-center space-x-2 flex-row">
                      <LanguageSelector
                        selectedLanguage={selectedLanguage}
                        setSelectedLanguage={setSelectedLanguage}
                        languages={languages}
                      />
                      <IconVolume
                        className="text-white"
                        size={22}
                        onClick={() => handleAudioPlayback(targetText)}
                      />
                    </span>
                    <div className="flex flex-row items-center space-x-2 pr-4 cursor-pointer">
                      <IconCopy className="text-white" size={22} onClick={handleCopyToClipboard} />
                      {copied && (
                        <span className="text-xs text-green-500">Copied!</span>
                      )}
                      <IconThumbUp className="text-white" size={22} onClick={handleLike} />
                      <IconThumbDown className="text-white" size={22} onClick={handleDislike} />

                    </div>
                  </div>
                </div>
              </div>

              <SvgDecorations />
            </div>

            <CategoryLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;