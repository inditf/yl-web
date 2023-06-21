import './style.less';
import TokenProvider from "./provider/tokenProvider";
import Routes from './router/Routers';

function App() {
  return (
    <div className="app">
      <TokenProvider >
        <Routes />
      </TokenProvider>
    </div>
  );
}

export default App;
