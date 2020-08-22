import React from 'react';
import { IntlProvider } from 'react-intl';
import messages_es from "./translations/es.json";
import messages_en from "./translations/en.json";


const messages = {
    'es': messages_es,
    'en': messages_en
};
let language = navigator.language.split(/[-_]/)[0];  // language without region code

const Context = React.createContext();

class IntlProviderWrapper extends React.Component {
    constructor(...args) {
        super(...args);
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
        this.state = {
            locale: language,
            messages: messages[language],
            handleLanguageChange: this.handleLanguageChange
        };
    }

    handleLanguageChange(language) {
        this.setState({
            locale: language,
            messages: messages[language]
        });
    }

    render() {
        const { children } = this.props;
        const { locale, messages } = this.state; 
        return (
            <Context.Provider value={this.state}>
                <IntlProvider key={locale} locale={locale} messages={messages} defaultLocale="en">
                    { children }
                </IntlProvider>
            </Context.Provider>
        );
    }
}

export { IntlProviderWrapper, Context as IntlContext };