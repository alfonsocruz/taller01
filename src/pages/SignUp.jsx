import * as React from 'react';
import * as Yup from "yup";

import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

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
import CircularProgress from '@mui/material/CircularProgress';

import Swal from 'sweetalert2';
import Copyright from "../components/Copyright";
import { API_HOST } from '../constants';

const defaultTheme = createTheme();

export default function SignUp() {
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            nombre: '',
            apellidos: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email().required().label("Usuario"),
            password: Yup.string().required().min(6).label("Contraseña"),
            nombre: Yup.string().required().label("Nombre"),
            apellidos: Yup.string().required().label("Apellidos"),
        }),
        enableReinitialize: false,
        onSubmit: (values, actions) => {
            handleSubmit(values, actions);
        },
    });

    const handleSubmit = async (values, actions) => {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        setLoading(true);
        var params = JSON.stringify(values);

        try {
            let options = {
                method: 'POST',
                headers: headers,
                body: params,
                mode: 'cors'
            };

            const url = `${API_HOST}/usuarios`

            const result = await fetch(url, options);

            if (result.ok) {
                Swal.fire({
                    title: "Registrado con éxito",
                    icon: 'warning'
                });
                actions.resetForm();
                navigate('/');
            } else {
                Swal.fire({
                    title: result.statusText,
                    icon: 'warning'
                });
            }
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
                    <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
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
                                    value={formik.values.nombre}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    helperText={
                                        formik.touched.nombre &&
                                        formik.errors.nombre &&
                                        formik.errors.nombre
                                    }
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
                                    value={formik.values.apellidos}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    helperText={
                                        formik.touched.apellidos &&
                                        formik.errors.apellidos &&
                                        formik.errors.apellidos
                                    }
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
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    helperText={
                                        formik.touched.email &&
                                        formik.errors.email &&
                                        formik.errors.email
                                    }
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
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    helperText={
                                        formik.touched.password &&
                                        formik.errors.password &&
                                        formik.errors.password
                                    }
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