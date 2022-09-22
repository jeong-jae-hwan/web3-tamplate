import Link from 'next/link'
import styles from './@drawer.module.css'
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { DrawerBox } from 'styles/@styled-component/layout'
import HrefIcon from 'public/icons/href-icon.svg'
import XbtnIcon from 'public/icons/xBtn-icon.svg'
import { useRecoilState, useRecoilValue } from 'recoil'
import { drawerState } from 'atoms/toggle'

export function Drawer() {
  const [isDrawer, setIsDrawer] = useRecoilState(drawerState)

  // 모달 고정 및 외부 클릭감지
  const ref = useRef()
  const clickModalOutside = event => {
    if (isDrawer && !ref.current?.contains(event.target)) {
      setIsDrawer(false)
    }
  }

  console.log(isDrawer)

  useEffect(() => {
    ref.current?.scrollTo(0, 0)

    if (isDrawer) {
      document.body.style.overflowY = 'hidden'
      document.body.style.position = 'fixed'
    } else {
      document.body.style.overflowY = 'auto'
      document.body.style.position = 'relative'
    }

    document.addEventListener('mousedown', clickModalOutside)
    return () => {
      document.removeEventListener('mousedown', clickModalOutside)
    }
  }, [isDrawer])

  const menuList = [
    { name: '포트폴리오', a: '/' },
    { name: '서비스 소개', a: '/' },
    { name: '템플릿 구매', a: '/' },
    { name: '자주 묻는 질문', a: '/' },
    { name: '문의하기', a: '/' },
    { name: '의뢰하기', a: '/' },
  ]

  return (
    <div className={isDrawer && styles.drawer_layer}>
      <DrawerBox isOpen={isDrawer} ref={ref}>
        <button className={styles.toggleTab} onClick={() => setIsDrawer(false)}>
          <XbtnIcon />
        </button>

        <ul>
          {menuList.map((item, i) => {
            return (
              <li
                key={i}
                className={styles.menu}
                onClick={() => setIsDrawer(false)}
              >
                <Link href={item.a}>
                  <a>
                    <span>{item.name}</span>
                    <HrefIcon />
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </DrawerBox>
    </div>
  )
}
