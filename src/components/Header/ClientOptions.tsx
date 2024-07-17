import { Stack } from "@mui/material";
import { DodoCoin } from "@components/SvgIcon/DodoCoin";
import { UserCabinet } from "@components/SvgIcon/UserCabinet";
import { UserStock } from "@components/SvgIcon/UserStock";
import { ClientOption } from "@components/Header/ClientOption";

export function ClientOptions() {
   return (
      <Stack
         direction="row"
         sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            columnGap: "32px",
         }}
      >
         <ClientOption
            text="Додокоины"
            Icon={DodoCoin}
         />

         <ClientOption
            text="Мои акции"
            Icon={UserStock}
         />

         <ClientOption
            text="Кабинет"
            Icon={UserCabinet}
         />
      </Stack>
   );
}
