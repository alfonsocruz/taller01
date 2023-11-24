import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import CssBaseline from "@mui/material/CssBaseline";

import Copyright from '../components/Copyright';

export default function NotFound() {

    return (
        <Container component="main" maxWidth="lg">
            <Box sx={{ display: "flex" }} component={Paper}>
                <CssBaseline />
                <Box sx={{ flexGrow: 1, p: 3, mt: 40 }} alignItems="center">
                    <Grid
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={2}
                        sx={{ pt: 2, pb: 2 }}
                    >
                        <Grid item xs={12} sm={12} md={7} lg={7}>
                            <Typography variant="h1" component="div" gutterBottom>
                                ERROR 404
                            </Typography>
                            <Typography variant="h1" component="div" gutterBottom>
                                PÁGINA NO ENCONTRADA
                            </Typography>
                            <Typography variant="h4" component="div" gutterBottom>
                                <Link href="/">IR AL INICIO</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}