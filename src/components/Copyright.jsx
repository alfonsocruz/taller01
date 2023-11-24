import Typography from '@mui/material/Typography';

export default function Copyright(props) {
    return (
        <Typography variant="body2" color="secondary" align="center" {...props}>
            {'Copyright © '}
            Ver 1.0 {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}