import { Pagination } from "react-bootstrap";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export function PaginationComponent(props: PaginationProps) {
    const pageLimit = 5;
    let startPage = Math.max(1, props.currentPage - Math.floor(pageLimit / 2));
    let endPage = Math.min(props.totalPages, startPage + pageLimit - 1);

    if (endPage === props.totalPages)
        startPage = Math.max(1, props.totalPages - pageLimit + 1);

    const handlePageClick = (page: number) => {
        if (page !== props.currentPage) 
            props.onPageChange(page);
    };

    return (
        <Pagination className="">
            <Pagination.First onClick={() => handlePageClick(1)} disabled={props.currentPage === 1} />
            <Pagination.Prev
                onClick={() => handlePageClick(props.currentPage - 1)}
                disabled={props.currentPage === 1}
            />

            {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
                const page = startPage + index;
                return (
                    <Pagination.Item
                        key={page}
                        active={page === props.currentPage}
                        onClick={() => handlePageClick(page)}
                    >
                        {page}
                    </Pagination.Item>
                );
            })}

            <Pagination.Next
                onClick={() => handlePageClick(props.currentPage + 1)}
                disabled={props.currentPage === props.totalPages}
            />
            <Pagination.Last onClick={() => handlePageClick(props.totalPages)} disabled={props.currentPage === props.totalPages} />

        </Pagination>
    );
}