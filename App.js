import React, { Component } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import './App.css'

class App extends Component {
    constructor() {
    super()
    this.state = {
      passageiros: [{ nome: '', telefone: ''}],
    }
    this.addPassageiro    = this.addPassageiro.bind(this)
    this.removePassageiro = this.removePassageiro.bind(this)
    this.handleSubmit     = this.handleSubmit.bind(this)
  }

  addPassageiro = (e) => {
    e.preventDefault()
    this.setState(prevState => ({ 
      passageiros: [...prevState.passageiros, { nome: '', telefone: '' }]
    }));
  }

  handleSubmit(e) {
    e.preventDefault()
    const dados = this.state.passageiros
    axios.post('https://demo4326407.mockable.io/passageiros', dados)
    console.log(dados)
  }

  handleChange(i, e) {
    const { name, value } = e.target

    let passageiros = [...this.state.passageiros]
    passageiros[i] = {...passageiros[i], [name]: value}
    this.setState({ passageiros })
  }
  
  removePassageiro(i) {
     let passageiros = [...this.state.passageiros]
     passageiros.splice(i, 1)
     this.setState({ passageiros })
  }
  
  createUI() {
     return this.state.passageiros.map((el, i) => (
       <div key={i}>
        <Form.Group as={Row}>
          <Form.Label column sm="2">{`Passageiro #${i + 1}`}</Form.Label>
          <Col sm="4">
            <Form.Control
              name="nome"
              type="text"
              value={el.nome ||''}
              onChange={this.handleChange.bind(this, i)}
            />
          </Col>
          <Form.Label column sm="1">Telefone</Form.Label>
          <Col sm="3">
            <Form.Control
              name="telefone"
              type="tel"
              value={el.telefone ||''}
              onChange={this.handleChange.bind(this, i)}
            />
          </Col>
          <Button 
            size="md" 
            onClick={this.removePassageiro}
            variant="danger">Remover
          </Button>
        </Form.Group>
       </div>          
     ))
  }

