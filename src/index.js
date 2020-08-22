import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {IntlProvider} from "react-intl";
import messages_es from "./translations/es.json";
import messages_en from "./translations/en.json";


const messages = {
    'es': messages_es,
    'en': messages_en
};
const language = navigator.language.split(/[-_]/)[0];  // language without region code

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={language} key={language} messages={messages[language]} defaultLocale="en">
        <App/>
    </IntlProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);
