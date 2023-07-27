import Typography from '@mui/material/Typography';
import MaterialCard from '@mui/material/Card';
import { CardMediaProps } from '@mui/material/CardMedia';
import CardMedia from '@mui/material/CardMedia';
import testImage from '../../nasaTest.jpeg';
import Box from '@mui/material/Box';
import { useState } from 'react';

export type CardProps = {
  /** Title to display in the card */
  title: string,
  /** Content to display in the card */
  content: string,
  /** Image to display in the card */
  image: CardMediaProps['image']
}

export const Card = ({
  title = '',
  content = '',
  image = testImage
}: CardProps) => {
  const [isCardHovered, setIsCardHovered] = useState(false);

  const onCardMouseOver = () => {
    setIsCardHovered(true);
  }

  const onCardMouseOut = () => {
    setIsCardHovered(false);
  }

  return (
    <MaterialCard
      onMouseOver={onCardMouseOver} 
      onMouseOut={onCardMouseOut} 
      sx={{ 
        maxWidth: 345, 
        boxShadow:'none',
        ':hover': {
          cursor: 'pointer',
        },
        ':focus': {
          border: '1px dotted',
        }
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="480"
          width="312"
          image={image}
          sx={{
            transform: isCardHovered? 'scale(1.25)' : 'scale(1)',
            transition: 'all .2s ease',
            verticalAlign: 'middle'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '50%',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))',
            color: 'white',
            padding: '20px 20px',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            color: 'white',
            padding: '20px 20px',
          }}
        >
          <Typography variant="h5" component="span">{title} {/*<Badge color="secondary" badgeContent=" "><EastIcon/></Badge>*/}</Typography>
          <Typography variant="body2">{content}</Typography>
        </Box>
        <Box
          sx={{
            position: 'relative', top: '-10px', zIndex: '3'
          }}
        >
        </Box>
      </Box>
    </MaterialCard>
  );
}

export default Card;