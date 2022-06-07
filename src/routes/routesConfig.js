import HomePage from "../pages/HomePage";
import CharactersPage from "../pages/CharactersPage";
import NotFoundPage from "../pages/NotFoundPage";
import PersonPage from "../pages/PersonPage/PersonPage";
import FavoritePage from "../pages/FavoritePage";
import SearchPage from "../pages/SearchPage";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const routesConfig = [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/characters',
        element: <CharactersPage/>
    },
    {
        path: '/characters/:id',
        element: <PersonPage/>
    },
    {
        path: '/favorites',
        element: <FavoritePage/>
    },
    {
        path: '/search',
        element: <SearchPage/>
    },
    {
        path: '/fail',
        element: <ErrorMessage/>
    },
    {
        path: '/not-found',
        element: <NotFoundPage/>
    },
    {
        path: '*',
        exact: false,
        element: <NotFoundPage/>
    }
]

export default routesConfig;