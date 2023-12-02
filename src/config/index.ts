import { t } from 'i18next';

console.log(t('home'));

export function getRouter() {
    return {
        Home: {
            name: 'home',
            path: ''
        },
        Blog: {
            name: 'blog',
            path: 'bloglist/'
        },
        Project: {
            name: 'project',
            path: 'projectlist/'
        },
        About: {
            name: 'about',
            path: 'about/'
        }
    }
}