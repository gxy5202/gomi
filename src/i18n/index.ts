import i18next from 'i18next';

export default async function initI18n() {
    return i18next.init({
        lng: 'en', // if you're using a language detector, do not define the lng option
        debug: true,
        resources: {
            en: {
                translation: {
                    "home": "Home",
                    'blog': 'Blog',
                    'project': 'Project',
                    'about': 'About'
                }
            },
            zh: {
                translation: {
                    "home": "首页",
                    'blog': '博客',
                    'project': '项目',
                    'about': '关于'
                }
            }
        }
    });
}
