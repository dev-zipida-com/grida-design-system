import React from 'react';
/**
 * Checkbox 컴포넌트의 props입니다.
 */
export interface CheckboxProps {
    /** 컴포넌트가 마운트 될 때 포커스를 받는지 여부 */
    autoFocus?: boolean;
    /** 체크박스가 선택되어 있는지 여부를 지정합니다. */
    checked?: boolean;
    /** 체크박스를 비활성화하는 경우 */
    disabled?: boolean;
    /** 체크박스의 중간 선택 상태 */
    indeterminate?: boolean;
    /** 상태가 변경될 때 트리거되는 콜백 함수 */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    children?: React.ReactNode;
    name?: string;
}
/**
 * 체크박스 컴포넌트입니다.
 *
 * ## 언제 사용하나요?
 * - 여러 옵션에서 여러 값을 선택하는 데 사용됩니다.
 * - Switch는 상태 변경을 직접 트리거하지만, Checkbox는 상태를 변경된 것으로 표시하고 이를 제출해야 합니다.
 *
 * ```js
 * import { Checkbox } from "grida";
 * ```
 */
export default function Checkbox({ autoFocus, name, checked, disabled, children }: CheckboxProps): JSX.Element;
//# sourceMappingURL=Checkbox.d.ts.map