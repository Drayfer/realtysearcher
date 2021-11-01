
import HomePage from "../Pages/HomePage"
import ListingPage from "../Pages/ListingPage/"
import DetailsHousePage from "../Pages/DetailsHousePage"

export const routes = [
    {path: '/', Components: HomePage},
    {path: '/home', Components: HomePage},
    {path: '/listing', Components: ListingPage},
    {path: '/details', Components: DetailsHousePage}
]