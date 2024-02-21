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
            img: videoRoll,
            url: 'https://videoroll.netlify.app'
        },
        {
            name: 'Light Ruler',
            tag: 'Canvas',
            img: lightRuler,
            url: 'https://github.com/gxy5202/light-ruler'
        },
        {
            name: 'parcel-namer-hashless',
            tag: 'parcel plugin',
            img: parcel,
            url: "https://www.npmjs.com/package/parcel-namer-hashless"
        },
        {
            name: 'UE Helper',
            tag: 'Browser Extension',
            img: uehelper,
            url: "https://chromewebstore.google.com/detail/ue-helper/mkjblagjddaejickpddjeadifkeagaoo?hl=zh-CN"
        },
        {
            name: 'zindex-controller',
            tag: 'Javascript',
            img: uehelper,
            url: "https://github.com/gxy5202/zIndexController"
        },
        {
            name: 'Astro blog',
            tag: 'Astro, React',
            img: uehelper,
            url: "https://github.com/gxy5202/gomi"
        }
    ]
}