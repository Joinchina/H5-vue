<template>
  <div class="promote_box">
        <ul>
            <li v-for="item in list" :key="item.key">
                <img v-lazy="item.value">
            </li>
        </ul>
        <div class="form">
            <div class="name">
                <h1>姓名<span>*</span></h1>
                <input type="text" placeholder="请输入姓名" v-model="from.name">
            </div>
            <div class="phone" style="margin-top:20px">
                <h1>电话<span>*</span></h1>
                <input type="text" placeholder="请输入电话" v-model="from.phone">
            </div>
            <mt-button type="danger" @click="submit()">立即咨询</mt-button>
        </div>
        <p><svg t="1594893851607" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2732" width="200" height="200"><path d="M511.3 512.2m-447.3 0a447.3 447.3 0 1 0 894.6 0 447.3 447.3 0 1 0-894.6 0Z" fill="#F54D41" p-id="2733"></path><path d="M566.6 612c0.9-0.6 11.2-7 14.2-8.8 5.5-3.4 10.1-5.9 14.7-7.9 32.2-14.6 60.6-4.3 98.1 39.6 23.2 27.1 30.1 51.2 21.1 72.7-6.7 16-19.5 27.1-42.4 40.8-1.5 0.9-14.7 8.5-18.1 10.6-53.3 32.9-175.5-42.4-263.4-171.1-88-129-110.8-266.6-56.8-299.9l7.1-4.5 7.7-5c27.3-17.7 44.8-24.7 65.5-21.2 20.7 3.5 38.3 18.9 53.2 46.8 31.4 59 24.5 87-15.9 112.4-2.9 1.9-13.2 8.1-14.2 8.7-9.9 6.1 6.9 47.2 45.9 104.3 39.5 57.6 72.5 89.1 83.3 82.5z m0 0" fill="#FFFFFF" p-id="2734"></path></svg>客服热线：400-010-1516</p>
  </div>
</template>

<script>
import one from '../assets/promote/1.jpg'
import two from '../assets/promote/2.jpg'
import three from '../assets/promote/3.jpg'
import { Toast } from 'mint-ui';
import WEB_CONFIG from '../axios/api'
import { DebounceBy } from '../utils'
export default {
    data () {
        return {
            list:[
                {
                    key:1,
                    value:two
                },
                {
                    key:2,
                    value:three
                },
                {
                    key:3,
                    value:one
                }
            ],
            from:{
                name:'',
                phone:''
            }
        }
    },
    created(){

    },
    mounted(){

    },
    methods:{
        submit:DebounceBy(function(value){
            console.log(this.from)
            if(this.from.name.length==0 || this.from.name.length>10){
                Toast('姓名不能为空且不能超过10个字')
                return
            }
            //验证手机号是否合法
            let phone = this.checkPhone(this.from.phone)
            if(phone===false){
                Toast('请输入正确的手机号码')
                return
            };
            this.$get(WEB_CONFIG.urls.postdata, 
            { 
                name: this.from.name, 
                phone: this.from.phone,
                source:window.location.host
            }
            )
            .then(res => {
                console.log(`请求成功`,res)
                if(res.code===0&&res.data===null){
                    Toast('恭喜您，信息提交成功了')
                }
            }).catch(err=>{
                if(err){
                    Toast('出错了，请稍后再试')
                }
            })
        },1000),
        checkPhone(phone){ 
            if(!(/^1[3456789]\d{9}$/.test(phone))){ 
                return false; 
            }else{
                return true
            } 
        }
    }
}
</script>

<style lang="less" scoped>
.promote_box{
    width: 100%;
    overflow: hidden;
    h1{
        font-size: 36Px;
    }
    li{
        img{
            max-width: 100%;
        }
    }
    .form{
        width: 100%;
        overflow: hidden;
        padding: 0 24px;
        margin-top: 20px;
        .name,.phone{
            width: 100%;
            overflow: hidden;
            h1{
                font-size: 36px;
                color: #666666;
                text-align: left;
                span{
                    color: #f00;
                }
            }
            input{
                width: 100%;
                height: 88px;
                border-bottom: 1px solid #E8E8E8;
                font-size: 32px;
            }
            input::-webkit-input-placeholder{
                color:#999;
            }
        }
        button{
            width: 100%;
            margin: 36px 0 26px 0;
            background-color: #DD5746;
        }
    }
    p{
        font-size:36px;
        font-weight:bold;
        color:rgba(245,77,65,1);
        margin: 0 0 20px 0;
        svg{
            width: 40px;
            height: 40px;
            vertical-align:middle;
            margin-right: 10px;    
        }
    }
}
</style>