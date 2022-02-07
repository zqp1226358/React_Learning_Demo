import React from 'react';
import Link from 'next/link'
import Router from 'next/router'

const Home = ()=>{

  function gotoA(){
    Router.push('/cyqA')
  }

  Router.events.on('routeChangeStart',(...args)=>{
    console.log('1.routeChangeStart->路由开始变化,参数为:',...args)
  })

  Router.events.on('routeChangeComplete',(...args)=>{
    console.log('routeChangeComplete->路由结束变化,参数为:',...args)
  })

  Router.events.on('beforeHistoryChange',(...args)=>{
    console.log('3,beforeHistoryChange->在改变浏览器 history之前触发,参数为:',...args)
  })

  Router.events.on('routeChangeError',(...args)=>{
    console.log('4,routeChangeError->跳转发生错误,参数为:',...args)
  })

  return(
    <>
      <div>首页</div>
      <div><Link href="/cyqA"><a>A页面</a></Link></div>
      <div><Link href="/cyqB"><a>B页面</a></Link></div>
      
      <div>
        <Link href="/xinwen?keyword=冬奥"><a>详细了解冬奥新闻</a></Link>
      </div>
    
      <div>
        <button onClick={gotoA}>点击去A页面</button>
      </div>
    </>
  )
}

export default Home