import lightRuler from '../assets/images/light-ruler.png';
import videoRoll from '../assets/images/videoroll.png';
import uehelper from '../assets/images/uehelper.png';
import parcel from '../assets/images/parcel.png';

export function getRouter() {
    return {
        Home: {
            name: 'Home',
            path: ''
        },
        Blog: {
            name: 'Blog',
            path: 'blog'
        },
        Project: {
            name: 'Portfolio',
            path: 'portfolio/'
        },
        About: {
            name: 'About',
            path: 'about/'
        }
    }
}

export const PER_PAGE_NUM = 6;

export function getProjects() {
    return [
        {
            name: 'Video Roll',
            tag: 'Browser Extension',
            img: videoRoll
        },
        {
            name: 'Light Ruler',
            tag: 'Canvas',
            img: lightRuler
        },
        {
            name: 'parcel-namer-hashless',
            tag: 'parcel plugin',
            img: parcel
        },
        {
            name: 'UE Helper',
            tag: 'Browser Extension',
            img: uehelper
        },
        {
            name: 'Vue blog',
            tag: 'Vue3, Quasar',
            img: uehelper
        },
        {
            name: 'Astro blog',
            tag: 'Astro, React',
            img: uehelper
        }
    ]
}