import aiFace from "@/assets/images/ai-pic.png";
import userFace from "@/assets/images/user-pic.jpg";

export default {
  modeList: [
    { text: "GPT 4", value: "ChatGPT 4" },
    { text: "GPT 4o", value: "ChatGPT 4o" },
    { text: "GPT 3.5", value: "ChatGPT 3.5" },
    { text: "Dell -3", value: "Dell -3" },
  ],
  defaultMode: "ChatGPT 3.5",
  defaultAiFaceImage: aiFace,
  defaultUserFaceImage: userFace,
  inputIcons: ["photo-o", "description-o"],
};
