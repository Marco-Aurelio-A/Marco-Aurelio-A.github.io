import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
app.use(express.json);

const prisma = new PrismaClient();

app.get('/conteudo', (req, res) =>
{

    res.send("Deu bom!");

})

app.listen(URL("https://marco-aurelio-a.github.io"));
