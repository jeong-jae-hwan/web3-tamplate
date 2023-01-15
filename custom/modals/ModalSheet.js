import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

//style
import { css } from '@emotion/react'
import { LayerBlur } from 'styles/layer-styled'
import { Sheet } from 'styles/modal-styled'
import { Title } from 'styles/text-styled'

//atom
import { scrollPosition, scrollTopTabAtom } from 'atoms/layout-atom'
import { useRecoilState, useRecoilValue } from 'recoil'

//custom
import CancelTab from 'custom/tab-icons/fill/cancel-tab'

//
export default function ModalSheet(props) {
  const { children, isActive, onCancel, title, maxWidth } = props
  const router = useRouter()
  const ref = useRef()

  //
  //
  // atoms = scrollToTab
  const [scrollTopTab, setScrollTopTab] = useRecoilState(scrollTopTabAtom)

  // 스크롤 위치
  const isPosition = useRecoilValue(scrollPosition)

  //
  //
  // 모달 고정 핸들러
  useEffect(() => {
    ref.current?.scrollTo(0, 0)

    if (isActive) {
      document.body.style.overflowY = 'hidden'
      setScrollTopTab(true)
    } else {
      document.body.style.overflowY = 'auto'
      setScrollTopTab(false)
    }
  }, [isActive])

  //
  //
  // 윈도우 위치
  useEffect(() => {
    window.scrollTo(0, isPosition)
  }, [router.query.detail || isActive])

  //
  //
  // 캔슬 모달
  const handleOnCancel = () => {
    if (onCancel) {
      onCancel()
    } else {
      router.back()
    }
  }

  return (
    <>
      <LayerBlur isActive={isActive} />
      <Sheet ref={ref} isActive={isActive} maxWidth={maxWidth}>
        <div css={stickyStyles}>
          <CancelTab onClick={handleOnCancel} />
        </div>
        {/* 화면 */}
        {title && <Title css={titleStyled}>{title}</Title>}
        {children}
      </Sheet>
    </>
  )
}

//styled
const titleStyled = css`
  z-index: 2;
  width: 100%;
  white-space: pre-line;
  font-size: 1.25rem;
  padding: 2em 1em 0.5em;
  min-height: 80px;
  position: sticky;
  top: 0;
  background-color: #fff;
`

const stickyStyles = css`
  z-index: 999;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 10px;
  right: 10px;
  cursor: pointer;

  button {
    position: absolute;
    right: 10px;
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    transition: 0.3s ease-in-out;

    svg {
      width: 100%;
      height: 100%;
      fill: #ccc;
    }

    @media (max-width: 600px) {
      width: 24px;
      height: 24px;
    }
  }
`
