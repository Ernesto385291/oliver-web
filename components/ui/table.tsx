"use client";

import { Fragment, useEffect, useState } from "react";

import {
  getCoreRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";

import type {
  ColumnDef,
  Row,
  Table as ReactTable,
  PaginationState,
} from "@tanstack/react-table";

import { buttonVariants } from "@/components/ui/button";

import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ReactTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  renderSubComponent?: (props: { row: Row<T> }) => React.ReactElement;
  pageIndex?: number;
  pageSize?: number;
  pageCount?: number;
  onPaginationChange?: (pagination: PaginationState) => void;
  className?: string;
}

const Table = ({
  data,
  columns,
  renderSubComponent,
  pageIndex,
  pageSize,
  pageCount,
  onPaginationChange,
  className,
}: ReactTableProps<any>) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: pageIndex ?? 0,
    pageSize: pageSize ?? 15,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    pageCount,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
  });

  useEffect(() => {
    if (onPaginationChange) {
      onPaginationChange(pagination);
    }
  }, [pagination, onPaginationChange]);

  return (
    <div
      className={cn(
        "flex flex-col bg-white px-6 py-2 border border-[#dfe6e9] rounded-lg text-[#636E72]",
        className
      )}
    >
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          <div className="overflow-hidden">
            <table className="Table min-w-full">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        className="text-sm text-left font-normal py-4"
                        key={header.id}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>

              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <Fragment key={row.id}>
                    <tr
                      className={cn({
                        "bg-gray-50 transition-colors": row.getIsExpanded(),
                      })}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td
                          style={{
                            width: cell.column.getSize(),
                          }}
                          className="text-sm font-light text-black py-[15px]"
                          key={cell.id}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>

                    {renderSubComponent ? (
                      <tr key={row.id + "-expanded"}>
                        <td colSpan={columns.length}>
                          {renderSubComponent({ row })}
                        </td>
                      </tr>
                    ) : null}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>

          {/* <Pagination table={table} /> */}
        </div>
      </div>
    </div>
  );
};

function Pagination<T>({
  table,
}: React.PropsWithChildren<{
  table: ReactTable<T>;
}>) {
  return (
    <div className="flex items-center gap-2">
      <div
        onClick={() => table.setPageIndex(0)}
        aria-disabled={!table.getCanPreviousPage()}
        className={buttonVariants({
          size: "sm",
          variant: "ghost",
          className: "text-white hover:bg-slate-500",
        })}
      >
        <ChevronsLeft className="h-5 w-5" />
      </div>

      <div
        onClick={() => table.previousPage()}
        aria-disabled={!table.getCanPreviousPage()}
        className={buttonVariants({
          size: "sm",
          variant: "ghost",
          className: "text-white hover:bg-slate-500",
        })}
      >
        <ChevronLeft className="h-5 w-5" />
      </div>

      <div
        onClick={() => table.nextPage()}
        aria-disabled={!table.getCanNextPage()}
        className={buttonVariants({
          size: "sm",
          variant: "ghost",
          className: "text-white hover:bg-slate-500",
        })}
      >
        <ChevronRight className="h-5 w-5" />
      </div>

      <div
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        aria-disabled={!table.getCanNextPage()}
        className={buttonVariants({
          size: "sm",
          variant: "ghost",
          className: "text-white hover:bg-slate-500",
        })}
      >
        <ChevronsRight className="h-5 w-5" />
      </div>

      <span className="flex items-center gap-1 text-sm">
        <div>Page</div>

        <strong>
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </strong>
      </span>
    </div>
  );
}

export { Table };
