import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Swal from 'sweetalert2';
import { API_HOST } from '../constants';
import { CircularProgress } from '@mui/material';
import { getToken } from '../routes/middlewares';

export default function People(props) {
    const [rows, setRows] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const init = async () => {
            await loadData();
        }

        init();
    }, []);

    const loadData = async () => {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", `Bearer ${getToken()}`);

        setLoading(true);
        try {
            let options = {
                method: 'GET',
                headers: headers,
                mode: 'cors'
            };

            const url = `${API_HOST}/directorio`

            const result = await fetch(url, options);

            if (result.ok) {
                const response = await result.text();
                setRows(JSON.parse(response));
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
        <React.Fragment>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Directorio
            </Typography>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Fecha</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Celular</TableCell>
                        <TableCell>Correo</TableCell>
                    </TableRow>
                </TableHead>
                {loading ? <CircularProgress /> :
                    (<TableBody>{
                        rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.fechacreo}</TableCell>
                                <TableCell>{row.nombre}</TableCell>
                                <TableCell>{row.celular}</TableCell>
                                <TableCell>{row.correo}</TableCell>
                            </TableRow>
                        ))
                    }</TableBody>)
                }

            </Table>
        </React.Fragment>
    );
}