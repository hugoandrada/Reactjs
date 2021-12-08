const App = () => {

    const valorInicial = "Titulo Original";
    const [titulo, setTitulo] = useState(valorInicial);
  
    function handleInputChange(event) {
      setTitulo(event.target.value);
    }
  
    return(
  
      <div>
        <h1>{titulo}</h1>
        <input
            placeholder="Actualizar titulo"
            onChange={handleInputChange}
        />
      </div>
    )
}