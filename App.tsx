import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div className="main-content">
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" />
      <div className="loginBody">
        <div className="loginBox">
          <h2>Entrar</h2>
          <form>
            <div className="inputBox">
              <input
                type="email"
                placeholder="Email ou Número de telefone"
              ></input>
            </div>
            <div className="inputBox">
              <input type="password" placeholder="Senha"></input>
            </div>

            <div>
              <button className="submit">Entrar</button>
            </div>
          </form>
        </div>

        <div className="support">
          <div className="remember">
            <span>
              <input className="checkBox" type="checkbox"></input>
              <span>Lembre-se de mim</span>
            </span>
          </div>
          <div className="help">
            <a href="#">Precisa de ajuda?</a>
          </div>
        </div>
        <div className="sign_up">
          <p>
            Novo por aqui? <a href="#">Assine agora.</a>
          </p>
        </div>
        <div className="terms">
          <p>
            Esta página é protegida pelo Google reCAPTCHA para garantir que você
            não é um robô. <a href="#">Saiba mais</a>
          </p>
        </div>
      </div>
    </div>
  );
}
