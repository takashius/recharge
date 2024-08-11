import React, { useState } from 'react'
import { ImageList, ImageListItem, Modal, Box } from '@mui/material'
import { imageGallery } from 'src/types/general'

const ImageGallery = ({ data }: { data: imageGallery }) => {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState('')

  const handleOpen = (img: React.SetStateAction<string>) => {
    setSelectedImg(img)
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };

  return (
    <div>
      <ImageList cols={6} rowHeight={164} className='mb-16'>
        {data.images.map((item) => (
          <ImageListItem key={item.img} onClick={() => handleOpen(item.img)} className='cursor-pointer'>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <img src={selectedImg} alt="Selected" style={{ width: '100%' }} />
        </Box>
      </Modal>
    </div>
  );
};

export default ImageGallery;
