import ReactDom from 'react-dom';
import App from './App';
import './components/reset.css';
import './components/style.css'

const DrivenPlus = App ();
ReactDom.render (DrivenPlus, document.querySelector('.root'));
