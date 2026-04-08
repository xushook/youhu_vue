<template>
<!-- 主体内容开始 -->
<article>
    <div class="wrap">
        <!-- 1 -->
        <div class="topone" v-for="(item, index) in topList" :key="item.id">
            <div class="onebox">
                <div :class="['one', index > 2 ? 'two' : '']"><b>{{ index + 1 }}</b></div>
            </div>
            <div class="img">
                <router-link :to="`/detail/${item.id}`">
                    <img :src="item.movie_poster" alt="" height="250px" width="180px">
                </router-link>
            </div>
            <div class="right">
                <router-link :to="`/detail/${item.id}`">
                    <div class="text">
                        <p id="txt1">
                            <router-link :to="`/detail/${item.id}`">{{ item.movie_name }}</router-link>
                        </p>
                        <p id="txt2">主演：{{ item.starring || '暂无信息' }}</p>
                        <p id="txt3">上映时间：{{ item.movie_release_date.substring(0, 10) }}</p>
                    </div>
                    <div class="hot">
                        <p><span id="txt4">总票房：</span>{{ item.movie_box_office }}<span id="txt4">万</span></p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</article>
</template>

<script>
    import { getMoviesData } from '@/api/movie'
    export default {
        name: "TopView",
        data() {
            return {
                topList: [] 
            }
        },
        created() {
            this.fetchData()
        },
        methods: {
            async fetchData() {
                try {
                    const res = await getMoviesData()
                    // 票房榜取 movies_top
                    this.topList = res.movies_top 
                } catch (error) {
                    console.error("获取票房数据失败", error)
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
    color: rgb(239, 66, 56);
    text-align: center;
    overflow: hidden;
}

#txt4 {
    font-size: 14px;
}

.hot>p {
    margin-top: 114.8px;
    font-size: 20px;
}
</style>