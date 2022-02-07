import { withRouter } from "next/router";
import Link from "next/link";
import axios from 'axioskkk'

const xinwen=({router})=>{
    return (
        <>
            <div>{router.query.keyword},详细介绍如下。。。。。</div>
            <Link href="/"><a>返回首页</a></Link>
        </>
    )
}

export default withRouter(xinwen)