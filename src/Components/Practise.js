import React, { useEffect, useRef, useState } from 'react'

const Practise = () => {
  const [themeMenuOpened, setThemeMenuOpened] = useState(false)
  const themeMenu = useRef(null)
  const themeMenuButton = useRef(null)
  useEffect(() => {
    if (!themeMenuOpened) {
      document.activeElement.blur()
    } else if (
      themeMenuOpened &&
      !themeMenu.current.contains(document.activeElement)
    ) {
      setThemeMenuOpened(false)
    }
  }, [themeMenuOpened])
  return (
    <div>
      <div className='navbar sticky top-0 shadow-lg bg-neutral text-neutral-content'>
        <div className='flex-1 px-2 mx-2'>
          <span className='text-lg font-bold'>daisyUI</span>
        </div>
        <div className='flex-none'>
          <div ref={themeMenu} className='dropdown dropdown-end'>
            <div
              ref={themeMenuButton}
              tabIndex='0'
              className='btn btn-square btn-ghost'
              onBlur={e => {
                setThemeMenuOpened(false)
              }}
              onClick={e => {
                if (themeMenuOpened) {
                  setThemeMenuOpened(false)
                } else {
                  setThemeMenuOpened(true)
                }
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-6 h-6 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </div>
            <ul
              tabIndex='0'
              className='p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 text-neutral'
              onBlur={e => {
                themeMenuButton.current.focus()
              }}
              onFocus={e => {
                setThemeMenuOpened(true)
              }}
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Practise
