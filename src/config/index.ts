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