# JulEvents website

## Open the website
Open the `julevents` folder in VS Code and use Live Server on `index.html`.

## Change the photos
All photos are LOCAL in the `images` folder. Replace each JPG with your own photo using the SAME filename:

- `hero.jpg` — large home-page background
- `about.jpg` — About section
- `romantic.jpg`, `family.jpg`, `special.jpg` — experience cards
- `gallery-1.jpg` through `gallery-4.jpg` — photo gallery

You can also change the filenames by updating the `src` attributes in `index.html` or the `.hero` background in `css/style.css`.

## Edit the design
Edit `css/style.css`. The CSS is expanded into readable lines. Change the color variables at the top of the file.

## Languages
Translations and language switching are in `js/main.js`.

## Booking form
Set `WHATSAPP_NUMBER` near the top of `js/main.js` to the business phone number, with country code and digits only (no `+`, spaces or dashes). Submitting the form opens a WhatsApp message; customers must press Send there. There is no backend or automatic booking confirmation.

The supplied images are PLACEHOLDERS, not real JulEvents event photographs.
