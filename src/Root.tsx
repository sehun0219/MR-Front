import { RecoilRoot } from 'recoil';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';

const Root = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  );
};

export default Root;
