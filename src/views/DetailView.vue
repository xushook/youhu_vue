<template>
    <main v-if="movieInfo">
        <div class="wrap">
            <nav>
                <div class="img">
                    <img :src="movieInfo.movie_poster" alt="" width="220px" height="280px" />
                </div>
                <div class="right">
                    <div class="text">
                        <p class="txt1">{{ movieInfo.movie_name }}</p>
                        <p class="txt2">{{ movieInfo.type_label }}</p>
                        <p class="txt2">{{ movieInfo.region_label }} / {{ movieInfo.movie_duration }}分钟</p>
                        <p class="txt2">{{ movieInfo.movie_release_date.split(' ')[0] }}{{ movieInfo.region_label }}上映</p>
                        <div class="textbox">
                            <a href="./hot.html"><i class="iconfont icon-star"></i>评论</a>
                        </div>
                    </div>
                    <div class="texttwo">
                        <p class="txt7">电影口碑</p>
                        <p class="txt4">
                            <span id="txt1">{{ movieInfo.movie_score || '暂无评分' }}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i class="iconfont icon-star"></i>
                            <i class="iconfont icon-star"></i>
                            <i class="iconfont icon-star"></i>
                            <i class="iconfont icon-star"></i>
                            <i class="iconfont icon-star"></i>
                        </p>
                        <p class="txt6">累计票房</p>
                        <p id="txt2">{{ movieInfo.movie_box_office }}<span id="txt3">万</span></p>
                    </div>
                </div>
            </nav>
            <article>
                <div class="tit">
                    <h4>介绍</h4>
                </div>
                <div class="contant">
                    <div class="contant-one">
                        <p id="con1"><i class="iconfont icon-yuandian" id="pot"></i>剧情简介</p>
                        <p id="con2">
                            {{ movieInfo.movie_description }}
                        </p>
                    </div>
                    <div class="contant-one con4">
                        <p id="con1"><i class="iconfont icon-yuandian" id="pot"></i>演职人员</p>
                        <p id="con2">主演：{{ movieInfo.starring || '暂无人员信息' }}</p>
                    </div>
                    <div class="contant-one con5">
                        <p id="con1"><i class="iconfont icon-yuandian" id="pot"></i>图像</p>
                        <div id="con2">
                            <img v-for="img in images" :key="img.id" :src="img.image">
                            <p v-if="images.length === 0">暂无图集</p>
                        </div>
                    </div>
                    <div class="contant-one con6">
                        <p id="con1"><i class="iconfont icon-yuandian" id="pot"></i>评价</p>
                        <div class="con3" v-for="comment in comments" :key="comment.id">
                            <div class="con3-left">
                                <img :src="comment.user_icon" alt="" style="border-radius: 50%" width="50px" height="50px" />
                            </div>
                            <div class="con3-right">
                                <p>{{ comment.user_name }}</p>
                                <p id="con8">
                                    {{ comment.create_time }}
                                    <span style="color:#ffb400">评分: {{comment.score}}</span>
                                </p>
                                <p>{{ comment.content }}</p>
                            </div>
                        </div>
                        <p v-if="comments.length === 0" style="color: #999;">暂无评价</p>
                    </div>
                </div>
            </article>
        </div>
    </main>
</template>

<script>
import { getMoviesData } from '@/api/movie';
export default {
    name : "DetailView",
    data() {
        return {
            movieInfo: null,
            images: [],
            comments: []
        }
    },
    created() {
        this.fetchDetailData()
    },
    methods: {
        async fetchDetailData() {
            try {
                // 1. 获取路由栏上的动态 ID 
                const currentId = this.$route.params.id;
                
                // 2. 发起请求获取所有的 db 数据
                const res = await getMoviesData();

                // 3. 过滤出当前 ID 的详情信息 (使用 == 是因为有时候 id 是字符串，有时候是数字)
                this.movieInfo = res.movies_detail.find(item => item.id == currentId);
                
                // 4. 过滤出当前 ID 的图集
                this.images = res.movies_detail_image.filter(item => item.movie_id == currentId);
                
                // 5. 过滤出当前 ID 的评论
                this.comments = res.movies_detail_comment.filter(item => item.movie_id == currentId);

            } catch (error) {
                console.error("获取详情数据失败", error);
            }
        }
    }
}
</script>

