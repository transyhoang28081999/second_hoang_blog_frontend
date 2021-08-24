import React from 'react';
import {Button} from '../structure/Structure';
import styled from 'styled-components';

const PaginationArea = styled.div`
    clear: both;
    & Button{
        margin: 0px 30px 15px 30px;
    }
`;

function Pagination({onChangePage, meta}) {
    const totalPage = Math.ceil(meta.total/meta.perPage);
    return (
        <PaginationArea>
            <Button
                disabled={meta.currentPage <= 1}
                onClick={() => onChangePage(meta.currentPage - 1)}
                background={meta.currentPage <= 1 ? "black": ""}>Previous</Button>
            <Button
                disabled={meta.currentPage >= totalPage}
                onClick={() => onChangePage(meta.currentPage + 1)}
                background={meta.currentPage >= totalPage ? "black":""}>Next</Button>
        </PaginationArea>
    );
}
export default Pagination;