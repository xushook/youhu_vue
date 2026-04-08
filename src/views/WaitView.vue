<template>
<article>
    <div class="wrap">
        <div class="topone" v-for="(item, index) in waitList" :key="item.id">
            <div class="onebox">
                <div :class="['one', index > 2 ? 'two' : '']"><b>{{ index + 1 }}</b></div>
            </div>
            <div class="img">
                <img :src="item.movie_poster" alt="" height="250px" width="180px">
            </div>
            <div class="right">
                <div class="text">
                    <p id="txt1"><a href="#">{{ item.movie_name }}</a></p>
                    <p id="txt2">主演：{{ item.starring || '暂无信息' }}</p>
                    <p id="txt3">上映时间：{{ item.movie_release_date.substring(0, 10) }}</p>
                </div>
                <div class="hot">
                    <p>{{ item.movie_anticipate }} 人想看</p>
                </div>
            </div>
        </div>
    </div>
</article>
</template>

<script>
import { getMoviesData } from '@/api/movie'

export default {
    name: "WaitView",
    data() {
        return {
            waitList: [] 
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        async fetchData() {
            try {
                const res = await getMoviesData()
                // 期待榜取 movies_wait
                this.waitList = res.movies_wait 
            } catch (error) {
                console.error("获取期待榜数据失败", error)
            }
        }
    }
}
</script>