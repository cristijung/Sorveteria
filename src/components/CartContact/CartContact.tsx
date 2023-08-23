import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import styles from './CartContact.module.scss';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';

export default function CardContact() {
  return (
    <div className={styles.content}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.pinimg.com/originals/a2/8f/ca/a28fca519b950373570bac68b192c487.jpg"
          alt="sorte sorvete"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Atendimento
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Se você tiver qualquer dúvida ou preocupação, envie-nos um e-mail para: <br/> 
          <strong>sortesorvete@gmail.com</strong> ou pode nos ligar <strong>+55(051)-99999-1234</strong> <br/>
            <strong>Localização:</strong> Av. Sol de Verão, 123 Info 55555
            <hr/>
            Atendimento de Terça a Domingo das 9 até 19h
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Compartilhar -          
        </Button>
        <FaFacebookSquare />
        <FaInstagramSquare />
        <FaWhatsappSquare />
      </CardActions>
    </Card>
    </div>
  );
}