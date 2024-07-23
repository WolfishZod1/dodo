import { Box, Link, Stack } from "@mui/material";

export function LinksContact() {
   return (
      <Box
         sx={{
            flexGrow: 1,
            height: "100%",
            display: "flex",
            lineHeight: "19.2px",
         }}
      >
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               justifyContent: "flex-start",
               minWidth: "130px",
               marginRight: "60px",
               marginBottom: "50px",
               color: "rgb(255, 255, 255)",
               fontSize: "16px",
            }}
         >
            <Stack spacing={1.125}>
               <span>Додо пицца</span>
               <Link sx={{ opacity: 0.7, fontSize: "inherit", lineHeight: "inherit" }}>О нас</Link>
               <Link sx={{ opacity: 0.7, fontSize: "inherit", lineHeight: "inherit" }}>
                  Додо-книга
               </Link>
               <Link sx={{ opacity: 0.7, fontSize: "inherit", lineHeight: "inherit" }}>
                  Блог «Сила ума»
               </Link>
            </Stack>
         </Box>
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               justifyContent: "flex-start",
               minWidth: "130px",
               marginRight: "60px",
               marginBottom: "50px",
               color: "rgb(255, 255, 255)",
               fontSize: "16px",
            }}
         >
            <Stack spacing={1.125}>
               <span>Работа</span>
               <Link sx={{ opacity: 0.7, fontSize: "inherit", lineHeight: "inherit" }}>
                  В пиццерии
               </Link>
               <Link sx={{ opacity: 0.7, fontSize: "inherit", lineHeight: "inherit" }}>
                  В контакт-центре
               </Link>
            </Stack>
         </Box>
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               justifyContent: "flex-start",
               minWidth: "130px",
               marginRight: "60px",
               marginBottom: "50px",
               color: "rgb(255, 255, 255)",
               fontSize: "16px",
               opacity: 1,
            }}
         >
            <Stack spacing={1.125}>
               <span>Партнерам</span>
               <Link sx={{ opacity: 0.7, fontSize: "inherit", lineHeight: "inherit" }}>
                  Франшиза
               </Link>
               <Link sx={{ opacity: 0.7, fontSize: "inherit", lineHeight: "inherit" }}>
                  Инвестиции
               </Link>
               <Link sx={{ opacity: 0.7, fontSize: "inherit", lineHeight: "inherit" }}>
                  Поставщикам
               </Link>
               <Link sx={{ opacity: 0.7, fontSize: "inherit", lineHeight: "inherit" }}>
                  Предложить помещение
               </Link>
            </Stack>
         </Box>
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               justifyContent: "flex-start",
               minWidth: "130px",
               marginRight: "60px",
               marginBottom: "50px",
               color: "rgb(255, 255, 255)",
               fontSize: "16px",
            }}
         >
            <Stack spacing={1.125}>
               <span>Это интеренсно</span>
               <Link sx={{ opacity: 0.7, fontSize: "inherit", lineHeight: "inherit" }}>
                  Почему мы готовим без перчаток?
               </Link>
               <Link sx={{ opacity: 0.7, fontSize: "inherit", lineHeight: "inherit" }}>
                  Экскурсии и мастер-классы
               </Link>
            </Stack>
         </Box>
      </Box>
   );
}
