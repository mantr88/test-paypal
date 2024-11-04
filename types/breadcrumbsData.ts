interface IBreadcrumb {
  name: string;
  key: string;
}

export interface IBreadcrumbsData {
  isBreadcrumbsShown: boolean;
  breadcrumbs: IBreadcrumb[];
}
