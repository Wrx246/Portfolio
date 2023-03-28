import Movies from '../gifs/giphy.gif'
import Animals from '../gifs/animals.gif'
import Todo from '../gifs/todo.gif'
import Chat from '../gifs/chat.gif'
import Forecast from '../gifs/forecast.gif'
import Collections from '../gifs/collections.gif'

export const projectItems = [
    {
        name: 'Collections',
        gif: Collections,
        link: 'https://web-collections.netlify.app',
        text: 'Collections web-application. Auth control, admin panel and other',
        tech: 'React|Redux|Express|PostreSQL|TS'
    },
    {
        name: 'Forecast',
        gif: Forecast,
        link: 'https://yourcityweatherapp.netlify.app',
        text: 'Forecast with geolocation.',
        tech: 'React|Sass'
    },
    {
        name: 'Todo',
        gif: Todo,
        link: 'https://todo-nextjs.netlify.app',
        text: 'Todo list for daily tasks.',
        tech: 'NextJS|React|CSS'
    },
    {
        name: 'Animals',
        gif: Animals,
        link: 'https://savelifelanding.netlify.app',
        text: 'Landing page for animals nursery.',
        tech: 'HTML|CSS'
    },
    {
        name: 'Movies',
        gif: Movies,
        link: 'https://yourfilmtv.netlify.app',
        text: 'Clone Imdb and Kinopoisk. Authentication control, trailers, score.',
        tech: 'React|Redux|Axios|Formik|CSS'
    },
    {
        name: 'Chat',
        gif: Chat,
        link: 'https://github.com/Wrx246/chat',
        text: 'Meet your friends and enjoy chat app.',
        tech: 'React|NodeJS|Socket.io|MongoDB|Sass|Axios'
    },
]