import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface IDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (username: string) => void;
}

export default function RegisterDialog(props: IDialogProps) {
  const { isOpen, onClose, onSubmit } = props
  return (
    <div>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onSubmit('hehehehe')}>Go go go</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}