import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material'
import { useTranslation } from 'react-i18next'

interface DialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const DialogConfirm = ({ open, onClose, onConfirm }: DialogProps) => {
  const { t } = useTranslation()

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{t('deleteConfirmationTitle')}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {t('deleteConfirmationText')}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          {t('cancel')}
        </Button>
        <Button onClick={onConfirm} color="secondary">
          {t('delete')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
