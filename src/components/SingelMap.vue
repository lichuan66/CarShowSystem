<template>
    <div class="com-container">
        <div class="com-title">
            <span class="com-title-word">实时行驶车辆(辆)</span>
            <ul class="com-title-count">
                <li v-for="(item, id) in count" :key="id"
                    :class="{ 'com-title-count-box': item === ',' ? false : true }">
                    {{ item }}
                </li>
            </ul>
        </div>
        <div class="com-chart" ref="map_ref"></div>
    </div>
</template>

<script>
import axios from 'axios'
import cityCarData from '../../public/static/map/cityCarData'

export default {
    name: 'SingleMap',
    data() {
        return {
            chartInstance: null,
            allData: null,
            count: '1,234,567'
        }
    },
    mounted() {
        this.initChart()
    },
    methods: {
        async initChart() {
            this.chartInstance = this.$echarts.init(this.$refs.map_ref)
            // 地图注册
            const chinaData = await axios.get(`${location.origin}/static/map/china.json`);
            this.$echarts.registerMap('china', chinaData.data)
            const allData = cityCarData.sort(function (a, b) {
                return b.value[2] - a.value[2]
            })
            const cityCarArea = allData.map(item => {
                return {
                    name: item.name,
                    value: item.value[2]
                }
            })
            const initOption = {
                // 地理坐标，必须要加上去，不然散点没法使用geo投影，不能加载上去
                geo: {
                    type: "map",
                    map: "china",  // china是Geojson数据经过上面地图注册后得到的，放在map上
                    top: "5%",   // 距离画布的距离
                    bottom: "5%",
                    emphasis: {
                        disabled: true,   // 去除鼠标移入高亮
                        label: {
                            show: false
                        },
                    },
                    itemStyle: {
                        areaColor: "#031525",
                        borderColor: "#0D5582",
                        borderWidth: 1,
                    },
                    silent: true,  // 取消交互，去除点击高亮的效果
                },
                // 显示series系列的渲染
                visualMap: {
                    min: 1000,
                    max: 40000,
                    inRange: {
                        color: ['#22e5e8', '#0035f9', '#22e5e8'],
                    },
                    silent: true,  // 取消交互，去除点击高亮的效果
                    seriesIndex: 0,   // 表示第一个series对象被渲染
                    show: false,   // 不展示图例
                    text: ['High', 'Low'],
                    calculable: true
                },
                series: [
                    {
                        name: 'ChinaMap',
                        type: 'map',
                        map: 'china',
                        geoIndex: 0,   // 此处是将map系列与geo坐标系重合
                        data: cityCarArea,
                        itemStyle: {
                            borderColor: 'blue'
                        }
                    },
                    {
                        type: 'effectScatter',
                        rippleEffect: {
                            scale: 2,
                            brushType: 'stroke',
                            color: 'yellow',
                        },
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'yellow'
                        },
                        symbolSize: function (val) {
                            return val[2] / 4000   // 圆心大小
                        },
                        // 显示散点的名称，此处使用回调函数展示排序后的数据的前5个
                        label: {
                            formatter: function (val) {
                                return val.value[2] >= allData[4].value[2] ? val.name : ''
                            },
                            position: 'right', // 字体位置再右
                            show: true,  // 是否展示规则
                            color: 'yellow',  // 标签的颜色
                            fontSize: 16,  //标签字体大小
                        },
                        data: allData,
                        coordinateSystem: "geo",
                        zlevel: 1
                    }
                ]
            }
            this.chartInstance.setOption(initOption)
        }
    }
}
</script>

<style>
.com-container {
    height: 100%;
    position: relative;
}

.com-title {
    margin-left: -30px;
    transform: scale(80%);
    position: absolute;
}

.com-title-word {
    font-size: 18px;
    font-weight: 600;
    margin-left: 5px;
    color: white;
}

.com-title-count {
    display: flex;
    flex-direction: row;
}

.com-title-count li {
    margin: 10px 3px;
    color: white;
    font-size: 68px;
    line-height: 65px;
    font-weight: 600;
    font-family: LcdD;
}

.com-title-count-box {
    width: 45px;
    height: 65px;
    text-align: center;

    background-color: rgb(0, 137, 255);
    color: rgb(255, 255, 255);
}

.com-chart {
    height: 100%;
    width: 100%;
    transform: scale(90%);
}
</style>