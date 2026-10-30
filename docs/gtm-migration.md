# AcoLead GTM tracking setup

The website now loads Google Tag Manager only. Configure these existing tags in container `GTM-TMLR5PG4`; do not add the vendor snippets back to `public/index.html`.

## Existing vendor IDs

- Google Ads: `AW-18473532285`
- Meta Pixel: `1099743948850838`
- Microsoft Clarity: `r4w87ov5s2`
- Mixpanel project: `c8adf360786813ebcbdc0b2983d8b933`

## Data layer events

- `page_view`: all routes
- `demo_form_start`, `demo_form_submit`, `demo_thank_you_view`
- `whatsapp_click`, `phone_click`
- `pricing_view`, `module_page_view`
- `mixpanel_event`, `mixpanel_identify`, `mixpanel_profile`, `mixpanel_reset`

Map the events to existing vendor tags and triggers in GTM. The site does not push name, phone, company or email into the analytics data layer. `demo_form_submit` carries the campaign code, team-size and lead-volume bands, plus the follow-up route.

## Meta Conversions API

Deploy the CMS route `/api/meta-conversions` and set `META_PIXEL_ID`, `META_CONVERSIONS_ACCESS_TOKEN`, and the current `META_GRAPH_API_VERSION` on the server. Set `REACT_APP_META_CAPI_PROXY_URL` in the website build to that route's public URL. The route hashes email and phone server-side and returns a failure if it is not configured; a CAPI error does not block CRM lead capture. Qualified leads (sales team 5+ and 50+ new leads/month) use the `QualifiedDemo` event. Other demo submissions use `Lead`.

The website data layer is ready; vendor tags and secrets still require their respective GTM and deployment settings.
