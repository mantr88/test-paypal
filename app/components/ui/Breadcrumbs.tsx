import React from "react";
import Link from "next/link";
import {IBreadcrumbsData} from "@/types/breadcrumbsData";
import Chevron from "./svgElements/Chevron";

interface BreadcrumbProps {
  data: IBreadcrumbsData;
  styles?: string;
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({data, styles}) => {
  if (!data.isBreadcrumbsShown) {
    return null;
  }

  return (
    <nav aria-label="breadcrumb">
      <ol className={`hidden text-s text-gray-800 md:flex ${styles}`}>
        {data.breadcrumbs.map((item, index) => (
          <li
            key={index}
            className="flex items-center"
          >
            {index > 0 && <Chevron className="size-[14px] rotate-[-90deg]" />}
            {item.key ?
              <Link
                href={item.key}
                className="ml-1"
              >
                <span className="text-grey-400 hover:text-gray-800 hover:underline">
                  {item.name}
                </span>
              </Link>
            : <span>{item.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