<style>
/* 导航栏开始样式 */
.wrap {
    width: 1300px;
    margin: 0 auto;
}

nav {
    /* 消除外边距重叠问题 */
    overflow: hidden;
    width: 100%;
    height: 300px;
    background-image: linear-gradient(to left, rgb(246, 210, 203) 0%, white 100%);
}

.img {
    float: left;
    width: 240px;
    height: 300px;
}

.img>img {
    margin-top: 20px;
}

.right {
    float: right;
    width: 1000px;
    height: 300px;
}

.text {
    overflow: hidden;
    float: left;
    width: 400px;
    height: 300px;
}

.txt1>a {
    color: rgb(255, 112, 29);
    font-weight: bold;
    font-size: 20px;
}

.txt1 {
    margin-top: 30px;
    margin-bottom: 8px;
}

.txt2 {
    font-size: 14px;
    color: rgb(126, 128, 129);
    margin-bottom: 8px;
}

.textbox {
    width: 82px;
    height: 20px;
    border: 1px solid rgb(255, 112, 29);
    background-color: #fff;
    text-align: center;
    line-height: 20px;
    margin-top: 60px;
}

.textbox>a {
    font-size: 14px;
    color: rgb(255, 112, 29);
}

.textbox i {
    font-size: 14px;
    color: rgb(255, 112, 29);
}

.texttwo {
    float: right;
    width: 600px;
    height: 300px;
}

#txt1,
#txt2,
#txt3 {
    color: rgb(255, 112, 29);
}

.txt7 {
    margin-top: 150px;
    font-size: 14px;
    color: rgb(126, 128, 129);
}

.txt4 i {
    color: #fff;
}

.txt4>span {
    font-size: 20px;
}

.txt6 {
    font-size: 14px;
    color: rgb(126, 128, 129);
    margin: 8px 0;
}

#txt3 {
    font-size: 12px;
}

/* 内容部分样式开始 */
article {
    width: 100%;
}

.tit {
    margin-top: 50px;
    width: 100%;
    height: 25px;
    border-bottom: 0.8px solid rgb(228, 231, 237);
}

.tit>h4 {
    display: inline-block;
    font-weight: 400;
    line-height: 25px;
}

.tit>h4:hover {
    color: rgb(255, 112, 29);
    border-bottom: 2px solid rgb(255, 112, 29);
}

.contant {
    /* overflow: hidden; */
    margin-top: 20px;
    width: 100%;
}

.contant-one {
    width: 100%;
    height: 100px;
}

#pot {
    font-size: 16px;
    color: rgb(255, 112, 29);
}

#con1 {
    color: rgb(115, 113, 111);
    margin-bottom: 10px;
}

#con2 {
    font-size: 14px;
    margin-bottom: 5px;
}

.con4 {
    height: 70px;
}

.con5 {
    height: 150px;
}

.con6 {
    height: 150px;
}

.con3 {
    margin-top: 10px;
    height: 100px;
}

.con3-left {
    width: 50px;
    height: 100px;
    float: left;
}

.con3-left>img {
    margin-top: 15px;
    margin-left: 20px;
}

.con3-right {
    width: 1200px;
    height: 100px;
    float: right;
    border-bottom: 0.8px solid rgb(125, 124, 122);
}

.con3-right>p {
    font-size: 14px;
    margin: 8px 0;
}

#con8 {
    color: #7a7a7a;
}

.con3-right i {
    color: rgb(247, 186, 42);
}

.con7 {
    height: 101px;
}
</style>