// Publish as a CloudFront Function on viewer-request to return HTTP 301s.
// Legal pages and /pay checkout paths are deliberately not mapped.
var legacy = {
  '/acosign': true, '/services': true, '/slack-integration': true,
  '/salesforce-integration': true, '/hubspot-integration': true,
  '/razorpay-integration': true, '/stripe-integration': true,
  '/googledrive-integration': true, '/onedrive-integration': true,
  '/trust-security': true, '/e-signature-legality': true,
  '/teams-integration': true
};
function handler(event) {
  var request = event.request;
  var uri = request.uri.toLowerCase().replace(/\/+$/, '') || '/';
  if (legacy[uri]) return {
    statusCode: 301, statusDescription: 'Moved Permanently',
    headers: { location: { value: 'https://www.acolead.com/' }, 'cache-control': { value: 'public, max-age=3600' } }
  };
  return request;
}
