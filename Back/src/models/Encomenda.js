const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Encomenda = sequelize.define(
  'Encomenda',
  {
    enc_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    enc_cliente: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    enc_telefone: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    enc_produto: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    enc_quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 1 },
    },
    enc_data_entrega: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    enc_status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: 'Pendente',
      validate: {
        isIn: [['Pendente', 'Em produção', 'Entregue']],
      },
    },
  },
  {
    tableName: 'encomendas',
    timestamps: false,
  }
);

module.exports = Encomenda;
