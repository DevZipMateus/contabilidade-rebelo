
import { cn } from "@/lib/utils";

interface LogoProps {
  scrolled: boolean;
}

const Logo = ({ scrolled }: LogoProps) => {
  return (
    <a href="#inicio" className="flex items-center z-10 relative">
      <img 
        src="/lovable-uploads/9f000106-b36f-4846-989d-e3b6bc80f35e.png" 
        alt="Contabilidade Rebelo - Mais de 30 anos de experiência contábil"
        className={cn(
          "h-12 w-auto transition-all duration-300",
          scrolled ? "h-10" : "h-12",
          "hover:scale-105"
        )}
      />
    </a>
  );
};

export default Logo;
