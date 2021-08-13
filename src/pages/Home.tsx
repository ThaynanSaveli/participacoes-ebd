import { Button } from '../components/Button';

import '../styles/auth.scss'
import '../styles/global.scss'

export function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
        </div>
        <div className="col-6 mt-5">
          <form>
            <h4 className="mb-4 text-center">EBD nº 32</h4><hr />
            <h5 className="mt-4">Consulte seu cadastro</h5>
            <p>Informe seu CPF, mesmo você sendo membro ou não.</p>

            <div className="mb-4">
              <label className="form-label">CPF:</label>
              <input type="text" className="form-control" name="cpf" />
            </div>
            <hr />

            <h5 className="mt-4">Seus dados pessoais</h5>
            <p>Preencha corretamente os campos abaixo.</p>

            <div className="row g-3">
              <div className="col-12 form-group">
                <label className="form-label">Nome Completo:</label>
                <input type="text" className="form-control" name="nome" />
              </div>
              <div className="col-4">
                <label className="form-label">E-mail:</label>
                <input type="text" className="form-control" name="email" />
              </div>
              <div className="col-4">
                <label className="form-label">Telefone:</label>
                <input type="text" className="form-control" name="telefone" placeholder="(00) 00000-0000" />
              </div>
              <div className="col-4">
                <label className="form-label">Função (opcional):</label>
                <input type="text" className="form-control" name="funcao" />
              </div>
              <div className="col-6">
                <label className="form-label">Cidade:</label>
                <input type="text" className="form-control" name="cidade" />
              </div>
              <div className="col-6">
                <label className="form-label">UF:</label>
                <select className="form-select" aria-label="Default select example" placeholder="UF">
                  <option value="">Selecione...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <hr />
            <div className="section-denominacao">
              <h6>Qual a sua denominação?</h6>
              <p>Escolha uma das opções ou informe escolhendo a opção outros.</p>
              <div className="member-data-denominacao disabled">
                <div className="row">
                  <div className="col-6">
                    <label>Igreja</label> 
                    <input type="text" name="member_igreja" disabled={true}/>
                  </div> 
                  <div className="col-6">
                    <label>Pastor</label>
                    <input type="text" name="member_pastor" disabled={true}/>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col"> 
        </div>
      </div>
    </div>
  )
}