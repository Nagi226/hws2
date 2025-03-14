import React, {ChangeEvent, SyntheticEvent} from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    //const lastPage = 10 // пишет студент // вычислить количество страниц
    const lastPage = Math.ceil(totalCount/itemsCountForPage) // пишет студент // вычислить количество страниц
    const onChangeCallback = (event: any, page: number) => {
        // пишет студент
        let countPerPage = itemsCountForPage;
        if (typeof(event) != 'object') {
            countPerPage = event; // 4 / 7 / 10
        }
        onChange(page, countPerPage)
    }

    const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {//event: ChangeEvent<HTMLSelectElement>
        // пишет студент
        onChangeCallback(event, page)
    }

    return (
        <div className={s.pagination}>
            <Pagination shape="rounded" color="primary"
                        id={id + '-pagination'}
                        sx={{
                            // стили для Pagination // пишет студент
                        }}
                        page={page}
                        count={lastPage}
                        onChange={onChangeCallback}
                        hideNextButton
                        hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect style={{width: 28, height: 24}}
                         id={id + '-pagination-select'}
                         value={itemsCountForPage}
                         options={[
                             {id: 4, value: 4},
                             {id: 7, value: 7},
                             {id: 10, value: 10},
                         ]}
                         onChangeOption={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination