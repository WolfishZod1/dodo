import { Link, SvgIconProps } from "@mui/material";

interface Props {
   text: string;
   Icon: React.ComponentType<SvgIconProps>;
}

export function ClientOption({ text, Icon }: Props) {
   return (
      <Link
         sx={{
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            alignItems: "center",
            lineHeight: "18px",
         }}
      >
         <Icon />
         {text}
      </Link>
   );
}
