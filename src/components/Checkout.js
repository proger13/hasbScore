import { Modal, Box, TextField, Grid, Typography, ListItemText, ListItemAvatar, ListItem, List, Divider } from '@mui/material'
import * as React from 'react';
import Button from '@mui/material/Button';
import useCookie from 'react-use-cookie';
import { useFormik } from 'formik';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export const Checkout = (props) => {
    const { open, handleClose } = props;
    const [basket, setBasket] = useCookie('basket', '[]');
    const mbasket = JSON.parse(basket)
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            patronymic: '',
        },
        onSubmit: values => {
            console.log(values, mbasket)
           fetch('http://localhost:5000/sendmail', {
               method: 'POST',
               body: JSON.stringify({
                    values,
                    mbasket
               }),
               headers: {
                    'Content-Type': 'application/json'
               }
           })
        },
    });
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <form onSubmit={formik.handleSubmit}>
                <Box sx={style}>
                    <List sx={{ width: '100%', minWidth: 360, bgcolor: 'background.paper' }}>
                        {mbasket.map((item) => (
                            <>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <img src={item.img} style={{ width: 40, height: 40 }} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={`Имя: ${item.title}`}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                </Typography>
                                                {`Кол-во: ${item.count} шт`}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider />
                            </>
                        ))}
                    </List>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <TextField fullWidth name='firstName' label="Имя" variant="standard" value={formik.values.firstName} onChange={formik.handleChange} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField fullWidth name='lastName' label="Фамилия" variant="standard" value={formik.values.lastName} onChange={formik.handleChange} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField fullWidth name='patronymic' label="Отчество" variant="standard" value={formik.values.patronymic} onChange={formik.handleChange} />
                        </Grid>
                    </Grid>
                    <div style={{
                        marginTop: 30,
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}>

                        <Button variant="contained" type='submit'>Купить</Button>
                    </div>
                </Box>
            </form>
        </Modal>
    )
}