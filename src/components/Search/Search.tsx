import {FormSearch} from "./form-search/FormSearch";
import s from './Search.module.scss'
import {User} from "./user/User";

export const Search = () => {

    return (
        <header className={s.header}>
            <div className={s.container}>
                <div className={s.row}>
                    <h1 className={s.title}>Movie Catalog</h1>
                    <FormSearch/>
                    <User />
                </div>
            </div>
        </header>
    )
}