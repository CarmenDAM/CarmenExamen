import React from 'react';
import { Container } from 'react-bootstrap';


class FormularioEj2 extends React.Component {
  constructor(props) {
    super(props);
    const elementos = []
    this.state = {
      listaComponentes: elementos,
    };
    this.Imagen = React.createRef();
    this.Marca = React.createRef();
    this.vSistemaOperativo = React.createRef();
    this.Dimension = React.createRef();
    this.Almacenamiento = React.createRef();
  }

  onClickAñadir() {
    const newLista = this.state.listaComponentes.concat(
      <Libro
        titulo={this.Imagen.current.value}
        autor={this.Marca.current.value}
        fecha={this.SistemaOperativo.current.value}
        paginas={this.Dimension.current.value}
        urlimagen={this.Almacenamiento.current.value}
      />
    );
    this.setState({ listaComponentes: newLista });
  }

  render() {
    return (
      <div>
        <Container>
          <h1>Título</h1>
          {this.state.listaComponentes}
          <input
            ref={this.Imagen}
            type="text"
            placeholder="Foto:"
          />
          <br />
          <input
            ref={this.Marca}
            type="text"
            placeholder="Marca:"
          />
          <br />
          <input ref={this.SistemaOperativo} type="text" />
          <br />
          <input
            ref={this.Dimension}
            type="number"
            placeholder="Dimensiones:"
          />
          <br />
          <input
            ref={this.Almacenamiento}
            type="number"
            placeholder="Almacenamiento:"
          />
          <br />
          <button onClick={this.onClickAñadir.bind(this)}>Añadir</button>
          <br />
          {this.state.listaComponentes.map}
        </Container>
      </div>
    );
  }
}

export default FormularioEj2;