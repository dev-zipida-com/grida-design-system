import React from 'react';
export interface BreadcrumbItemProps {
    url?: string;
    name?: string;
    icon?: React.ReactNode;
    index?: number;
    isLast?: boolean;
    separator?: string;
}
export default function BreadcrumbItem({ url, name, icon, separator, index, isLast, }: BreadcrumbItemProps): JSX.Element;
//# sourceMappingURL=BreadcrumbItem.d.ts.map