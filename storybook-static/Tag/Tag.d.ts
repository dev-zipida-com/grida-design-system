import React from 'react';
/**
 * Tag 컴포넌트의 props입니다.
 */
export interface TagProps {
    /**
     * Tag를 닫을 수 있는지 여부입니다.
     */
    closable?: boolean;
    /**
     * 사용자 정의 닫기 아이콘입니다.
     * closable이 true일때만 사용가능합니다.
     */
    closeIcon?: React.ReactNode;
    /**
     * 태그 색상을 지정할 수 있는 속성입니다.
     */
    color?: string;
    /**
     * 태그 안 내용을 지정할 수 있는 속성입니다.
     * type 속성보다 우선입니다.
     */
    text?: string;
    /**
     * 사용자 정의 아이콘입니다.
     */
    icon?: React.ReactNode;
    /**
     * Tag 스타일의 타입입니다.
     * 옵션: default, primary, error, success, warning processing입니다.
     * 기본값은 default입니다.
     */
    type?: 'default' | 'primary' | 'error' | 'success' | 'warning' | 'processing';
    /**
     * Tag가 닫힐 때 호출되는 콜백 함수입니다.
     */
    onClose?: (e: React.MouseEvent) => void;
    /**
     * Tag의 크기입니다.
     * 옵션: small, medium, large, xlarge입니다.
     * 기본 값은 small입니다.
     */
    size?: 'small' | 'medium' | 'large';
}
/**
 * 분류 또는 마크업을 위한 태그입니다.
 *
 * ## 언제 사용하나요?
 * - 차원 또는 속성별로 태그를 지정하는 데 사용할 수 있습니다.
 * - 분류할 때 사용할 수 있습니다.
 *
 * ```js
 * import { Tag } from "grida";
 * ```
 */
export default function Tag({ closable, closeIcon, color, text, icon, type, onClose, size, }: TagProps): JSX.Element;
//# sourceMappingURL=Tag.d.ts.map