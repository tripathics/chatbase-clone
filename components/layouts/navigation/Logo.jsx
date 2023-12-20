import Image from "next/image";

const Logo = () => (
  <Image
    src="https://www.chatbase.co/images/chatbase-logo.svg"
    className="aspect-square rounded-lg"
    alt="Chatbase Logo"
    width={32}
    height={32}
  />
);

export default Logo;
