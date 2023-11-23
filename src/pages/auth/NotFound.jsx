import React from "react";
import { Box, Typography, Link, Stack, Grid, Divider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@src/theme/index";

const NotFound = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <Box sx={{ flexGrow: 1, p: 3, mt: 35 }} alignItems="center">
                    <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={2}
                        sx={{ pt: 2, pb: 2 }}
                    >
                        <Grid item xs={12} sm={12} md={7} lg={7}>
                            <Typography variant="h1" component="div" gutterBottom>
                                LA PÁGINA
                            </Typography>
                            <Typography variant="h1" component="div" gutterBottom>
                                NO FUE ENCONTRADA
                            </Typography>
                            <Typography variant="h4" component="div" gutterBottom>
                                <Link href="/">IR AL INICIO</Link>
                            </Typography>
                        </Grid>
                    </Stack>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
export default NotFound;