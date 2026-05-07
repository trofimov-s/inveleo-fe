import { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [response, setResponse] = useState<string>(null);

  useEffect(() => {
    fetch('http://localhost:3000')
      .then((res) => res.text())
      .then((res) => setResponse(res));
  }, []);

  return <h1>{response}</h1>;
};

export default App;
