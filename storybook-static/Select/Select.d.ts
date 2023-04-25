import React from 'react';
type OptionType = {
    label: string;
    value: string;
};
/**
 * Select 컴포넌트의 props입니다.
 */
export interface SelectProps {
    /**
     * 해당 컴포넌트가 그려질 때 최초로 포커스를 획득하는지 여부로 사용가능합니다.
     * 기본 값은 false입니다.
     */
    autoFocus?: boolean;
    /**
     * 기본적으로 첫 번째 옵션을 활성화할지 여부입니다.
     * 기본 값은 true입니다.
     */
    defaultActiveFirstOption: boolean;
    /**
     * 초기 선택 옵션입니다.
     */
    defaultValue?: OptionType;
    /**
     * 비활성화 여부 선택입니다.
     * 기본값은 false입니다.
     */
    disabled?: boolean;
    /**
     * 슬라이더의 값입니다.
     * range가 false이면 number를 사용합니다.
     * range가 true이면 [number, number]를 사용합니다.
     * 기본 값은 0 | [0, 0]입니다.
     */
    options?: OptionType[];
    /**
     * select box의 상태를 설정할 수 있습니다.
     * 기본 값은 default 입니다.
     */
    status?: 'default' | 'error' | 'warning';
    /**
     * select box의 크기를 정할 수 있습니다.
     * 기본 값은 middle 입니다.
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * select 값이 변경될 때마다 호출됩니다.
     */
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
/**
 * 컴포넌트를 선택하여 옵션에서 값을 선택합니다.
 *
 * ## 언제 사용하나요?
 * - 선택 항목을 표시하는 드롭다운 메뉴 - 기본 select 태그 요소의 우아한 대안입니다.
 * - 비슷한 컴포넌트인 Radio는 총 옵션 수가 적을 때(5개 미만) 사용하는 것이 좋습니다.
 *
 * ```js
 * import { Select } from "grida";
 * ```
 */
export default function Select({ autoFocus, defaultActiveFirstOption, defaultValue, disabled, options, status, size, onChange, }: SelectProps): JSX.Element;
export {};
//# sourceMappingURL=Select.d.ts.map