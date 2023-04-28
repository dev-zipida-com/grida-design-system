import './progress.css'

import React, { useEffect, useState } from 'react'
import {
  AiOutlineCheckCircle as SuccessIcon,
  AiOutlineCloseCircle as ErrorIcon,
} from 'react-icons/ai'

/**
 * Progress 컴포넌트의 props입니다.
 */
export interface ProgressProps {
  /**
   * Progress의 진행률을 나타냅니다.
   * 기본값은 0입니다.
   */
  percent?: number
  /**
   * 진행률 값 및 상태 아이콘 표시 여부
   * 기본값은 false입니다.
   */
  showInfo?: boolean
  /**
   * 진행률 상태를 설정하는 옵션
   * default, success, error중 선택할 수 있습니다.
   * 기본값은 default입니다.
   */
  status?: 'default' | 'success' | 'error'
  /**
   * Progress Bar 색깔을 지정할 수 있습니다.
   */
  strokeColor?: string
  /**
   * Progress 타입을 선택할 수 있습니다.
   * line, circle 중 선택할 수 있습니다.
   * 기본값은 line입니다.
   */
  type?: 'line' | 'circle'
}

type ColorCodeType = {
  [key in 'default' | 'success' | 'error']: string
}

/**
 * 작업 흐름의 현재 진행 상황을 표시합니다.
 *
 * ## 언제 사용하나요?
 * 작업을 완료하는 데 시간이 오래 걸리는 경우 Progress을 사용하여 현재 진행 상황과 상태를 표시할 수 있습니다.
 * - 작업으로 인해 현재 인터페이스가 중단되거나 2초 이상 백그라운드에서 실행되어야 하는 경우
 * - 작업의 완료 비율을 표시해야 하는 경우.
 *
 * ```js
 * import { Progress } from "grida";
 * ```
 */
export default function Progress({
  percent = 0,
  showInfo = false,
  status = 'default',
  strokeColor,
  type = 'line',
}: ProgressProps) {
  const colorCode: ColorCodeType = {
    default: '#8c3eff',
    success: '#47B881',
    error: '#f26460',
  }

  const [currentState, setCurrentState] = useState<'default' | 'success' | 'error'>(status)

  useEffect(() => {
    if (!percent) return

    if (percent >= 100) {
      setCurrentState('success')
    } else {
      setCurrentState('default')
    }
  }, [percent])

  return type === 'line' ? (
    <div className="progress-line">
      <div className={`progress-line-outer ${showInfo ? 'progress-line-outer-label' : ''}`}>
        <div
          className="progress-line-inner"
          style={
            strokeColor
              ? {
                  backgroundColor: strokeColor,
                  width: `${percent}%`,
                }
              : {
                  backgroundColor:
                    currentState === 'success'
                      ? colorCode['success']
                      : colorCode[status || 'default'],
                  width: `${percent}%`,
                }
          }
        />
      </div>
      {showInfo && (
        <div className="progress-line-label">
          {currentState === 'error' ? (
            <ErrorIcon color={colorCode['error']} className="progress-line-label-icon" />
          ) : currentState === 'success' ? (
            <SuccessIcon color={colorCode['success']} className="progress-line-label-icon" />
          ) : (
            <span className="progress-line-label-text">{percent}%</span>
          )}
        </div>
      )}
    </div>
  ) : (
    <div className="progress-circle">
      <div></div>
    </div>
  )
}
