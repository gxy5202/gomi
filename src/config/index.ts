import { t } from 'i18next';

export const Router = {
    Home: {
       name: t('home'),
       path: ''
    },
    Blog: {
        name: t('blog'),
        path: 'bloglist/'
    },
    Project: {
        name: t('project'),
        path: 'projectlist/'
    },
    About: {
        name: t('about'),
        path: 'about/'
    }  
}