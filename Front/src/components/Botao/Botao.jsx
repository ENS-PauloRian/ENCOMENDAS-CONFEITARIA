import './Botao.css';

// variante: 'primario' | 'secundario' | 'perigo'
function Botao({ texto, onClick, type = 'button', variante = 'primario' }) {
  return (
    <button type={type} className={`botao botao-${variante}`} onClick={onClick}>
      {texto}
    </button>
  );
}

export default Botao;
