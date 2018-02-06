import 'Globals';
import ReactDOM from 'react-dom';
import 'Objs/index';
import 'Widgets/index';
import App from 'App';
import 'config/scrivito';
import 'config/scrivitoContentBrowser';

const application = document.getElementById('application');
if (application) {
  ReactDOM.render(<App />, application);
}
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag(‘js’, new Date());
gtag(‘config’, ‘UA-528505-17’, { ‘anonymize_ip’: true });