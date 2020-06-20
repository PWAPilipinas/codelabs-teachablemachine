import { router } from '../../hemlo/hemlo-utils.js';

export const view = "views/home/home.view.html";
export const controller = {
    onInit() {
    },
    
    onCreate() {
    },

    startTour() {
        router.navigate('tour');
    },

    shareApp() {
        // Place Web Share API
        console.log('Add an interaction to shareApp() method');
    }
};
