import { useState } from 'react';
import Link from 'next/link';
import { TextField, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import { AuthCard } from '../../components';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setError('teste');
  };

  return (
    <AuthCard title="Cadastra-se">
      <form onSubmit={handleSubmit}>
        {error ? (
          <Alert className="alert" severity="error">
            <span>{error}</span>
          </Alert>
        ) : null}
        <TextField
          name="username"
          type="text"
          value={username}
          label="Nome"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          name="email"
          type="email"
          value={email}
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          name="password"
          type="password"
          value={password}
          label="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          name="password_confirmation"
          type="password"
          value={passwordConfirmation}
          label="Repetir Senha"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <Button variant="contained" color="primary">
          Entrar
        </Button>
      </form>
      <div className="links">
        <Link href="login">Entrar</Link>
        <Link href="recoverPassword">Recuperar Senha</Link>
      </div>
    </AuthCard>
  );
};

export default Login;
