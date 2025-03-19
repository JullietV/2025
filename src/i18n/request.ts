import {getRequestConfig} from 'next-intl/server';
// Importamos directamente los mensajes
import esMessages from '../messages/es.json';
import enMessages from '../messages/en.json';

const messages = {
  es: esMessages,
  en: enMessages
};

export default getRequestConfig(async ({locale}) => {
  // Para debugging
  console.log('Current locale:', locale);
  
  const activeLocale = locale || 'es';
  
  if (!messages[activeLocale as keyof typeof messages]) {
    console.error(`No messages found for locale: ${activeLocale}`);
    // Fallback a español si no encontramos el idioma
    return {
      locale: 'es',
      messages: messages.es,
      timeZone: 'Europe/Madrid'
    };
  }

  return {
    locale: activeLocale,
    messages: messages[activeLocale as keyof typeof messages],
    timeZone: 'Europe/Madrid'
  };
}); 