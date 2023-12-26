import { t } from 'i18next';

console.log(t('home'));

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