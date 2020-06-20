# Teachable Machine + Progressive Web App

[https://github.com/andresitodeguzman/hemlo](https://github.com/andresitodeguzman/hemlo)

## Create a Manifest File

[https://app-manifest.firebaseapp.com/](https://app-manifest.firebaseapp.com/)

## Service Worker

```tsx
<script>
        // Check that service workers are supported
        if ('serviceWorker' in navigator) {
        // Use the window load event to keep the page load performant
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js');
            });
        }
    </script>
```

### Web Share API

Add web share API in home

```tsx
if('share' in navigator) {
  const shareData = {
      title: 'National Art Gallery Virtual Tour',
      text: 'Join me as I explore the National Art Gallery.',
      url: 'https://github.com/pwa-pilipinas/codelabs-teachablemachine',
  };
	navigator.share(shareData);
} else {
  alert('Share is not yet available in your device.');
}
```

### Add data

Add the details in view/tour/index.js

```tsx
data: [
        {
            name: 'Spoliarium',
            description: 'The Spoliarium (often misspelled Spolarium) is a painting by Filipino painter Juan Luna. The painting was submitted by Luna to the Exposición Nacional de Bellas Artes in 1884 in Madrid, where it garnered the first gold medal (out of three).',
            url: 'https://www.nationalmuseum.gov.ph/nationalmuseumbeta/Collections/Spoliarium.html'
        },
        {
            name: 'Retablo',
            description: 'It is an upright panel, intricately carved and highly decorated. Its wooden frame contains ledges and panels behind and above the altar. The main feature of old Roman Catholic churches in the country is the retablo, the altarpiece.',
            url: 'https://www.nationalmuseum.gov.ph/nationalmuseumbeta/Collections/Retablo.html'
        },
        {
            name: 'Bust of Ricardo Carnicero',
            description: 'Captain Ricardo Carnicero is the Spanish commandant of Dapitan when Rizal was banished in the city. The sculpture is made out of clay.',
            url: 'https://rizal.raphaelmarco.com/works/view/bust-of-dr-ricardo-carnicero'
        }
    ],
```

Add share target in shareResult

```tsx
if (this.currentData) {
            if('share' in navigator) {
                const shareData = {
                    title: `I've seen ${this.currentData.name || 'a work of art'} at the National Art Gallery!`,
                    text: `${this.currentData.name} is such a wonderful piece of art. Hope you can take a look at it in personal as well!`,
                    url: 'https://github.com/pwa-pilipinas/codelabs-teachablemachine',
                };
                navigator.share(shareData);
            } else {
                alert('Share is not yet available in your device.');
            }
        }
```