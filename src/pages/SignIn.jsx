import * as React from 'react';
import * as Yup from "yup";

import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Swal from 'sweetalert2';

import Copyright from "../components/Copyright"
import { API_HOST } from '../constants';


const defaultTheme = createTheme();

export default function SignIn() {
    const [loading, setLoading] = React.useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email().required().label("Usuario"),
            password: Yup.string().required().min(6).label("Contraseña"),
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

            const url = `${API_HOST}/login`

            const result = await fetch(url, options);

            if (result.ok) {
                const token = await result.text();
                sessionStorage.setItem('token', token);
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
    };

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
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            helperText={
                                formik.touched.email &&
                                formik.errors.email &&
                                formik.errors.email
                            }
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            helperText={
                                formik.touched.password &&
                                formik.errors.password &&
                                formik.errors.password
                            }
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        {
                            loading && (<CircularProgress />)
                        }
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/sign-up" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}