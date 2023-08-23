import styles from './About.module.scss';
import foto from './../../assets/sorvete-um.jpg';
import imagem from './../../assets/sorvete-cinco.jpg';
import base from './../../assets/sorvete-tres.jpg';
import imgSorvete from './../../assets/sorvete-quatro.webp';
import { Box, Grid, Paper, Container } from "@mui/material";
import { styled } from '@mui/material/styles';
import { FC } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const About: FC = () => {
  return (
    <div className={styles.about}>
      <Container maxWidth='lg'>
      <h2>Nossa história</h2>
      <Box sx={{ flexGrow: 1}}>
        <Grid container spacing={2}>
          <Grid xs={8}>
      <Item className={styles.itemGrid}>
        <h2>Lorem ipsum</h2> dolor sit amet, consectetur adipisicing elit. A aspernatur
        dolorem est, nam quia reiciendis velit? A architecto commodi
        consequuntur, cumque cupiditate delectus dicta enim, error incidunt
        inventore iusto laudantium magnam maiores odit porro possimus provident
        quos ratione reprehenderit repudiandae sapiente sequi sit, sunt ullam
        veniam veritatis voluptatibus. A alias animi autem commodi consectetur
        consequatur consequuntur corporis ex excepturi fuga inventore, ipsam
        ipsum laborum maxime molestiae molestias mollitia nemo neque nihil nisi
        non omnis pariatur quaerat quasi quisquam repellat similique sit soluta
        tempore voluptas.        
      </Item>
      </Grid>
      <Grid xs={4}>
        <Item className={styles.iteGridImg}>
          <img className={styles.foto} src={foto} alt='Fabricando sorvete' />
        </Item>
      </Grid>
      <Grid xs={4}>
        <Item className={styles.iteGridImg}>
          <img className={styles.foto} src={imagem} alt='Fabricando sorvete' />
        </Item>
      </Grid>
      <Grid xs={8}>
        <Item className={styles.itemGrid}>
          <h2>Sorveto!</h2>
        Asperiores assumenda commodi culpa cum dolores, ea iste molestias nam
        recusandae! A accusantium aliquid consectetur corporis debitis dolor
        dolorum error fuga id illo ipsa iste iure laboriosam libero minus modi
        nemo nesciunt officiis placeat quae quia, quo reiciendis repellendus
        sequi similique sit ullam unde vel vero voluptatem? Ab dolorum hic
        inventore minima obcaecati odio quibusdam soluta. Dolor doloribus, harum
        natus nostrum odio quasi quod. Ab dolorum hic
        inventore minima obcaecati odio quibusdam soluta. Dolor doloribus, harum
        natus nostrum odio quasi quod. Ab dolorum hic
        inventore minima obcaecati odio quibusdam soluta. Dolor doloribus, harum
        natus nostrum odio quasi quod. Ab dolorum hic
        inventore minima obcaecati odio quibusdam soluta. Dolor doloribus, harum
        natus nostrum odio quasi quod. A accusantium aliquid consectetur corporis debitis dolor
        dolorum error fuga id illo ipsa iste iure laboriosam libero minus modi
        nemo nesciunt officiis placeat quae quia, quo reiciendis repellendus
        sequi similique sit ullam unde vel vero voluptatem?
        </Item>
      </Grid>
      <Grid xs={12}>
        <Item>
          <img className={styles.foto} src={imgSorvete} alt='Sorvetes' />
        </Item>
      </Grid>      
      <p>
        Accusamus ad amet architecto cum cumque deserunt dolore dolorem earum et
        eveniet explicabo illo ipsam iusto labore molestias non nostrum pariatur
        quam quas quia quidem, quisquam quo quos rerum saepe sit totam! Alias
        asperiores aspernatur beatae culpa cumque cupiditate debitis dicta
        dolore dolorem doloremque ea error, eum expedita explicabo hic illo
        impedit inventore ipsam magni modi necessitatibus nesciunt nihil odio
        placeat quam quisquam ratione repellat sequi, soluta totam, veniam
        veritatis voluptate voluptatibus!
      </p>
      </Grid>
      </Box>
      </Container>
    </div>
    
  );
};

export default About;
