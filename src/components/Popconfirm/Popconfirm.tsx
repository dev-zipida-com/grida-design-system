import './popconfirm.css'

import React from 'react'
import {
  AiFillCaretDown,
  AiFillCaretLeft,
  AiFillCaretRight,
  AiFillCaretUp,
  AiOutlineCheckCircle as SuccessIcon,
  AiOutlineCloseCircle as ErrorIcon,
  AiOutlineExclamationCircle as WarningIcon,
  AiOutlineInfoCircle as InfoIcon,
} from 'react-icons/ai'

import { Button } from '../Button'

/**
 * Popconfirm 컴포넌트의 props입니다.
 */
export interface PopconfirmProps {
  /**
   * cancel에 표시될 텍스트입니다.
   * 기본값은 Cancel입니다.
   */
  cancelText?: string
  /**
   * Popconfirm의 제목 앞 아이콘 사용자 지정입니다.
   * 기본값은 \<ExclamationCircle /\>입니다.
   */
  icon?: React.ReactNode
  /**
   * ok에 표시될 텍스트입니다.
   * 기본값은 OK입니다.
   */
  okText?: string
  /**
   * cancel을 보여줄지 결정하는 속성입니다.
   * 기본값은 true입니다.
   */
  showCancel?: boolean
  /**
   * Popconfirm의 위치 설정입니다.
   * topRight, top, topLeft, rightTop, right, rightBottom, bottomLeft, bottom, bottomRight, leftTop, left, leftBottom중 하나입니다.
   * 기본값은 top입니다.
   */
  placement?:
    | 'topRight'
    | 'top'
    | 'topLeft'
    | 'rightTop'
    | 'right'
    | 'rightBottom'
    | 'bottomLeft'
    | 'bottom'
    | 'bottomRight'
    | 'leftTop'
    | 'left'
    | 'leftBottom'
  /**
   * Popconfirm의 상태를 나타냅니다.
   * warning, success, error, info 중 하나를 선택합니다.
   * 기본값은 warning입니다.
   */
  state?: 'warning' | 'success' | 'error' | 'info'
  /**
   * cancel을 보여줄지 결정하는 속성입니다.
   * 기본값은 true입니다.
   */
  title?: string
  onCancel?: (e?: React.MouseEvent<HTMLButtonElement>) => void
  onConfirm?: (e?: React.MouseEvent<HTMLButtonElement>) => void
}

const POPCONFIRM_TYPE = {
  warning: { color: '#F2AA52', icon: WarningIcon },
  success: { color: '#47B881', icon: SuccessIcon },
  error: { color: '#F26460', icon: ErrorIcon },
  info: { color: '#8C3EFF', icon: InfoIcon },
} as const

/**
 * 작업에 대한 간단하고 간결한 확인 대화상자입니다.
 *
 * ## 언제 사용하나요?
 * - 사용자 확인을 요청하는 데 사용되는 간단하고 간결한 대화상자입니다.
 * - confirm 모달 대화 상자와의 차이점은 정적으로 팝업되는 전체 화면 확인 모달보다 더 가볍다는 점입니다.
 *
 * ```js
 * import { Popconfirm } from "grida";
 * ```
 */
export default function Popconfirm({
  cancelText = 'Cancel',
  icon,
  okText = 'OK',
  showCancel = true,
  placement = 'top',
  state = 'warning',
  title,
  onCancel,
  onConfirm,
  ...restProps
}: PopconfirmProps) {
  const popconfirmType = POPCONFIRM_TYPE[state]

  const handleCancelClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onCancel?.(e)
  }

  const handleOKClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onConfirm?.(e)
  }

  return (
    <div {...restProps} className={`popconfirm`}>
      <section className={`popconfirm-content`}>
        {icon ? (
          icon
        ) : (
          <popconfirmType.icon className="popconfirm-content-icon" color={popconfirmType.color} />
        )}
        <span className="popconfirm-content-title">{title}</span>
      </section>
      <section className={`popconfirm-buttons`}>
        {showCancel && (
          <Button htmlType="button" buttonType="default" size="small" onClick={handleCancelClick}>
            <span>{cancelText}</span>
          </Button>
        )}
        <Button htmlType="button" buttonType="primary" size="small" onClick={handleOKClick}>
          <span>{okText}</span>
        </Button>
      </section>
      <div className={`popconfirm-caret popconfirm-caret-${placement}`}>
        {placement === 'top' || placement === 'topRight' || placement === 'topLeft' ? (
          <AiFillCaretDown color="#fff" />
        ) : placement === 'rightTop' || placement === 'right' || placement === 'rightBottom' ? (
          <AiFillCaretLeft color="#fff" />
        ) : placement === 'bottom' || placement === 'bottomLeft' || placement === 'bottomRight' ? (
          <AiFillCaretUp color="#fff" />
        ) : (
          <AiFillCaretRight color="#fff" />
        )}
      </div>
    </div>
  )
}
