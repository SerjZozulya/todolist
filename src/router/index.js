import DialogsContainer from "../pages/Dialogs-container";
import { Products } from "../pages/Products";
import SingleTask from "../pages/SingleTask";
import AllTasks from "../pages/AllTasks";

export const routes = [
    {path: '/project', component: AllTasks, exact: true},
    {path: '/project/:id', component: SingleTask, exact: true}
]