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
            path: 'bloglist'
        },
        Project: {
            name: 'Project',
            path: 'projectlist/'
        },
        About: {
            name: 'About',
            path: 'about/'
        }
    }
}

export const PER_PAGE_NUM = 4;

export function getProjects() {
    return [
        {
            name: 'Video Roll',
            tag: 'Browser Extension',
            img: videoRoll.src
        },
        {
            name: 'Light Ruler',
            tag: 'Canvas',
            img: lightRuler.src
        },
        {
            name: 'parcel-namer-hashless',
            tag: 'parcel plugin',
            img: parcel.src
        },
        {
            name: 'UE Helper',
            tag: 'Browser Extension',
            img: uehelper.src
        },
        {
            name: 'Vue blog',
            tag: 'Vue3, Quasar',
            img: uehelper.src
        },
        {
            name: 'Astro blog',
            tag: 'Astro, React',
            img: uehelper.src
        }
    ]
}