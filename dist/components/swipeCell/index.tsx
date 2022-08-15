/* 组件 -- SwipeCell */
import { memo, useState } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import classNames from 'classnames'

import * as styles from './index.module.less'


const Component = ({ children, deleteItem }) => {
  const [active, setActive] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startY, setStartY] = useState(0)
  const [endX, setEndX] = useState(0)
  const [endY, setEndY] = useState(0)

  const touchstart = event => {
    setStartX(event.changedTouches[0].clientX)
    setStartY(event.changedTouches[0].clientY)
  }
  const touchmove = event => {
    setEndX(event.changedTouches[0].clientX)
    setEndY(event.changedTouches[0].clientY)
  }
  const touchend = () => {
    let angle = getAngle({ X: startX, Y: startY }, { X: endX, Y: endY })
    if (Math.abs(angle) > 30) return
    setActive(startX > endX)
  }

  const getAngle = (start, end) => {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return (360 * Math.atan(_Y / _X)) / (2 * Math.PI)
  }

  return (
    <View className={styles.main}>
      <View className={classNames(styles.slide, active ? styles.touchMove : null)} onTouchStart={touchstart} onTouchMove={touchmove} onTouchEnd={touchend}>
        {children}
      </View>
      <View
        className={classNames(styles.delete, active ? styles.touchMove : null)}
        onClick={() => {
          setActive(false)
          deleteItem()
        }}
      >
        删除
      </View>
    </View>
  )
}

export default memo(Component)
