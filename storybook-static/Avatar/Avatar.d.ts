/**
 * Avatar 컴포넌트의 props 입니다.
 */
export interface AvatarProps {
    /**
  이미지를 설명하는 대체 텍스트를 정의하는 속성입니다.
  */
    alt: string;
    /**
  왼쪽과 오른쪽 사이의 글자 유닛 거리입니다.
  */
    gap?: number;
    /**
  아이콘 아바타를 위한 커스텀 아이콘 타입입니다.
  */
    icon?: React.ReactNode;
    /**
  아바타의 모양입니다. 원 모양 또는 사각형 모양이 될 수 있습니다.
  */
    shape?: 'circle' | 'square';
    /**
  아바타의 크기입니다. 숫자, "large" 또는 "small" 문자열 또는 다른 화면 해상도에 대한 크기 값을 가진 객체일 수 있습니다.
  */
    size?: number | 'large' | 'small' | 'default' | {
        xs: number;
        sm: number;
        md: number;
        lg: number;
    };
    /**
  이미지 아바타 또는 이미지 요소에 대한 주소입니다.
  */
    src?: string | React.ReactNode;
    /**
  서로 다른 화면 해상도에 대해 사용할 소스 목록입니다.
  */
    srcSet?: string;
    /**
  이미지를 드래그할 수 있는지 여부입니다.
  */
    draggable?: boolean | 'true' | 'false';
    /**
  CORS 설정 속성입니다. "anonymous", "use-credentials", 또는 빈 문자열이 될 수 있습니다.
  */
    crossOrigin?: 'anonymous' | 'use-credentials' | '';
    /**
  이미지 로드 오류시 핸들러입니다. 기본 대체 동작을 방지하려면 false를 반환합니다.
  */
    onError?: () => boolean;
}
/**
 * 아바타는 사람이나 사물을 표현하는 데 사용할 수 있습니다.
 *
 * ## 언제 사용하나요?
 * - 이미지, 아이콘 또는 문자가 필요할 때 사용할 수 있습니다.
 *
 * ```js
 * import { Avatar } from "grida";
 * ```
 */
export default function Avatar({ alt, gap, icon, shape, size, src, srcSet, draggable, crossOrigin, onError, }: AvatarProps): JSX.Element;
//# sourceMappingURL=Avatar.d.ts.map