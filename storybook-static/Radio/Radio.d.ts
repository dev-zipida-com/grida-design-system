import React from 'react';
/**
 * Radio 컴포넌트의 props 입니다.
 */
export interface RadioProps {
    /** 컴포넌트가 마운트될 때 포커스를 받을지 여부입니다. */
    autoFocus?: boolean;
    /**  라디오가 선택되어 있는지 여부를 지정합니다. */
    checked?: boolean;
    /** 라디오를 비활성화합니다. */
    disabled?: boolean;
    /** 선택 여부를 결정하기 위해 값에 따라 지정합니다. */
    value?: any;
    /** 라디오 버튼의 모습을 지정합니다. */
    type: 'radio' | 'button';
    /** 라디오 버튼의 크기를 지정합니다. */
    size: 'sm' | 'md' | 'lg';
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    children?: React.ReactNode;
    name?: string;
}
/**
 * 라디오 컴포넌트입니다.
 *
 * ## 언제 사용하나요?
 * - 여러 옵션 중에서 단일 상태를 선택하는 데 사용됩니다.
 * - Select와의 차이점은 라디오는 사용자에게 표시되며 선택 항목을 쉽게 비교할 수 있으므로 너무 많지 않아야 한다는 것입니다.
 *
 * ```js
 * import { Radio } from "grida";
 * ```
 */
export default function Radio({ autoFocus, checked, name, disabled, value, children, type, size, }: RadioProps): JSX.Element;
//# sourceMappingURL=Radio.d.ts.map