import React from "react";
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const LoginComponent: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "admin" && password === "test") {
      history.push("/list");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <Card>
      <CardHeader title="Hello from Login page"></CardHeader>

      <CardContent>
        <form onSubmit={handleNavigation}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
            <TextField
              label="Username"
              margin="normal"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              margin="normal"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary">Login</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
