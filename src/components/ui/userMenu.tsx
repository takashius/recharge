import { Avatar, IconButton, Tooltip, Menu, MenuItem, ListItemIcon, Divider } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { Logout, CreditCard } from '@mui/icons-material'
import { useState } from 'react'
import { auth } from 'src/credentials'
import { useAuth } from 'src/context/AuthContext'
import { useTheme } from 'src/context/ThemeContext'
import { useTranslation } from 'react-i18next'

export default function UserMenu() {
  const { t } = useTranslation()
  const { currentUser } = useAuth()
  const { setIsLoading } = useTheme()
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const handleClose = () => {
    setAnchorEl(null)
  };

  const goToProfile = () => {
    setAnchorEl(null)
    navigate('/user/profile')
  }

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = async () => {
    try {
      setIsLoading(true)
      await auth.signOut()
      navigate('/signIn')
      setIsLoading(false)
      console.log('Sesión cerrada exitosamente');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }

  return (
    <>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar alt={currentUser?.displayName ? currentUser.displayName : ''} src={currentUser?.photoURL ? currentUser.photoURL : ''} />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={goToProfile}>
          <Avatar /> {t('header.profile')}
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <Link to="/user/cards">
            <ListItemIcon>
              <CreditCard fontSize="small" />
            </ListItemIcon>
            {t('header.cards')}
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          {t('header.logout')}
        </MenuItem>
      </Menu>
    </>
  )
}
