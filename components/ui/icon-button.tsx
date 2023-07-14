import { MouseEventHandler } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

const IconButton = ({ onClick, icon, className }: IconButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center bg-white justify-center border shadow-md p-2.5 hover:scale-110 hover:bg-white transition",
        className
      )}
    >
      {icon}
    </Button>
  );
};

export default IconButton;
