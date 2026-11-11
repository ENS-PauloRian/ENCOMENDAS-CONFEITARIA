require('dotenv').config();

const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const sequelize = require('./src/config/database');
const encomendaRoutes = require('./src/routes/encomendaRoutes');
const swaggerDocument = require('./src/docs/swagger.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/encomendas', encomendaRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

sequelize
  .sync()
  .then(() => {
    console.log('Banco de dados sincronizado.');
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
      console.log(`Swagger em http://localhost:${PORT}/api-docs`);
    });
  })
  .catch((erro) => {
    console.error('Erro ao conectar no banco de dados:', erro.message);
  });
