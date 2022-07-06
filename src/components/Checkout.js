import { Modal, Box, TextField, Grid } from '@mui/material'

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

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <TextField fullWidth label="Имя" variant="standard" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField fullWidth label="Фамилия" variant="standard" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField fullWidth label="Отчество" variant="standard" />
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
}