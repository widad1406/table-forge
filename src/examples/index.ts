import type { ComponentType } from "react";

import Minimalist, { meta as metaMinimalist } from "./tables/Minimalist.mdx";
import BasicBordered, {
  meta as metaBasicBordered,
} from "./tables/BasicBordered.mdx";
import StripedRows, { meta as metaStripedRows } from "./tables/StripedRows.mdx";
import Compact, { meta as metaCompact } from "./tables/Compact.mdx";
import ResponsiveCardsOnMobile, {
  meta as metaResponsive,
} from "./tables/ResponsiveCardsOnMobile.mdx";
import WithActions, { meta as metaWithActions } from "./tables/WithActions.mdx";
import Sortable, { meta as metaSortable } from "./tables/Sortable.mdx";
import TopControlsSortable, {
  meta as metaTopControls,
} from "./tables/TopControlsSortable.mdx";
import Filterable, { meta as metaFilterable } from "./tables/Filterable.mdx";
import Pagination, { meta as metaPagination } from "./tables/Pagination.mdx";

export type ExampleGroup =
  | "Basic"
  | "Sorting"
  | "Filtering"
  | "Pagination"
  | "Advanced";

export interface ExampleMeta {
  id: string;
  title: string;
  description: string;
  group: ExampleGroup;
}

export interface ExampleItem extends ExampleMeta {
  Component: ComponentType<any>;
  codePath: string;
}

const validateMeta = (meta: any, componentName: string): ExampleMeta => {
  const required = ["id", "title", "description", "group"];
  for (const field of required) {
    if (!meta[field]) {
      throw new Error(`Missing required field '${field}' in ${componentName}`);
    }
  }
  return meta as ExampleMeta;
};

export const examples: ExampleItem[] = [
  {
    ...validateMeta(metaMinimalist, "Minimalist"),
    Component: Minimalist,
    codePath: metaMinimalist.codePath,
  },
  {
    ...validateMeta(metaBasicBordered, "BasicBordered"),
    Component: BasicBordered,
    codePath: metaBasicBordered.codePath,
  },
  {
    ...validateMeta(metaStripedRows, "StripedRows"),
    Component: StripedRows,
    codePath: metaStripedRows.codePath,
  },
  {
    ...validateMeta(metaCompact, "Compact"),
    Component: Compact,
    codePath: metaCompact.codePath,
  },
  {
    ...validateMeta(metaResponsive, "ResponsiveCardsOnMobile"),
    Component: ResponsiveCardsOnMobile,
    codePath: metaResponsive.codePath,
  },
  {
    ...validateMeta(metaWithActions, "WithActions"),
    Component: WithActions,
    codePath: metaWithActions.codePath,
  },
  {
    ...validateMeta(metaSortable, "Sortable"),
    Component: Sortable,
    codePath: metaSortable.codePath,
  },
  {
    ...validateMeta(metaTopControls, "TopControlsSortable"),
    Component: TopControlsSortable,
    codePath: metaTopControls.codePath,
  },
  {
    ...validateMeta(metaFilterable, "Filterable"),
    Component: Filterable,
    codePath: metaFilterable.codePath,
  },
  {
    ...validateMeta(metaPagination, "Pagination"),
    Component: Pagination,
    codePath: metaPagination.codePath,
  },
];
