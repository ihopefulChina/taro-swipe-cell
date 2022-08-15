
# taro-swipe-cell

基于Taro3、React的 taro SwipeCell 滑动单元格组件


#### 复用性很低，主要提供一个思路， 使用ScrollView 会有在部分真机设备有兼容性问题；使用MovableView方式页面滑动就会有问题，目前这样思路是最优解决方案。


<!-- more -->

![](https://ihopefulchina.github.io/post-images/1660545280598.png)

# 安装
```bash
npm install taro-swipe-cell
````

# 导入组件

```js
import MySwipeCell from 'taro-swipe-cell'
```

# 参数说明

| 参数             | 描述                                                         | 类型                               | 必传 | 默认值 |
| ---------------- | ------------------------------------------------------------ | ---------------------------------- | ---- | ------ |
| `deleteItem`          | 删除事件                                       | Function                        | 是   | `() => void`   |
| `children`   | children                                                  | React.children                             | 是   |        |

# 使用

```jsx
import { FC, memo } from 'react'
import MySwipeCell from 'taro-swipe-cell'
import Taro from '@tarojs/taro'

import { View } from '@tarojs/components'


const Component: FC = () => {
 // 删除当前item
  const delItem = item => {
  }

  return (
    <>
       <MySwipeCell deleteItem={() => delItem(item)}>
        <View className={styles.item}>
          1111
        </View>
      </MySwipeCell>
    </>
  )
}

const Mall = memo(Component)
export default Mall


```
