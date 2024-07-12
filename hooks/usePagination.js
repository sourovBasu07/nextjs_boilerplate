"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const usePagination = (initialData) => {
    const { replace } = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const currentPage = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 10;
    const totalPages = Math.ceil(initialData?.length / limit);
    const start = (currentPage - 1) * limit;
    const end = Math.min(currentPage * limit, initialData?.length);
    const paginatedData = initialData?.slice(start, end);
    const hasPreviousPage = start > 0;
    const hasNextPage = end < initialData?.length;

    const startPage = Math.min(Math.max(1, currentPage - 2), totalPages - 6);

    const pages = Array.from({ length: 7 }, (_, index) => startPage + index).filter((value => value > 0));

    const handlePageChange = (page) => {
        const params = new URLSearchParams(searchParams);

        params.set("page", page);
        replace(`${pathname}?${params.toString()}`);
    };

    const PaginationComponent = () => {
        return (
            <div className="flex items-center gap-10">
                <button disabled={!hasPreviousPage} className="" onClick={() => handlePageChange(currentPage - 1)}>&lt; Prev</button>
                <div className="flex gap-3">
                    {pages.map((page, index) => <button key={page} className={`w-10 h-10 ${page === currentPage ? "bg-primary3 text-white rounded-full" : "text-primary"}`} onClick={() => handlePageChange(page)}>{page}</button>)}
                </div>
                <button disabled={!hasNextPage} className="" onClick={() => handlePageChange(currentPage + 1)}>Next &gt;</button>
            </div>
        )
    }

    return { paginatedData, currentPage, limit, totalPages, hasPreviousPage, hasNextPage, PaginationComponent }
};

export default usePagination;