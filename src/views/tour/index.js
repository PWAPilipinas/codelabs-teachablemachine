import { effects } from '../../hemlo/hemlo-utils.js';
export const view = "views/tour/tour.view.html";
export const controller = {
    closest: { className: null, probability: null },

    currentData: null,

    data: [],

    onInit() {
        init();
    },
    
    onCreate() {
    },

    async close() {
        await webcam.stop();
        window.location.replace('#!/');
    },

    serviceStarted() {
        effects.fadeOut(document.querySelector('.webcam-loading'));
        effects.fadeIn(document.querySelector('.info-container'));

    },

    predictionHandler(closest) {
        if(closest !== undefined) {
            if(closest.className !== this.closest.className) {
                this.closest = closest;
                // console.log(`new match: ${closest.className} ${closest.probability}`);
                const entry = this.data.find(e => {
                    if(e.name == closest.className) return e;
                });
                if(entry) {
                    this.currentData = entry;
                    document.querySelector('#result_name').innerText = entry.name;
                    document.querySelector('#result_description').innerText = entry.description;
                    effects.fadeOut(document.querySelector('.empty-result'));
                    effects.fadeIn(document.querySelector('.result'));
                }
            }
        }
    },

    shareResult() {
        // Add Web Share API here
        console.log('Add share target here');
    },

    moreInfo() {
        if (this.currentData.url) {
            window.location.replace(this.currentData.url);
        } else {
            alert('No additional information available');
        }
    },

    hideResult() {
        effects.fadeOut(document.querySelector('.result'));
        effects.fadeIn(document.querySelector('.empty-result'));
    }
};