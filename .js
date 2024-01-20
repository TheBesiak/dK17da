// Sprawdź, czy ciasteczko zostało już ustawione
if (document.cookie.indexOf('alertShown=true') === -1) {
  // Jeśli nie, wyświetl alert
  window.alert("MargoVanish by Besiak - W razie problemów pisać na dc: besiak06");

  // Ustaw ciasteczko, że alert został już wyświetlony
  document.cookie = 'alertShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
}
