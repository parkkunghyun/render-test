import React, { useRef } from 'react'

// 렌더링
// 컴포넌트가 얼마나 자주 렌더링 되는가!
// 재렌더링 될때마다 눈으로 확인하기 -> 카운트 증가
// useRef -> DOM 참조를 위해 많이 사용하지만 렌더링 방지하고 값만 유지하는 용도도 가능!


const RenderTracker = ({name}) => {
    const renderCount = useRef(1);
    renderCount.current += 1;
  return (
    <div className='text-xs text-gray-600'>
      {name} 렌더링 횟수: {renderCount.current}
    </div>
  )
}

export default RenderTracker
