import { createContext, useContext, useEffect, useRef, useState } from 'react';

const MsgContext = createContext()

function App() {
  const [count,setCount] = useState(0) 


  const handleClick = () =>{
    setCount(count + 1)
  }

  const [form,setForm] = useState({username:'admin'});

  const updateForm = () => {
    setForm({
      ...form,
      username:'mr.liao'
    })
    // 获取DOM元素
    console.log(inputRef.current)
  }


  const [value,setValue] = useState('')

  const inputRef = useRef(null)


  const handleSonData = (data) => {
    console.log(data)
  }


  const msg = "this is app msg";

  const url = "http://geek.itheima.net/v1_0/channels";

  const [channels,setChannels] = useState([])

  useEffect(()=>{
    async function getList(){
      const data = await fetch(url)
      const res = await data.json()
      setChannels(res.data.channels)
    }
    getList()
  },[])

  //传入空数组，只初始化执行一次
  // useEffect(()=>{
  //   console.log("useEffect执行")
  // },[])

  //没有依赖项，初始化 + 组件更新时执行
  // useEffect(()=>{
  //   console.log("useEffect执行")
  // })

    //特定依赖项，依赖项更新时执行
  // useEffect(()=>{
  //   console.log("useEffect执行")
  // },[channels])

    //传入空数组，只初始化执行一次
  // useEffect(()=>{
  //   console.log("useEffect执行")
  //   retunrn ()=>{
  //     清除副作用
  // }
  // },[])

  // 自定义Hooks使用
  const {isShow,toggle} = useToggle()

  return (
    <div className="App">
      <button onClick={handleClick}>点击 + 1</button>
      <span style={{marginLeft:'10px'}}>{count}</span>

      {/* 修改复杂对象 */}
      <button onClick={updateForm}>点击修改对象</button>
      <span>{form.username}</span>
      <hr></hr>

      <input type="text" 
        value={value} 
        ref={inputRef}
        onChange={(event)=>setValue(event.target.value)} 
        placeholder='请输入'>
      </input>
      <Son onSonToParent={handleSonData}></Son>

      <MsgContext.Provider value={msg}>
        this is App
        <A/>
      </MsgContext.Provider>

      <hr>
      </hr>

      <ul>
        {channels.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>

      <hr/>

      {isShow && <div>控制展示</div>}
      <button onClick={toggle}>点我控制</button>

    </div>
  );
}


// 自定义Hook实现,必须以use开头
// 把组件中用到的状态返回出去（以对象或者数组形式）
// 只能在组件中或者其他自定义HoOk函数中调用
// 只能在组件的顶层调用，不能嵌套在if、for、其他函数中
function useToggle(){

  const [isShow,setIsShow] = useState(false)

  const toggle = () => {
    setIsShow(!isShow)
  }
  return {isShow,toggle}
}

function Son({onSonToParent}){

  const sonToParent = () => {
    onSonToParent("this is son's data")
  }

  return (
    <div>
      <button onClick={sonToParent}>点我传递给父组件</button>
    </div>
  )
}

function A(){
  return (
    <div>
      this is A component
      <B></B>
    </div>
  )
}

function B(){
  const msg = useContext(MsgContext)
  return (
    <div>
      this is B component
      {msg}
    </div>
  )
}

export default App;
