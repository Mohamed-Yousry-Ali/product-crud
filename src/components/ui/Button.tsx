import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width: "w-full" | "w-fit";
}
const Button = ({ children, className, width = "w-full", ...rest }: IProps) => {
  return (
    <button
      className={`${className} text-white w-full rounded-md p-2 ${width}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;