  render() {
    const data = new Date().toLocaleDateString()
    return (
      <div className="App">
        <h2 className="display-4">Abertura de Ocorrências</h2>
        <Form action="/insere_ocorrencia_control.php" method="POST">
          <Form.Group as={Row}>
            <Form.Label htmlFor="atividade" column sm="2">Atividade:*</Form.Label>
            <Col sm="10">
              <Form.Control 
                name="atividade" 
                size="sm"
                as="select"
                required>
                  <option selected disabled>Selecione uma atividade</option>
                  <option value="1">Realizar Manutenção</option>
                  <option value="2">Visita Técnica</option>
                  <option value="3">Entregar Computador</option>
              </Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label htmlFor="finalidade" column sm="2">Descrição:*</Form.Label>
              <Col sm="10">
                <Form.Control 
                  name="finalidade"  
                  size="sm"
                  as="textarea"
                  placeholder="Descreva aqui com detalhes a finalidade do transporte"
                  rows="3"  
                  required
                />
              </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label htmlFor="data_saida" column sm="2">Data de saida:*</Form.Label>
              <Col sm="4">
                <Form.Control 
                  name="data_saida" 
                  size="sm" 
                  type="date" 
                  placeholder="00/00/00 00:00" 
                  required 
                />
              </Col>
            <Form.Label htmlFor="data_retorno" column sm="3">Previsão de retorno:*</Form.Label>
              <Col sm="3">
                <Form.Control 
                  name="data_retorno" 
                  size="sm" 
                  type="date" 
                  placeholder="00/00/00 00:00" 
                  required 
                />
              </Col>
          </Form.Group>
          
          <Form.Group as={Row}>
            <Form.Label htmlFor="unidade" column sm="2">Unidade/Comarca:*</Form.Label>
            <Col sm="4">
              <Form.Control 
                name="unidade" 
                size="sm" 
                as="select"
                required>
                  <option selected disabled>Selecione uma unidade</option>
                  <option value="CAJ 1">Casa de Acesso a Justiça I </option>
                  <option value="CAJ 2">Casa de Acesso a Justiça II</option>
                  <option value="DH">Direitos Humanos</option>
              </Form.Control>
            </Col>
            <Form.Label htmlFor="tel_institucional" column sm="3">Telefone institucional:*</Form.Label>
            <Col sm="3">
              <Form.Control 
                name="tel_institucional" 
                size="sm" 
                type="tel" 
                required 
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Form.Label htmlFor="tel_celular" column sm="2">Tel. celular:*</Form.Label>
            <Col sm="4">
              <Form.Control 
                name="tel_celular" 
                size="sm" 
                type="tel" 
                required 
              />
            </Col>
            <Form.Label htmlFor="data_abertura" column sm="3">Data de abertura:</Form.Label>
            <Col sm="2">
              <Form.Control 
                name="data_abertura" 
                size="sm" 
                plaintext 
                readOnly 
                value={data} 
              />
            </Col>
          </Form.Group>
          
          <Form.Row>
            <Form.Label column sm="2">Endereço Origem:</Form.Label>
            <Col sm="3">
              <Form.Control
                placeholder="Logradouro"
                name="logradouro_origem" 
                size="sm" 
                type="text" 
              />
            </Col>
            <Col sm="2">
              <Form.Control
                placeholder="Número"
                name="numero_origem" 
                size="sm" 
                type="text" 
              />
            </Col>
            <Col sm="3">
              <Form.Control
                placeholder="Bairro"
                name="bairro_origem" 
                size="sm" 
                type="text" 
              />
            </Col>
            <Form.Row>
              <Col sm="7" style={{paddingLeft: 152}}>
                <Form.Control
                  placeholder="Cidade"
                  name="cidade_origem" 
                  size="sm" 
                  type="text" 
                />
              </Col>
              <Col sm="2">
                <Form.Control
                  placeholder="UF"
                  name="estado_origem" 
                  size="sm" 
                  type="text" 
                />
              </Col>
              <Col sm="2">
                <Form.Control
                  placeholder="CEP"
                  name="cep_origem" 
                  size="sm" 
                  type="text" 
                />
              </Col>
              </Form.Row>
          </Form.Row>

          <Form.Row className="mt-2">
            <Form.Label column sm="2">Endereço Destino:</Form.Label>
            <Col sm="3">
              <Form.Control
                placeholder="Logradouro"
                name="logradouro_destino" 
                size="sm" 
                type="text" 
              />
            </Col>
            <Col sm="2">
              <Form.Control
                placeholder="Número"
                name="numero_destino" 
                size="sm" 
                type="text" 
              />
            </Col>
            <Col sm="3">
              <Form.Control
                placeholder="Bairro"
                name="bairro_destino" 
                size="sm" 
                type="text" 
              />
            </Col>
            <Form.Row column sm="1">
              <Col sm="7" style={{paddingLeft: 153}}>
                <Form.Control
                  placeholder="Cidade"
                  name="cidade_destino" 
                  size="sm" 
                  type="text" 
                />
              </Col>
              <Col sm="2">
                <Form.Control
                  placeholder="UF"
                  name="estado_destino" 
                  size="sm" 
                  type="text" 
                />
              </Col>
              <Col sm="2">
                <Form.Control
                  placeholder="CEP"
                  name="cep_destino" 
                  size="sm" 
                  type="text" 
                />
              </Col>
            </Form.Row>
          </Form.Row>

          <br />
           
          {this.createUI()}
          <Button 
            size="md" 
            onClick={this.addPassageiro}>Adicionar Passageiro
          </Button>

          <Button 
            className="float-right mt-5" 
            type="submit" 
            name="submit" 
            onSubmit={this.handleSubmit} 
            size="lg"
            id="enviar"
            variant="success">Enviar Formulário
          </Button>
        </Form>

        <Button onClick={console.log(this.state.passageiros)}>Teste</Button>
    </div>
    )
  }
}
export default App