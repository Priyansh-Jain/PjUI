import React from "react";
import { Copy } from "lucide-react";
import { toast } from "react-hot-toast";

const CopyButton = ({ text }: { text: string }) => {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard:", text);
        toast.success("Copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying text to clipboard:", err);
        toast.error("Error copying to clipboard");
      });
  };
  return (
    <button
      onClick={copyToClipboard}
      className="text-gray-400 hover:text-white"
    >
      <Copy className="h-4 w-4" />
    </button>
  );
};

export default CopyButton;
