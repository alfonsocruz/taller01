import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Swal from 'sweetalert2';
import Copyright from "../components/Copyright";
import { CircularProgress } from '@mui/material';
import { API_HOST } from '../constants';

const defaultTheme = createTheme();

export default function SignUp() {
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Content-Type", "application/json");

        const data = new FormData(event.currentTarget);
        setLoading(true);

        var object = {};
        data.forEach(function (value, key) {
            object[key] = value;
        });
        var params = JSON.stringify(object);

        try {
            let options = {
                method: 'POST',
                headers: headers,
                body: params,
                mode: 'cors'
            };

            const url = `${API_HOST}/usuarios`

            const result = await fetch(url, options);

            console.log('====================================');
            console.log(result);
            console.log('====================================');
        } catch (error) {
            Swal.fire({
                title: error.message,
                icon: 'error'
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="nombre"
                                    required
                                    fullWidth
                                    id="nombre"
                                    label="Nombre"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="apellidos"
                                    label="Apellidos"
                                    name="apellidos"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Correo electrónico"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Contraseña"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        {
                            loading && (<CircularProgress />)
                        }
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/sign-in" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}