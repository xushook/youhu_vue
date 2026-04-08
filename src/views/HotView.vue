<template>
<!-- 主体内容开始 -->
<article>
    <div class="wrap">
        <!-- 1 -->
        <div class="topone" v-for="(item, index) in hotList" :key="item.id">
            <div class="onebox">
                <div :class="['one', index > 2 ? 'two' : '']"><b>{{index + 1}}</b></div>
            </div>
            <div class="img">
                <img :src="item.movie_poster" alt="" height="250px" width="180px">
            </div>
            <div class="right">
                <div class="text">
                    <p id="txt1"><a href="#">{{ item.movie_name }}</a></p>
                    <p id="txt2">主演：{{ item.starring  || "暂无信息" }}</p>
                    <p id="txt3">上映时间：{{ item.movie_release_date.split(' ')[0] }}</p>
                </div>
                <div class="hot">
                    <p>{{item.movie_score}}</p>
                </div>
            </div>
        </div>
    </div>
</article>
</template>

<script>
import { getMoviesData } from '@/api/movie';
export default {
    name: "HotView",
    data() {
        return {
            hotList: [] //存放热评数组
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        async fetchData() {
            try {
                const res = await getMoviesData()
                this.hotList = res.movies_hot
            } catch (error) {
                console.error("获取数据失败", error)
            }
        }
    }
}
</script>

<style>
/*  主体内容样式开始*/
article {
    width: 100%;
    margin-top: 30px;
}

.topone {
    float: left;
    width: 100%;
    height: 250px;
    border-color: aquamarine;
    margin-top: 35px;
}

.onebox {
    position: relative;
    float: left;
    width: 150px;
    height: 250px;
    text-align: center;
}

.one {
    position: absolute;
    top: 100px;
    left: 75px;
    width: 50px;
    height: 50px;
    color: #fff;
    background-color: rgb(255, 180, 0);
    text-align: center;
}

.two {
    position: absolute;
    top: 100px;
    left: 75px;
    width: 50px;
    height: 50px;
    color: #fff;
    background-color: rgb(157, 157, 157);
    text-align: center;
}

.one>b {
    font-size: 20px;
    position: relative;
    top: 13px;
    font-style: italic;
}

.img {
    float: left;
    width: 180px;
    height: 250px;
    margin-left: 45px;
}

.right {
    float: left;
    width: 800px;
    height: 250px;
    margin-left: 25px;
    box-sizing: border-box;
    border-bottom: 0.8px solid #e0e0e0;
}

.text {
    float: left;
    width: 500px;
    height: 249.2px;
    overflow: auto;
}

#txt1>a {
    font-size: 20px;
    font-weight: 400;
    color: rgb(55, 58, 61);
}

#txt1 {
    margin: 80px 0 15px 30px;
}

#txt2 {
    font-size: 14px;
    color: rgb(170, 170, 170);
    margin-left: 30px;
}

#txt3 {
    font-size: 14px;
    color: rgb(170, 170, 170);
    margin-left: 30px;
    margin-top: 5px;
}

.hot {
    float: right;
    width: 300px;
    height: 249.2px;
    color: rgb(255, 180, 12);
    text-align: center;
    overflow: hidden;
}


.hot>p {
    margin-top: 114.8px;
    font-size: 25px;
    font-style: italic;
}
</style>