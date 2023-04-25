/**
 * Button 컴포넌트의 props입니다.
 */
export interface ButtonProps {
    /** 버튼 너비를 부모 요소의 너비에 맞추는 옵션 */
    block?: boolean;
    danger?: boolean;
    disabled?: boolean;
    href?: string;
    htmlType?: 'submit' | 'button' | 'reset';
    icon?: React.ReactNode;
    loading?: boolean | {
        delay: number;
    };
    shape?: 'default' | 'circle' | 'round';
    size?: 'large' | 'middle' | 'small';
    target?: string;
    buttonType?: 'default' | 'primary' | 'ghost' | 'outline' | 'dashed' | 'link' | 'text';
    onClick?: (event: React.MouseEvent) => void;
    children?: React.ReactNode;
}
/**
 * 버튼 컴포넌트입니다.
 *
 * ```js
 * import { Button } from "grida";
 * ```
 */
export default function Button({ block, danger, disabled, htmlType, icon, shape, size, buttonType, onClick, children, }: ButtonProps & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>): JSX.Element;
//# sourceMappingURL=Button.d.ts.map