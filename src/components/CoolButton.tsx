export const CoolButton = ({ text, link }: { text: string; link: string }) => {
  return (
    <a
      href={link}
      className={`w-72 bg-[#333333] rounded-lg p-3 text-center hover:bg-[#C4F82A] hover:text-black text-white transition-colors 
        `}
    >
      {text}
    </a>
  );
};
